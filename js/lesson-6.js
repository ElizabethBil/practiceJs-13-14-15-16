// // ЗАДАЧА 1
// // ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// // ТА ЗА ДОПОМОГОЮ fetch, ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ РЕЗУЛЬТАТ(ВИКОРИСТАЙ МЕТОД createElement())

// fetch('https://pixabay.com/api/?key=41717891-03a798ff6847d2641a93432cc&category=animals')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("network response was nor ok")
//         }
//         return response.json()
//     })
//     .then(date => createImageElement(date.hits)
// )
//     .catch(error => console.log(error))
// // userImageURL
// function createImageElement(params) {
//     const container = document.createElement("div")
//     params.forEach(element => {
//         const image = document.createElement("img");
//         image.src = element.webformatURL;
//         image.width = 300;
//         container.appendChild(image)
//     });

//     const root = document.querySelector(".root");
//     root.appendChild(container)
// }

// ЗАДАЧА 2
// ВИКОРИСТОВУЮЧИ API ДАНОГО ПОСИЛАННЯ  https://www.thecocktaildb.com/api.php , ТА ЗА ДОПОМОГОЮ fetch, ВИВОДЬ РЕЗУЛЬТАТ НА ЕКРАН.
// РЕЗУЛЬТАТ ПОШУКУ МОЖНА ОТРИМАТИ ІЗ ІМПУТА, КОЛИ КЛІЄНТ НАБРАВ ДАНИЙ ТОВАР(ВИКОРИСТАЙ РОЗМІТКУ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА)

// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// const form = document.querySelector("#form");
// const input = document.querySelector("#input");
// const imageContainer = document.querySelector(".image-container");

// form.addEventListener("submit", submitHandler);

// function submitHandler(event) {
//   event.preventDefault();
//   const query = input.value.trim();
//   fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("network response was nor ok");
//       }
//       return response.json();
//     })
//     .then((date) => createCards(date.drinks))
//     .catch((error) => console.log(error));
// }

// function renderDrinks({ strDrink, strDrinkThumb }) {
//   const markup = `<div>
//     <h2>${strDrink}</h2>
//     <img src="${strDrinkThumb}" alt ="${strDrink}" />
//     </div>`;
//   imageContainer.insertAdjacentHTML("beforeend", markup);
// }

// function createCards(array) {
//   array.forEach((drink) => renderDrinks(drink));
// }
