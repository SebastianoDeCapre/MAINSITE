
///*** ADDS ALL CELEBRITY BLOCKS ***////

const block = document.querySelector(".grid-container")

for (let index = 0; index < 0; index++) {
    block.innerHTML += `<div class="celeb-block"></div>`
    
}

let slidebutton = document.querySelector(".slidepage-button")

let slidepage = document.querySelector(".slidepage")

slidebutton.addEventListener("click", slider)

function slider() {
    slidepage = document.getElementById("slidy")
    console.log("din pappa")
    if (slidepage){
    document.querySelector(".slidepage").setAttribute("id", "")

    }
    else{
      document.querySelector(".slidepage").setAttribute("id", "slidy")
    }
}

/**/

/***      ALL OF THAT API SHIT           ***/

const apiKey = "1a08c634ec1bc9d64558c15c3e88cdbf";
const baseUrl = "https://api.themoviedb.org/3/person/popular";
const totalPages = 5; // set the total number of pages you want to retrieve
let page = 1;

const fetchActors = () => {
  const url = `${baseUrl}?api_key=${apiKey}&page=${page}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const actors = data.results;
      actors.forEach(actor => {
        const celebBlock = document.createElement("div");
        celebBlock.className = "celeb-block";

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

        // remove the celeb block if the image fails to load or cannot be fetched
        img.onerror = () => {
          celebBlock.remove();
        };

        const nameDiv = document.createElement("div");
        nameDiv.className = "name-div";
        nameDiv.innerHTML = actor.name;

        celebBlock.appendChild(img);
        celebBlock.appendChild(nameDiv);
        gridContainer.appendChild(celebBlock);
      });

      if (page < totalPages) {
        page++;
        fetchActors();
      }
    })
    .catch(error => {
      console.error("Error: Could not retrieve actor data", error);
    });
};

const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";
document.body.appendChild(gridContainer);

fetchActors();

/*** ***/

///***      USER POP UP     ***///

let = userbutton = document.querySelector(".icon")

let userblock = document.querySelector(".userblock")

userbutton.addEventListener("click", userpage)

function userpage() {
  userblock = document.getElementById("view")
  console.log("din pappa")
  if (userblock){
  document.querySelector(".userblock").setAttribute("id", "")

  }
  else{
    document.querySelector(".userblock").setAttribute("id", "view")
  }
}

/**/

////****       AD POP UP       ****////

/* Display ad every 30 seconds */

let adpopup = document.querySelector(".ad-popup")

function adpop() {

  adpopup = document.getElementById("ad-slide")
  console.log("din pappa")
  if (userblock){
    document.querySelector(".ad-popup").setAttribute("id", "ad-slide")
  }
  else{
    document.querySelector(".ad-popup").setAttribute("id", "")
  }
}

setInterval(adpop, 360000000);

/**/

/* removes ad */

function adpopremove() {
    document.querySelector(".ad-popup").setAttribute("id", "")
}

let closebutton = document.querySelector(".close-button")

closebutton.addEventListener("click", adpopremove)

/**/

///*** creates a search result pop up  ***///

let searchbar = document.querySelector("#search")

let resultpopup = document.querySelector(".search-requests-block")

let searchButton = document.querySelector(".searchButton")




/* makes keypress ENTER search */

// searchbar.addEventListener("keypress", a); {
//   if (a.key === "Enter") {
//     search_result_popup()
//   }
// }


// document.getElementById("searchButton").onclick = search_result_popup()

// function search_result_popup() {
//   resultpopup.setAttribute("id", "search-request-appear")
// }