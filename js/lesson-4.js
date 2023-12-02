// ЗАДАЧА 1 
// Створіть карточки товару з масиву використовуючи createElement

// js/

import car from "./date/car.js"

const cards = ({ name, img, price, description }) => {
    const productLI = document.createElement("li");

    const nameL = document.createElement("h2");

    nameL.textContent = name;

    const image = document.createElement("img");

    image.src = img;
    image.alt = name;
    image.width = 200;

    const priceL = document.createElement("h3");

    priceL.textContent = price;
    
    const text = document.createElement("p");

    text.textContent = description;


    productLI.append(nameL, image, priceL, text);
    return productLI;
}

const markup = car.map(cards);
const container = document.querySelector(".js-goods");
container.append(...markup);

console.log(markup);