import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

export const getToTimezone = (timestamp: number, unit: dayjs.UnitType) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.tz.setDefault('America/Sao_Paulo');

  return dayjs.utc(timestamp).tz('America/Sao_Paulo').get(unit);
};
