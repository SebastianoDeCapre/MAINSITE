const block = document.querySelector(".grid-container")

for (let index = 0; index < 100; index++) {
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

  adpopup = document.getElementById("view")
  console.log("din pappa")
  if (userblock){
    document.querySelector(".ad-popup").setAttribute("id", "view")
  }
  else{
    document.querySelector(".ad-popup").setAttribute("id", "")
  }
}

setInterval(adpop, 5000);

/**/

/* removes ad */

function adpopremove() {
    document.querySelector(".ad-popup").setAttribute("id", "")
}

let closebutton = document.querySelector(".close-button")

closebutton.addEventListener("click", adpopremove)

/**/
