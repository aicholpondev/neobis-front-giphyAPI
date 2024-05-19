const API_KEY = "2C0a6Mcv9ZDxRPEnN7vGFkt3bXFasVz6";

let btnSearch = document.getElementById('btnSearch');
let inputSearch = document.getElementById('search');

let createGif = () => {
  let searchValue = document.getElementById('search').value;

  let gifLimit = 30;

  let apiKeyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchValue}&limit=${gifLimit}`;
  document.querySelector(".card").innerHTML = "";
  inputSearch.value = '';
  


// вызов ключа
  fetch(apiKeyUrl)
    .then((result) => result.json())
    .then((info) => {
      console.log(info.data)

    
      let gifsData = info.data;
      gifsData.forEach((gif) => {
        
        //   создаем card gif
          let container = document.createElement("div");
          container.classList.add("container");
          let iframe = document.createElement("img");
          console.log(gif);
          iframe.setAttribute("src", gif.images.downsized_medium.url);
          iframe.onload = () => {
            gifLimit--;
            if(gifLimit == 0) {
              document.querySelector(".card").style.
              display = "grid";
            }
          };
          container.append(iframe);

          document.querySelector(".card").append(container);
      });
    });
    
}

// нажатия на btn and enter
btnSearch.addEventListener("click", createGif);
inputSearch.addEventListener("keypress", async event => {
    if (event.key === "Enter") {
        createGif();
    }
});

const handleClickSearch = async (input, search) => {
  const btnSearch = input.value.trim();
  if (btnSearch.length > 1) {
      const searchData = await search(btnSearch);
      return searchData.data.data;
  }
 
  const randomData = await search(`Frontend`);
  return randomData.data.data;
};

// Пример вызова функции:
// Предполагается, что input и search доступны в контексте вызова
// const result = await handleClickSearch(inputElement, searchFunction);

// const handleClickSearch = async () => {
//   const btnSearch = input.value.trim();
//   if (btnSearch.length > 1) {
//       const searchData = await search(btnSearch);
//       return searchData.data.data;
//   }
 
//   const randomData = await search(`Frontend`);
//   return randomData.data.data;
// };










