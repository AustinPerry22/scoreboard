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
    if (home >= 10) {
        window.alert("Home Wins!")
        reset()
    } else if (away >= 10) {
        window.alert("Away Wins!")
        reset()
    }
}

