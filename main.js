let movieList = null;
let inputSearch = null;
let triggerMode = false;

const containers = document.getElementById("headers");
const newFilms = document.getElementById("newFilms");
const titleNewFilms = document.getElementById("titleNewFilms");

const createStyle = () => {
  const headStyle = document.createElement("style");
  headStyle.innerHTML = `
    * {
        box-sizing: border-box;
    }

    body{
        margin: 0;
    }

    .wrapper{
        padding: 20px;
    }
    .movieBlock{
    margin-left: 1px
    }
    .containers{
      margin-bottom: 35px;
    border: 1px solid #dddddd;
     border-radius: 0 0 4px 4px;
    }
    .movies {
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }

    .movie{
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 20px;
    }

    .movie__image{
        width: 100%;
        object-fit: cover;
    }
    .search{
      padding-bottom: 10px;
      background-color:#EDEDED;
    }
    .blockCheck{
      display:flex;
      align-items: center;
      margin-left: 30px;

    }
    .search__label-input{
      
      padding: 5px;
      background-color:#DF8A13;
      border: none;
        margin-bottom: 7px;
        display: block;
        color: #F7F8FF;
        font-weight: 500;
        line-height: 1.1;
        font-size: 1.9em;
        font-family: "PT Sans", sans-serif;
    }
    
    .search__input{
        padding: 10px 15px;
        width: 90%;
        display: block;
        border: 1px solid#ced4da;
        border-radius: 4px;
        margin: 0px 18px 10px 18px;
        outline: none;
       


    }
    .search__input:hover{
      outline:none;
  }
    
    .search__label-checkbox{
        font-size: 14px;
        margin: 0 0 0 5px;
        font-weight: 500;
    }
    

input[type=checkbox], input[type=radio] {
    margin: 0;
    line-height: normal;
}
@media( max-width: 991px) {
  .containers{
    margin-top: 35px;

  }
}
    `;

  document.head.appendChild(headStyle);
};

const triggerModeHandler = () => {
  triggerMode = !triggerMode;
};

// const createHeader = (containers) => {
//   const header = document.createElement("h1");
//   header.innerText = "Приложение для поиска фильмов";
//   containers.append(header);
// };

const setAttribute = (el, attrs) => {
  for (let key in attrs) {
    if (key !== "innerText") {
      el.setAttribute(key, attrs[key]);
    } else {
      el.innerText = attrs[key];
    }
  }
};

const createSerachBox = (containers) => {
  const searchBox = document.createElement("div");
  const blockCheck = document.createElement("div");

  const input = document.createElement("input");
  const labelForInput = document.createElement("label");

  const checkbox = document.createElement("input");
  const labelForCheckbox = document.createElement("label");

  searchBox.setAttribute("class", "search");
  blockCheck.setAttribute("class", "blockCheck");

  setAttribute(input, {
    class: "search__input",
    id: "search",
    type: "text",
    placeholder: "Начните вводить текст (например, Iron Man...)",
  });
  setAttribute(labelForInput, {
    class: "search__label-input",
    for: "search",
    innerText: "Поиск фильмов",
  });

  setAttribute(checkbox, {
    class: "search__checkbox",
    id: "checkbox",
    type: "checkbox",
  });
  checkbox.addEventListener("click", triggerModeHandler);
  setAttribute(labelForCheckbox, {
    class: "search__label-checkbox",
    for: "checkbox",
    innerText: "Добавлять фильмы к существующему списку",
  });
  blockCheck.append(checkbox, labelForCheckbox);
  searchBox.append(labelForInput, input, blockCheck);
  containers.append(searchBox);
};

const createMarkup = () => {
  // const containers =  document.getElementById("headers");
  const movies = document.createElement("div");

  containers.classList.add("containers");

  // createHeader(containers);
  createSerachBox(containers);

  movies.classList.add("movies");

  containers.append(movies);
  // document.body.prepend(containers);

  movieList = document.querySelector(".movies");
  inputSearch = document.querySelector("#search");
};

const addMovieToList = (movie) => {
  const item = document.createElement("div");
  const img = document.createElement("img");

  item.classList.add("movie");

  img.src = movie.Poster;

  img.classList.add("movie__image");

  item.append(img);

  movieList.append(item);
  console.log(movie);
  newFilms.style.display = "none";
  titleNewFilms.style.display = "none";
};

const clearMovieMarkup = () => movieList && (movieList.innerHTML = "");

const delay = (() => {
  let timer = 0;
  return (cb, ms) => {
    clearTimeout(timer);
    timer = setTimeout(cb, ms);
  };
})();

createMarkup();
createStyle();
