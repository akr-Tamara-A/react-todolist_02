import { weekDays, months } from './constants';

export const getCurrentDate = (locale, date) => {
  return {
    year: date.getFullYear(),
    monthLong: months[locale].long[date.getMonth() - 1],
    monthShort: months[locale].short[date.getMonth() - 1],
    date: date.getDate(),
    weekdayLong: weekDays[locale].long[date.getDay()],
    weekdayShort: weekDays[locale].short[date.getDay()],
  }
};
