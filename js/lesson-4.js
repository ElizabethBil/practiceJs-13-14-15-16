// ЗАДАЧА 1
// Створіть карточки товару з масиву використовуючи createElement

// js/

// import car from "./date/car.js"

// const cards = ({ name, img, price, description }) => {
//     const productLI = document.createElement("li");

//     const nameL = document.createElement("h2");

//     nameL.textContent = name;

//     const image = document.createElement("img");

//     image.src = img;
//     image.alt = name;
//     image.width = 200;

//     const priceL = document.createElement("h3");

//     priceL.textContent = price;

//     const text = document.createElement("p");

//     text.textContent = description;

//     productLI.append(nameL, image, priceL, text);
//     return productLI;
// }

// const markup = car.map(cards);
// const container = document.querySelector(".js-goods");
// container.append(...markup);

// console.log(markup);

// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// html/

// const form = document.querySelector(".form");

// const price = document.querySelector("#price");
// const quantityRange = document.querySelector("#quantity");
// const totalPriceMess = document.querySelector(".total");
// const amount = document.querySelector(".amount");

// const calculator = (event) => {
//   event.preventDefault();
//   const priceValue = price.value;
//   const quantityValue = quantityRange.value;
//   amount.textContent = quantityValue;
//   const totalPrice = priceValue * quantityValue;

//   totalPriceMess.textContent = totalPrice;
// };

// const amountValue = () => {
//   const quantityValue = quantityRange.value;
//   amount.textContent = quantityValue;
// };

// form.addEventListener("submit", calculator);
// form.addEventListener("input", amountValue);

// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН

// const calculateBtn = document.querySelector(".btn");

// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ

// const randomRgbColor = () => {
//   const r = Math.round(Math.random() * (255 - 1) + 1);
//   const g = Math.round(Math.random() * (255 - 1) + 1);
//   const b = Math.round(Math.random() * (255 - 1) + 1);
//   return `rgb(${r},${g},${b})`;
// };

// const formContainer = document.querySelector(".container");

// const color = randomRgbColor();

// formContainer.style.backgroundColor = color;

// ЗАДАЧА 3
// 3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК (ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
//  <ul class="js-list"></ul>

// const instruments = [{
//   id: 1,
//   img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
//   name: "Молоток",
//   price: 150
// },
// {
//   id: 2,
//   img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
//   name: "Перфоратор",
//   price: 3000
// },{
//   id: 3,
//   img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
//   name: "Рівень",
//   price: 2000
// }]

// 3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР
// ЗАДАЧА 4
// ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// // є елемент масиву , який незнає нікого
// // якщо не одна така людина , то вертаємо not found
// // якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found
// const people1 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// },
// {
//   name: 'Eva',
//   know: ["Alex", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: [],
// }]

// const people2 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: ["Eva"],
// },
// {
//   name: 'Eva',
//   know: [],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// }]

// const people3 = [{
//   name: 'Alex',
//   know: ["Eva", "Jhon"],
// },
// {
//   name: 'Jhon',
//   know: [],
// },
// {
//   name: 'Eva',
//   know: ["Alex", "Jhon"],
// },
// {
//   name: 'Ivan',
//   know: ["Jhon", "Alex"],
// }]
