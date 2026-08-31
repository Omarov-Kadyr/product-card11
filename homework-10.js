import { productCards } from "./product-cards.js";
const productCardTemplate = document.querySelector('#card-template');
const productsContainer = document.querySelector('.products');
const productDescriptions = productCards.reduce((acc, product) => {
  acc.push({ [product.title]: product.description });
  return acc;
}, []);
console.log('Массив описаний:', productDescriptions);

function showCardsPrompt() {
  const userInput = prompt("Сколько карточек отобразить? От 1 до 5");
  const count = Number(userInput);
  if (isNaN(count) || count < 1 || count > 5) {
    alert("Некорректный ввод! Карточки не будут отображены.");
    return null;
  }
  return count;
}

function renderProductCards(cardsArray) {
  productsContainer.innerHTML = '';
  cardsArray.forEach((product) => {
    const cardCopy = productCardTemplate.content.cloneNode(true);
    cardCopy.querySelector('.card__title').textContent = product.title;
    cardCopy.querySelector('.card__text').textContent = product.description + '.';
    cardCopy.querySelector('.card__name').textContent = product.skinType;
    cardCopy.querySelector('.card__price span').innerHTML = `${product.price.toLocaleString('ru-RU')} ₽`;
    cardCopy.querySelector('.card__image').src = `./img/${product.image}`;
    cardCopy.querySelector('.card__image').alt = product.title;
    const ingredientsList = cardCopy.querySelector('.card__list');
    product.ingredients.forEach((ingredient) => {
      const li = document.createElement('li');
      li.textContent = ingredient;
      ingredientsList.appendChild(li);
    });
    productsContainer.appendChild(cardCopy);
  });
}

const cardsCount = showCardsPrompt();
if (cardsCount !== null) {
  const cardsToRender = productCards.slice(0, cardsCount);
  renderProductCards(cardsToRender);
}