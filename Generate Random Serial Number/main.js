let btnEl = document.querySelector(".generate");
let serialEl = document.querySelector(".serial");

btnEl.onclick = function () {
    let characters = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charsCount = 10;
    let randomSerail = "";
    for(let i = 0; i < charsCount; i++) {
        randomSerail += characters[Math.floor(Math.random() * characters.length)];
    }
    serialEl.innerHTML = randomSerail;
}