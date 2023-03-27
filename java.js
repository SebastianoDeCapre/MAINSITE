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

let = userbutton = document.querySelector(".icon")

let userblock = document.querySelector(".userblock")


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

slidebutton.addEventListener("click", userpage)



console.log("hej")