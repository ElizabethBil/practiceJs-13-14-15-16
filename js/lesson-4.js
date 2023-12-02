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

const form = document.querySelector(".form");

const price = document.querySelector("#price");
const quantityRange = document.querySelector("#quantity");
const totalPriceMess = document.querySelector(".total");
const amount = document.querySelector(".amount");

const calculator = () => {
  const priceValue = price.value;
  const quantityValue = quantityRange.value;
  amount.textContent = quantityValue;
  const totalPrice = priceValue * quantityValue;

  totalPriceMess.textContent = totalPrice;
};

form.addEventListener("input", calculator);
