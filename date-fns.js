import {
  addDays,
  addHours,
  addMinutes,
  addMonths,
  addYears,
  format,
  isAfter,
  isBefore,
  isFuture,
  parseISO,
  subHours
} from "date-fns";

import dateFnsTZ from 'date-fns-tz';
import frenchLocale from 'date-fns/locale/fr/index.js';
import brLocale from 'date-fns/locale/pt-BR/index.js';


// creating new date
const parseDate = parseISO("2022-04-01 16:00:00");
console.log(parseDate);
const today = format(new Date("2022-04-01"), "dd.MM.yyyy");
console.log(today);
//=> 31.03.2022

//to format
const date = new Date("2022-04-01");
console.log(`${format(date, "EEEE, MMMM yyyy")}`); //==> Thursday, March 2022
console.log(`${format(date, "EEEE,MMMM do, yyyy hh:mm a")}`); //==> Thursday,March 31st, 2022 09:00 PM
console.log(`${format(date, "do  MMMM yyyy OOOO")}`); //==> 31st  March 2022 GMT-03:00

//math
//add || sub
const math = new Date("2020.12.20 10:12:00");
const addDaysValue = addDays(math, 4);
console.log(format(addDaysValue, "dd MMMM yyyy HH:mm")); //==> 24 December 2020 10:12

const addMonthsValue = addMonths(math, 3);
console.log(format(addMonthsValue, "dd MMMM yyyy HH:mm")); //==> 20 March 2021 10:12

const addYearsValue = addYears(math, 3);
console.log(format(addYearsValue, "dd MMMM yyyy HH:mm")); //==> 20 December 2020 10:12

const addMinutesValue = addMinutes(math, 40);
console.log(format(addMinutesValue, "dd MMMM yyyy HH:mm")); //==> 20 December 2020 10:12

// comparisons
const date1Before = new Date();
const date2Before = addHours(new Date(), 5);
const date3Before = subHours(new Date(), 5);
console.log(isBefore(date1Before, date2Before)); //==> false
console.log(isBefore(date1Before, date3Before)); //==> true

//isAfter
const date1After = new Date();
const date2After = addHours(new Date(), 5);
const date3After = subHours(new Date(), 5);
console.log(isAfter(date1After, date2After)); //==> false
console.log(isAfter(date1After, date3After)); //==> true

//isFuture
const date1Future = new Date();
const date2Future = addHours(new Date(), 5);
const date3Future = subHours(new Date(), 5);
console.log(isFuture(date1Future)); //==> false
console.log(isFuture(date2Future)); //==> true
console.log(isFuture(date3Future)); //==> false


// i18
const i18nDate = new Date('2019/01/01');
const formattedDateFrench = format(i18nDate, 'EEEE,MMMM do, yyyy hh:mm a', {
    locale: frenchLocale
});
console.log(formattedDateFrench); //==> mardi,janvier 1er, 2019 12:00 AM

const formattedDateBR = format(i18nDate, 'EEEE,MMMM do, yyyy hh:mm a', {
    locale: brLocale
});
console.log(formattedDateBR); //==> terça-feira,janeiro 1º, 2019 12:00 AM

//timezone
const parsedDate = parseISO('2020-12-01 16:00:00');
const znDate = dateFnsTZ.zonedTimeToUtc(parsedDate, 'America/Sao_Paulo');
console.log(znDate)
// 2018-04-01 19:00:00