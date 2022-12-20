import { DateTime } from "luxon";
import tk from "timekeeper";
//freeze time on 2022-12-15 12:00 -03:00
tk.freeze(new Date(2022, 11, 15, 12, 0));

// creating new date
const now = DateTime.now();
console.log(now.toISO()); //==> 2022-12-15T12:00:00.000-03:00
const localLa = DateTime.local({ zone: "America/Los_Angeles" });
console.log(localLa.toISO()); //==> 2022-12-15T07:00:00.000-08:00


const nowUtc = DateTime.utc();
console.log(nowUtc.toISO()); //==> 2022-12-15T15:00:00.000Z

//parse
//parse list ==> https://moment.github.io/luxon/#/formatting
const fromFormat = DateTime.fromFormat("2022-11-10 14:10", "yyyy-MM-dd HH:mm");
console.log(fromFormat.toISO()); //==> 2022-11-10T14:10:00.000-03:00

//from object (DateObjectUnits)
const fromObject = DateTime.fromObject({ year: 1999, month: 10, day: 10 });
console.log(fromObject.toISO()); //==> 1999-10-10T00:00:00.000-02:00
//from options list
// DateTime.fromJsDate()
// DateTime.fromMillis()
// DateTime.fromSQL()
// DateTime.fromIso()

//get (DateObjectUnits)
const getDate = DateTime.now();
console.log(getDate.get("day")); //==> 15
console.log(getDate.day); //==> 15
console.log(getDate.month); //==> 12
console.log(getDate.monthLong); //==> December

//set (DateObjectUnits)
const setDate = DateTime.now();
console.log(setDate.set({ day: 30 }).toISO()); //==> 2022-12-30T12:00:00.000-03:00
console.log(setDate.set({ day: 30, month: 1 }).toISO()); //==> 2022-01-30T12:00:00.000-03:00

//print
const printNow = DateTime.now();
console.log(printNow.toISO()); //==> 2022-12-15T12:00:00.000-03:00
console.log(printNow.toISODate()); //==> 2022-12-15
console.log(printNow.toISOTime()); //==> 12:00:00.000-03:00

//to format
//to format list ==> https://moment.github.io/luxon/#/formatting
const toFormatDate = DateTime.now();
console.log(toFormatDate.toFormat("yyyy-MM-dd --- hh:MM")); //==> 2022-12-15 --- 12:12

//math
const mathDate = DateTime.local();
console.log(mathDate.plus({ hours: 3, minutes: 2 }).toISO()); //==> 2022-12-15T15:02:00.000-03:00
console.log(mathDate.minus({ hours: 3, minutes: 2 }).toISO()); //==> 2022-12-15T08:58:00.000-03:00
console.log(mathDate.startOf("day").toISO()); //==> 2022-12-15T00:00:00.000-03:00
console.log(mathDate.startOf("year").toISO()); //==> 2022-01-01T00:00:00.000-03:00
console.log(mathDate.endOf("year").toISO()); //==> 2022-12-31T23:59:59.999-03:00

// i18n
const i18nDate = DateTime.now();
console.log(
  i18nDate.setLocale("fr").toLocaleString({ month: "long", day: "numeric" })
); //=> '15 décembre'
console.log(i18nDate.setLocale("en-GB").toLocaleString({ month: "long" })); //=> 'December'
console.log(i18nDate.setLocale("en-US").toLocaleString()); //=> '12/15/2022'

// TimeZones
console.log(DateTime.fromObject({}, { zone: "America/Los_Angeles" }).toISO()); //==> 2022-12-15T07:00:00.000-08:00 now, but expressed in LA's local time
console.log(DateTime.now().setZone("America/Los_Angeles").toISO()); //==> 2022-12-15T07:00:00.000-08:00 same
