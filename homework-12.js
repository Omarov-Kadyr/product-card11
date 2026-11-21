class Truck {
  constructor(brand, model, maxLoad) {
    this.brand = brand;
    this.model = model;
    this.maxLoad = maxLoad;
  }

  drive() {
    console.log(`${this.brand} ${this.model} выехал в рейс. Грузоподъёмность: ${this.maxLoad} т`);
  }
}

class DumpTruck extends Truck {
  constructor(brand, model, maxLoad, bodyVolume) {
    super(brand, model, maxLoad);
    this.bodyVolume = bodyVolume;
  }

  unload() {
    console.log(`${this.brand} ${this.model} поднимает кузов и выгружает груз!`);
  }

  drive() {
    super.drive();
    console.log(`Объём кузова = ${this.bodyVolume} м³`);
  }
}

class RefrigeratorTruck extends Truck {
  constructor(brand, model, maxLoad, temperature) {
    super(brand, model, maxLoad);
    this.temperature = temperature;
  }

  coolDown() {
    console.log(`${this.brand} ${this.model} поддерживает температуру ${this.temperature}°C`);
  }

  drive() {
    super.drive();
    console.log(`Текущая температура в фургоне = ${this.temperature}°C`);
  }
}

const kamaz = new Truck('КАМАЗ', '54901', 20);
kamaz.drive();

const belaz = new DumpTruck('БЕЛАЗ', '7547', 45, 26);
belaz.drive();
belaz.unload();

const volvo = new RefrigeratorTruck('Volvo', 'FH', 18, -18);
volvo.drive();
volvo.coolDown();
