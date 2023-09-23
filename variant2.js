let num;
const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];

do {
    num = prompt("Введіть число від 1 до 7:");
    console.log(num);
} while (num === '' || num === ' ' || isNaN(Number(num)) || num <= 0 || num > 7);

let day = daysOfWeek[num - 1];
console.log(day);
