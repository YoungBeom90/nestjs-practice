import { Logger } from 'tslog';
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readlinkSync,
  symlinkSync,
  unlinkSync,
} from 'fs';
import * as moment from 'moment';
import { ILogObj } from 'tslog/dist/types/interfaces';
import { LOGGER_DATE_FORMAT, YYYYMMDD_DASH } from '../infra/DateFormat';

const LOG_RETENTION_DAYS = 2;
const logDir = `${process.env.HOME}/logs`;
if (!existsSync(logDir)) {
  mkdirSync(logDir);
}
const symlinkFilename = 'app.log';

function format(logObject: ILogObj) {
  return `${moment(logObject.date).format(LOGGER_DATE_FORMAT)} ${
    logObject.logLevel
  } [${logObject.filePath}:${logObject.lineNumber} ${
    logObject.typeName && logObject.methodName
      ? logObject.typeName + '.' + logObject.methodName
      : logObject.functionName
  }] ${logObject.argumentsArray}`;
}

function removeOldFiles(logDir: string, currentDate: Date) {
  const filenames = readdirSync(logDir);
  for (const filename of filenames) {
    if (
      filename.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]).log$/)
    ) {
      const retentionLimitDate = moment(currentDate)
        .clone()
        .add(-LOG_RETENTION_DAYS, 'days');
      const logDate = moment(filename.split('.')[0], YYYYMMDD_DASH);
      if (logDate.isSameOrBefore(retentionLimitDate, 'day')) {
        unlinkSync(`${logDir}/${filename}`);
      }
    }
  }
}

function logToTransport(logObject: ILogObj) {
  try {
    const logFilename = `${moment(logObject.date).format(YYYYMMDD_DASH)}.log`;
    const logFilepath = `${logDir}/${logFilename}`;
    appendFileSync(logFilepath, format(logObject) + '\n');

    const symlinkFilepath = `${logDir}/${symlinkFilename}`;
    if (existsSync(symlinkFilepath)) {
      const link = readlinkSync(symlinkFilepath);
      if (link !== logFilepath) {
        unlinkSync(symlinkFilepath);
        symlinkSync(logFilepath, symlinkFilepath);
      }

      removeOldFiles(logDir, moment(logObject.date).toDate());
    } else {
      symlinkSync(logFilepath, symlinkFilepath);
    }
  } catch (e) {
    console.error(`log file error`, e);
  }
}

const logger = new Logger({
  type: 'pretty',
});

logger.attachTransport(logToTransport);

export const log = logger;
