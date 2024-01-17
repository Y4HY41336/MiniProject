let button = document.querySelector(".button");
let circle = document.querySelector(".circle");
let container = document.querySelector(".container");
let box = document.querySelector(".box");

let isActive = false;
let isActive2 = false

button.addEventListener("click", function (e) {
    if(!isActive){
        circle.classList.add('active')
        isActive = true
    }
    else{
        circle.classList.remove('active')
        isActive = false
    }

  });

  container.addEventListener("click", function (e) {
    if(!isActive){
        container.classList.add('isOnCon')
        box.classList.add('isOnBox')
        isActive = true
    }
    else{
        container.classList.remove('isOnCon')
        box.classList.remove('isOnBox')
        isActive = false
    }

  });




