function showWeather(city, temperature) {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`);
}

showWeather('Сахалин', 25);

const SPEED_OF_LIGHT = 299792458;

function checkSpeed(speed) {
  if (speed > SPEED_OF_LIGHT) {
    console.log("Сверхсветовая скорость");
  } else if (speed < SPEED_OF_LIGHT) {
    console.log("Субсветовая скорость");
  } else {
    console.log("Скорость света");
  }
}

checkSpeed(111);
checkSpeed(5555555555);
checkSpeed(299792458);

const productName = "Сварочный аппарат";
const productPrice = 15000;

function buyProduct(budget) {
  if (budget >= productPrice) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const missingAmount = productPrice - budget;
    console.log(`Вам не хватает ${missingAmount}$, пополните баланс`);
  }
}

buyProduct(20000);
buyProduct(550);