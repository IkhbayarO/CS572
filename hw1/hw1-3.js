const isWeekend = function () {
    const todayDate = new Date();
    const day = todayDate.getDay();
    const arrDays = ['weekend', 'weekday', 'weekday', 'weekday', 'weekday', 'weekday', 'weekend'];
    return arrDays[day];
}
console.log(isWeekend());
