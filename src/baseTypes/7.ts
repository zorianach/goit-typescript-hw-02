/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum WeekDays {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT
}

function isWeekend(day: WeekDays): boolean {
  return (day === WeekDays.SUN || day === WeekDays.SAT);
}