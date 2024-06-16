let gameSeq = [];
let userSeq = [];
let started = false;
let color = ["red", "grey", "green", "purple"];
let level = 0;

let h3 = document.querySelector("h3");
document.addEventListener("keypress", () => {
    if (started == false) {
        started = true;
        levelUp();
    }
});

function userbtnFlash(btn) {
    btn.classList.add("flashBtn");
    setTimeout(function () {
        btn.classList.remove("flashBtn");
    }, 200); // Adjusted timing for better visual feedback
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let RandI = Math.floor(Math.random() * 4); // Corrected random index range
    let randomC = color[RandI];
    let randB = document.querySelector(`#${randomC}`);
    gameSeq.push(randomC);
    gamebtnFlash(randB);
}

function gamebtnFlash(randB) {
    randB.classList.add("flashBtn");
    setTimeout(function () {
        randB.classList.remove("flashBtn");
    }, 200); // Adjusted timing for better visual feedback
}

function checkAns(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length === userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game Over <b>${level}</b> </br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 1000);
        reset();
    }
}

function userbtn() {
    let btn = this;
    userbtnFlash(btn);
    let userbtn1 = btn.getAttribute("id");
    userSeq.push(userbtn1);
    checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let btn of allbtns) { // Corrected loop variable declaration
    btn.addEventListener("click", userbtn);
}

function reset() {
    gameSeq = [];
    userSeq = [];
    level = 0;
    started = false;
    h3.innerText = "Press Any Key to Start"; // Reset instruction text
}
