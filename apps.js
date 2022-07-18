let scoreHome = 0
let scoreAway = 0
let scoreHomeElm = document.getElementById('homeScore')
scoreHomeElm.innerText = scoreHome
let scoreAwayElm = document.getElementById('awayScore')
scoreAwayElm.innerText = scoreAway




function pointHome() {
    scoreHome += 1
    console.log(scoreHome);
    let scoreHomeElm = document.getElementById('homeScore')
    scoreHomeElm.innerText = scoreHome
}

function pointAway() {
    scoreAway += 1
    console.log(scoreAway);
    let scoreAwayElm = document.getElementById('awayScore')
    scoreAwayElm.innerText = scoreAway
}

function point3Home() {
    scoreHome += 3
    console.log(scoreHome);
    let scoreHomeElm = document.getElementById('homeScore')
    scoreHomeElm.innerText = scoreHome
}

function point3Away() {
    scoreAway += 3
    console.log(scoreAway);
    let scoreAwayElm = document.getElementById('awayScore')
    scoreAwayElm.innerText = scoreAway
}

function reset() {
    scoreHome = 0
    scoreAway = 0
    console.log(scoreAway);
    console.log(scoreHome);

    let scoreHomeElm = document.getElementById('homeScore')
    scoreHomeElm.innerText = scoreHome

    let scoreAwayElm = document.getElementById('awayScore')
    scoreAwayElm.innerText = scoreAway
}