"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = void 0;
const tslog_1 = require("tslog");
const fs_1 = require("fs");
const moment = require("moment");
const DateFormat_1 = require("../infra/DateFormat");
const LOG_RETENTION_DAYS = 2;
const logDir = `${process.env.HOME}/logs`;
if (!(0, fs_1.existsSync)(logDir)) {
    (0, fs_1.mkdirSync)(logDir);
}
const symlinkFilename = 'app.log';
function format(logObject) {
    return `${moment(logObject.date).format(DateFormat_1.LOGGER_DATE_FORMAT)} ${logObject.logLevel} [${logObject.filePath}:${logObject.lineNumber} ${logObject.typeName && logObject.methodName
        ? logObject.typeName + '.' + logObject.methodName
        : logObject.functionName}] ${logObject.argumentsArray}`;
}
function removeOldFiles(logDir, currentDate) {
    const filenames = (0, fs_1.readdirSync)(logDir);
    for (const filename of filenames) {
        if (filename.match(/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01]).log$/)) {
            const retentionLimitDate = moment(currentDate)
                .clone()
                .add(-LOG_RETENTION_DAYS, 'days');
            const logDate = moment(filename.split('.')[0], DateFormat_1.YYYYMMDD_DASH);
            if (logDate.isSameOrBefore(retentionLimitDate, 'day')) {
                (0, fs_1.unlinkSync)(`${logDir}/${filename}`);
            }
        }
    }
}
function logToTransport(logObject) {
    try {
        const logFilename = `${moment(logObject.date).format(DateFormat_1.YYYYMMDD_DASH)}.log`;
        const logFilepath = `${logDir}/${logFilename}`;
        (0, fs_1.appendFileSync)(logFilepath, format(logObject) + '\n');
        const symlinkFilepath = `${logDir}/${symlinkFilename}`;
        if ((0, fs_1.existsSync)(symlinkFilepath)) {
            const link = (0, fs_1.readlinkSync)(symlinkFilepath);
            if (link !== logFilepath) {
                (0, fs_1.unlinkSync)(symlinkFilepath);
                (0, fs_1.symlinkSync)(logFilepath, symlinkFilepath);
            }
            removeOldFiles(logDir, moment(logObject.date).toDate());
        }
        else {
            (0, fs_1.symlinkSync)(logFilepath, symlinkFilepath);
        }
    }
    catch (e) {
        console.error(`log file error`, e);
    }
}
const logger = new tslog_1.Logger({
    type: 'pretty',
});
logger.attachTransport(logToTransport);
exports.log = logger;
//# sourceMappingURL=logger.js.map