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