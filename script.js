let message = prompt("Введіть значення: ");
console.log(message);

if (message === 'false' || message === 'true') {
    console.log("Boolean");
} else if (message !== '' && message !== ' ' && !isNaN(Number(message))) {
    console.log("Number");
} else if (!isNaN(Date.parse(message))) {
    console.log("Date");
} else {
    console.log("String");
}
