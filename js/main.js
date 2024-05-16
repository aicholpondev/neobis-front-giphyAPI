const API_KEY = "ajyqP5cIAPa5zzom9Z8pCt17IlMruGq5";
const URL =`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&limit=1&q=` 


// const API_TOKEN = "ajyqP5cIAPa5zzom9Z8pCt17IlMruGq5";
// const API = "https://api.giphy.com/v1/gifs/search?api_key=" + API_TOKEN;
// const TRENDING_API =
//   "https://api.giphy.com/v1/gifs/trending?api_key=" +
//   API_TOKEN +
//   "&limit=25&offset=0&rating=g&bundle=messaging_non_clips";

// function render() {
//   let container = document.querySelector(".container");
//   let apiQuery = TRENDING_API;
//   container.innerHTML = "";
//   let inpValue = document.querySelector("#searchInp").value;
//   if (inpValue) {
//     apiQuery =
//       API +
//       "&q=" +
//       inpValue +
//       "&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";
//   }
//   fetch(apiQuery)
//     .then((result) => result.json())
//     .then((data) => {
//       console.log(data.data);
//       data.data.forEach((item) => {
//         container.innerHTML += ` 
//           <div class="card">
//           <img style="width:24rem;height:18rem"  src="${item.images.original.url}" alt="img">
//         </div>`;
//       });
//     });
// }
// render();

// let search_btn = document.querySelector(".search-btn");
// search_btn.addEventListener("click", () => {
//   render();
// });
// let inpValue = document.querySelector("#searchInp");
// inpValue.addEventListener("change", () => {
//   render();
// });