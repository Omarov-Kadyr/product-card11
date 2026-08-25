import { socialMediaComments } from "./comments.js";
//Создали массив чисел от 1 до 10. Отфильтровли его таким образом, что мы получил массив чисел, начиная с 5.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
const calculatenumbers = numbers.slice(4,10)
console.log(calculatenumbers)

//Создали массив строк, проверили и есть ли в массиве какая-то определенная сущность.
const newBooks = [
  "Гарри Поттер и философский камень",
  "Бойцовский клуб",
  "Код да Винчи",
  "Сумерки"
];

const isBookExists = newBooks.includes("Сумерки");
console.log(isBookExists);

//Написали функцию, которая аргументом принимает два вышеуказанных массива и изменяет их порядок на противоположный
function reverseArrayPlace(m) {
  m.reverse();
}

reverseArrayPlace(numbers, newBooks);
console.log(numbers, newBooks);

// Вывели в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const comComments = socialMediaComments.filter(comment => comment.email?.includes('.com'));
console.log(comComments);

/*
Перебрали массив таким образом, что бы пользователи с id меньше или равно 5 имели postId: 2,
а те, у кого id больше 5, имели postId: 1
*/
socialMediaComments.forEach(comment => {
  comment.postId = comment.id <= 5 ? 2 : 1;
});
console.log(socialMediaComments);

//Перебрали массив, что бы объекты состояли только из айди и имени
const shortComments = socialMediaComments.map(({ id, username }) => ({ id, username }));
console.log(shortComments);

/*
Перебираем массив, добавляем объектам свойство isInvalid и проверяем:
 если длина тела сообщения (body) больше 180 символов - устанавливаем true, меньше - false.
 */
socialMediaComments.forEach(comment => {
  comment.isInvalid = (comment.body?.length || comment.body?.length || 0) > 180;
});
console.log(socialMediaComments);
