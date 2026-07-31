// объукт на основе моих данных

const user = {
  name: "Kadyr",
  surname: "Omarov",
  email: "Omarovkadyr05@gmail.com",
  Job: "developer",
  age: 20,
  country: "Russsia",
  city: "Nizhnevartovsk",
  relationshipStatus: "single",
}

console.log(user);

// объект с данными об автомобиле

const car = {
  brand: "Lada",
  model: "Niva",
  yearOfManufacture: 2023,
  color: "green",
  ViewOfTheGearbox: "mechanics",
}

// добавили свойство

car.owner = user;
console.log(car, car.owner.name);

// функция проверяющая максимальную скорость

function checkMaxSpeed(car) {
  if ("maxSpeed" in car) {
    console.log(car.maxSpeed);
} else {
  car["maxSpeed"] = 140; }
}

checkMaxSpeed(car);
console.log(car.maxSpeed);

// функция, которая получает первым аргументом — объект, а вторым аргументом — свойство объекта

function getPropertyValue(car, color) {
  console.log(car[color]);
}

getPropertyValue(car, "color");

//массив, который содержит названия продуктов

const products = ["bread", "meat", "vegetables"];
console.log(products);

// массив из книг

const books = [
  {
    title: "Гарри Поттер и философский камень", author: "Дж.К. Роулинг", year: 1997, coverColor: "green", genre: "фэнтези"
  },
  {
    title: "Бойцовский клуб", author: "Чак Паланик", year: 1996, coverColor: "black", genre: "контркультура"
  },
  {
    title: "Код да Винчи", author: "Дэн Браун", year: 2003, coverColor: "brown", genre: "детективный роман"
  },
  {
    title: "Сумерки", author: "Стефани Майер", year: 2005, coverColor: "black", genre: "романтическое фэнтези"
  },
];

// добавили еще одну книгу

books.push({
  title: "Аватар", author: "Джеймс Кэмерон", year: 2009, coverColor: "blue", genre: "фантастика"
});

console.log(books);

// добавили еще один массив с книгами Гарри Поттер

const harryPotterUniverse =
[
  {
    title: "Гарри Поттер и Тайная комната", author: "Дж.К. Роулинг", year: 1998, coverColor: "blue", genre: "фэнтези"
  },
  {
    title: "Гарри Поттер и узник Азкабана", author: "Дж.К. Роулинг", year: 1999, coverColor: "purple", genre: "фэнтези"
  },
  {
    title: "Фантастические твари и где они обитают", author: "Ньют Саламандер (Дж.К. Роулинг)", year: 2001, coverColor: "gold", genre: "энциклопедия фэнтези"
  },
];

// объеденили два массива

const books2 = [...books, ...harryPotterUniverse];
console.log(books2);

// добавили функцию, которая берет предыдущий массив и добавили новое свойство редкости книг

function getRareBooks(booksArray) {
  return booksArray.map(book => {
    return {
      ...book,
      isRare: book.year > 2000
    };
  });
}

const updatedBooks = getRareBooks(books2);
console.log(updatedBooks);