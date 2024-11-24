let numbers = [10, 20, 30, 50, 235, 3000];

for (let number of numbers) {
    let firstDigit = number.toString()[0];
    if (firstDigit === '1' || firstDigit === '2' || firstDigit === '5') {
        console.log(number);
    }
}
for (let i = 20; i >= 0; i--) {
    console.log(i);
}
let trafficLights = {
    red : 'Стоп',
    yellow: 'Приготовься',
    green: 'Можно идти'
};

let color = prompt("Введите цвет светофора").toLowerCase().trim();

if (color === "красный") {
    console.log(trafficLights.red)
} else if (color === "жёлтый") {
    console.log(trafficLights.yellow)
} else if(color === "зелёный"){
        console.log(trafficLights.green)
}else {
    console.log("Введите цвет светофора")
}
