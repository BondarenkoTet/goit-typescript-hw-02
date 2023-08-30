enum DayWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
function isWeekend(day: DayWeek): boolean {
  return day === DayWeek.Saturday || day === DayWeek.Sunday;
}

const today = DayWeek.Saturday;
console.log(isWeekend(today));

export {};
