
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

/** SEARCH FUNCTION **/

function searchResultBlockAppear() {
  const searchRequestBlock = document.querySelector(".search-requests-block");
  searchRequestBlock.setAttribute("id", "search-requests-appear");
}

function searchResultExitButtonAppear() {
  const searchRequestExitButton = document.querySelector(".search-requests-exit-button");
  searchRequestExitButton.setAttribute("id", "search-requests-exit-button-appear")
}

function searchResultBlockRemove() {
  const searchRequestBlock = document.querySelector(".search-requests-block");
  searchRequestBlock.setAttribute("id", "");
}

function searchResultExitButtonRemove() {
  const searchRequestExitButton = document.querySelector(".search-requests-exit-button");
  searchRequestExitButton.setAttribute("id", "")
}



/** **/



/***  This API function will create celeb-blocks containing the most popular actors           ***/

const apiKey = "1a08c634ec1bc9d64558c15c3e88cdbf";
const baseUrl = "https://api.themoviedb.org/3/person/popular";
let totalPages = 5; // set the total number of pages you want to retrieve
let page = 1;
const actorIds = new Set(); // a set to keep track of unique actor ids


const fetchActors = () => {
  const url = `${baseUrl}?api_key=${apiKey}&page=${page}`;


  fetch(url)
    .then(response => response.json())
    .then(data => {
      const actors = data.results;
      actors.forEach(actor => {
        // check if the actor id is already in the set
        if (actorIds.has(actor.id)) {
          return; // skip this actor if it's a duplicate
        }
        actorIds.add(actor.id); // add the actor id to the set

        const celebBlock = document.createElement("div");
        celebBlock.className = "celeb-block";

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;

        img.onerror = () => {
          celebBlock.remove();
        };

        const nameDiv = document.createElement("div");
        nameDiv.className = "name-div";
        nameDiv.innerHTML = actor.name;

        celebBlock.appendChild(img);
        celebBlock.appendChild(nameDiv);

        const gridContainer = document.querySelector(".grid-container");
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

fetchActors();

/*** ***/

/***   This API function will look at what is inputed in the search bar when the button ENTER is pressed or 
 -->   the magnifiying glass is clicked. It will then give you the closest recamblance to the actors name
 -->   and put them in a new container ***/

 const fetchActorsSearch = (query) => {
  const baseUrl = "https://api.themoviedb.org/3/search/person";
  const apiKey = "1a08c634ec1bc9d64558c15c3e88cdbf";
  let totalPages = 1; // set the total number of pages you want to retrieve
  let page = 1;
  const actorNames = new Set(); // a set to keep track of unique actor names

  const url = `${baseUrl}?api_key=${apiKey}&query=${encodeURIComponent(query)}&page=${page}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const actors = data.results;
      actors.forEach(actor => {
        // check if the actor name is already in the set
        if (actorNames.has(actor.name)) {
          return; // skip this actor if it's a duplicate
        }
        actorNames.add(actor.name); // add the actor name to the set

        const celebBlock = document.createElement("div");
        celebBlock.className = "search-requests-celeb";

        const img = document.createElement("img");
        img.src = `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
        img.style.maxWidth = "100%";

        img.onerror = () => {
          celebBlock.remove();
        };


        const nameDiv = document.createElement("div");
        nameDiv.className = "name-div";
        nameDiv.innerHTML = actor.name;

        celebBlock.appendChild(img);
        celebBlock.appendChild(nameDiv);

        const gridContainer = document.querySelector(".search-requests-content-grid");
        gridContainer.appendChild(celebBlock);
      });

      if (page < totalPages) {
        page++;
        fetchActorsSearch(query);
      }
    })
    .catch(error => {
      console.error("Error: Could not retrieve actor data", error);
    });
};


const searchInput = document.querySelector(".search-bar");

searchInput.addEventListener("keydown", function(event) { /* If the ENTER key is pressed in the search bar the following happens */
  if (event.keyCode === 13) {
    console.log("Searching...")
    searchResultBlockAppear()
    searchResultExitButtonAppear()
    event.preventDefault(); // prevent the form from submitting
    const query = searchInput.value.trim(); // get the search query from the input field
    if (query) {
      const gridContainer = document.querySelector(".search-requests-content-grid");
      gridContainer.innerHTML = ""; // clear the container before fetching new search results
      fetchActorsSearch(query);
    }
  }
});

const searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', () => {
  const enterKeyEvent = new KeyboardEvent('keydown', { keyCode: 13 });
  searchInput.dispatchEvent(enterKeyEvent);
});

// function to clear the existing actor grid
const clearActorGrid = () => {
  const gridContainer = document.querySelector(".grid-container");
  gridContainer.innerHTML = "";
};

const searchRequestExitButton = document.querySelector(".search-requests-exit-button"); 

searchRequestExitButton.addEventListener("click", () => {
  searchResultExitButtonRemove()
  searchResultBlockRemove()
})


/*** ***/


//** These functions will create a bottom bar that contains a button that will add more actors when pressed **/

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {  /*Creates the bar*/                   
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scroll-div").style.display = "none";
  } else {
    if (currentScrollPos > (document.body.scrollHeight)) {
      document.getElementById("scroll-div").style.display = "block";
    }
  }
  prevScrollpos = currentScrollPos;
}

let generateButton = document.querySelector("#generate-button")

generateButton.addEventListener("click", () => { /* adds more actors */
  totalPages += 5;
  fetchActors();
});

/** **/


/*** ***/

///***      USER POP UP     ***///

let = userbutton = document.querySelector(".icon")

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




// const bottom_navbar = document.createElement("div");  
// bottom_navbar.classList.add("bottom-navbar");  

// document.body.appendChild(bottom_navbar)

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