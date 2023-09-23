let num;
do {
    num = prompt("Введіть число від 1 до 7:");
} while (num === '' || num === ' ' || isNaN(Number(num)) || num <= 0 || num > 7);

switch (Number(num)) {
    case 1:
        console.log("Понеділок");
        break;
    case 2:
        console.log("Вівторок");
        break;
    case 3:
        console.log("Середа");
        break;
    case 4:
        console.log("Четвер");
        break;
    case 5:
        console.log("П'ятниця");
        break;
    case 6:
        console.log("Субота");
        break;
    case 7:
        console.log("Неділя");
        break;
}
