let strtBtn = document.querySelector(".strt_btn");
let ml = document.querySelectorAll(".mole");

let score_sec = document.querySelector(".score_btn");
strtBtn.addEventListener("click", ()=>{

    let score_arry =[];

    
    let setIntervalTime = 2000;
    let setTimeoutTime = 1000;

    setInterval(function() {
        let randomNumber = Math.floor(Math.random() * 9);
        let createMole = document.createElement("img");
        createMole.src = "./img/mole.png";
        createMole.setAttribute("class", "mole_img");
        createMole.style.marginTop="-110px"
        ml[randomNumber].appendChild(createMole);

        setTimeout(function(){
            createMole.style.display = "none";

        },setTimeoutTime)

        let score = 0;
        createMole.addEventListener("click", function() {
            score += 1;
            score_arry.push(score)
            score_sec.innerText =score_arry.length;
        });
    }, setIntervalTime)

    strtBtn.disabled = true;

})







let darkclicker = 0;
let web_modes = document.querySelector("#modes");

web_modes.addEventListener("click", ()=>{
    document.body.style.background = "#202124";
    let text = document.querySelector("h6");
    text.style.color = "white";


    let container_line  = document.querySelector(".container");
    container_line.style.border = "1px solid #404248"

    let game_main_line = document.querySelector(".game_main");
    game_main_line.style.border = "1px solid #404248";


    let mole_sec_line = document.querySelectorAll(".mole_sec");
    for(let i = 0; i < mole_sec_line.length; i++) {
        mole_sec_line[i].style.border = "1px solid #404248";
    }

    let img = document.querySelectorAll("img")
    for(let i = 0; i < img.length; i++) {
        img[i].style.filter = "brightness(80%)";
    }

    let grassFixWithMoon = document.querySelectorAll(".grass");
    for(let i = 0; i< grassFixWithMoon.length; i++) {
        grassFixWithMoon[i].style.marginTop = "-30px"
    }

    let moonCreate = document.querySelectorAll("#moon")
    for(let i = 0; i< moonCreate.length; i++) {
        moonCreate[i].setAttribute("class", "moon")
    }

    let star = document.querySelectorAll(".star_sec");
    for(let i = 0; i <star.length; i++) {
        star[i].style.opacity = "1";
    }


    darkclicker += 1;
    if(darkclicker > 1) {
        if(document.body.style.background = "#202124") {
            setTimeout(function() {
                let darkSec = document.querySelector(".dark_alert");
                darkSec.style.opacity = "1";
            },100)
        }

        
    }
})


let puseTheGame = document.querySelector(".puse_btn");

puseTheGame.onclick = function() {
    alert("The game has pused! Click 'OK' button to continue")
}

