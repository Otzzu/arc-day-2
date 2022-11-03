const firstView = document.querySelector(".first-view");
const startButton = document.querySelector(".start-button");
const mainView = document.querySelector(".main-view")
const container = document.querySelector(".container-button")
const containerPoint = document.querySelector(".container-point")
const pointPlayer = document.querySelector(".point-player")
const pointBot = document.querySelector(".point-bot")
const buttonReset = document.querySelector(".button-reset")
const info = document.querySelector(".info")
const texts = document.querySelectorAll(".text")
const body = document.getElementsByTagName("BODY")[0];
const darkButtons = document.querySelectorAll(".dark-button")
const containerButtonFirst = document.querySelector(".container-button-first")
const containerButtonSetting = document.querySelector(".container-button-setting")
const titleMain = document.querySelector(".title-main")
const options = ["Batu", "Gunting", "Kertas"]



const darkMode = function (type) {
    if (type === "Dark"){
        for (let button of darkButtons){
            button.textContent = "Light";
        }
        body.style.backgroundColor = "black";
        for (let text of texts){
            text.style.color = "white";
        }
    } else if (type === "Light"){
        for (let button of darkButtons){
            button.textContent = "Dark"
        }
        body.style.backgroundColor = "white";
        for (let text of texts){
            text.style.color = "black";
        }
    }
}

const changeView = function(){
    firstView.classList.toggle("hidden");
    mainView.classList.toggle("hidden");
};

titleMain.addEventListener("click", changeView);

containerButtonFirst.addEventListener("click", function(e){
    if (e.target.textContent === "Start") {
        changeView()
    } else {
        darkMode(e.target.textContent)
    }
});

containerButtonSetting.addEventListener("click", function(e){
    if (e.target.textContent === "Reset"){
        reset()
    } else if (e.target.textContent !== "Reset"){
        darkMode(e.target.textContent)
    }
});

container.addEventListener("click", function(e){
const player = parseInt(e.target.dataset.option);
    const bot = Math.floor(Math.random() * 3);

    console.log(player, bot);
    isPlayerWin = checkWin(player,bot)
    updateInfo(player, bot, isPlayerWin)
});


const checkWin = function(player, bot){
    if (player > bot & player === (bot+1)){
        pointBot.textContent = parseInt(pointBot.textContent) + 1;
        return false;
    } else if (player < bot & (player+1) === bot){
        pointPlayer.textContent = parseInt(pointPlayer.textContent) + 1;
        return true;
    } else if (player < bot & (player+2) === bot){
        pointBot.textContent = parseInt(pointBot.textContent) + 1;
        return false;
    } else if (player > bot & player === (bot+2)){
        pointPlayer.textContent = parseInt(pointPlayer.textContent) + 1;
        return true;
    }
};

const updateInfo = function(player, bot, isPlayerWin){
    if (player===bot){
        info.textContent = `Pertandingan seri, Player dan Bot sama-sama memilih ${options[player]}`
    } else if (isPlayerWin){
        info.textContent = `Player(${options[player]}) menang melawan Bot(${options[bot]})`
    } else {
        info.textContent = `Bot(${options[bot]}) menang melawan Player(${options[player]})`
    }
}

const reset = function() {
    pointBot.textContent = 0;
    pointPlayer.textContent = 0;
    info.textContent = ""
};

buttonReset.addEventListener("click", reset);