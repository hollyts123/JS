let userDate;
let sundaysSaturdays = [];
while (userDate !== '0') {
    userDate = prompt("Введіть значення у форматі 'рік-місяць-день'. Щоб завершити програму, натисніть 0");
    if (userDate === '0') {
        break;
    }

    let date = new Date(userDate);

    let dayOfWeek = date.getDay();

    switch (dayOfWeek) {
        case 0:
            console.log("Неділя");
            break;
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
    }

    if (dayOfWeek === 0 || dayOfWeek === 6) {
        sundaysSaturdays.push(date);
    }
}

for (let i = 0; i < sundaysSaturdays.length; i++) {
    console.log(sundaysSaturdays[i]);
}
