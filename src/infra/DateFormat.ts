export const MYSQL = 'YYYY-MM-DD HH:mm:ss.SSS';
export const LOGGER_DATE_FORMAT = 'YYYY-MM-DD HH:mm:ss.SSS';

export const YYYY = 'YYYY';
export const YYYYMM = 'YYYYMM';
export const YYMM = 'YYMM';
export const YYMMDD = 'YYMMDD';
export const YYMMDD_KOR = 'YY년 MM월 DD일';
export const YYYYMMDD = 'YYYYMMDD';
export const YYYYMMDD_KOR = 'YYYY년 MM월 DD일';
export const YYYYMM_DASH = 'YYYY-MM';
export const YYYYMMDD_DASH = 'YYYY-MM-DD';
export const YYYYMMDDHH = 'YYYYMMDDHH';
export const YYYYMMDDHHMM = 'YYYYMMDDHHmm';
export const YYYYMMDDHHMMSS = 'YYYYMMDDHHmmss';
export const DASH_YYYYMMDDHHMM = 'YYYY-MM-DD HH:mm';
export const DASH_YYYYMMDDHHMMSS = 'YYYY-MM-DD HH:mm:ss';
export const TIME = 'HH:mm:ss';
export const DYNAMO_HOUR_TIMESTAMP = 'YYYY-MM-DDTHH';
export const DYNAMO_MIN_TIMESTAMP = 'YYYY-MM-DDTHH:mm';

export const HH00 = 'HH00';
export const HH30 = 'HH30';
export const HOUR_ON_TIME = 'HH:00:00';

export type DateFormat =
  | typeof MYSQL
  | typeof YYYY
  | typeof YYYYMM
  | typeof YYMM
  | typeof YYMMDD
  | typeof YYYYMMDD
  | typeof YYYYMM_DASH
  | typeof YYYYMMDD_DASH
  | typeof YYYYMMDDHH
  | typeof YYYYMMDDHHMM
  | typeof YYYYMMDDHHMMSS
  | typeof DASH_YYYYMMDDHHMMSS
  | typeof DYNAMO_HOUR_TIMESTAMP
  | typeof DYNAMO_MIN_TIMESTAMP
  | typeof TIME
  | typeof HH00
  | typeof HH30
  | typeof HOUR_ON_TIME;
