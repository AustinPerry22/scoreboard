let home = 0;
let away = 0;


function reset() {
    home = 0;
    away = 0;
    draw();
}

function addScore(team, points) {
    if (team == 'home') {
        if (points == -1 && home == 0) {
            home == 0;
        } else {
            home += points;
        }
    } else {
        if (points == -1 && away == 0) {
            away == 0;
        } else {
            away += points;
        }
    }
    draw();
}

function draw() {
    let homeId = document.getElementById("homeScore");
    homeId.innerText = home.toString();
    let awayId = document.getElementById("awayScore");
    awayId.innerText = away.toString();

    // wait 25ms before running check winner to allow dom to update and show correct score. 
    setTimeout(checkWinner, 25);
}

function checkWinner() {
    if (home >= 10) {
        alert("Home Wins!")
        reset()
    } else if (away >= 10) {
        alert("Away Wins!")
        reset()
    }
}

