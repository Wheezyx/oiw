var progression;
var progressBar;
var intervalId1;
var width = 0;

window.onload = function () {
    setup();
};

function setup() {
    progression = 0;
    progressBar = document.getElementById("progressBar");
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    checkClassesHour(currentHour, currentMinutes);
    intervalId1 = setInterval(function () {
        start_clock()
    }, 1000);
    frame();
}


function start_clock() {

    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSeconds = currentDate.getSeconds();

    if (currentHour < 10) {
        currentHour = "0" + currentHour;
    }
    if (currentMinutes < 10) {
        currentMinutes = "0" + currentMinutes;
    }

    if (progression == 0 || progression == 45) {
        checkClassesHour(currentHour, currentMinutes);
        frame();

    } else if (currentSeconds == 0) {
        progression++;
        checkClassesHour(currentHour, currentMinutes);
        frame();
    }
    binaryClockUpdate(currentHour, currentMinutes);
    console.log(progression);
}


function frame() {
    if (progression == 0) {
        progressBar.style.width = 0 + '%';
        progressBar.offsetWidth = progressBar.offsetWidth;
    } else if (progression == 45) {
        progressBar.style.width = 100 + '%'
    } else {
        width = ((progression / 45) * 100);
        progressBar.style.width = width + '%';
        console.log(width);
    }
}

function checkClassesHour(currentHour, currentMinutes) {
    if ((currentHour == 8 && currentMinutes >= 5) && (currentHour == 8 && currentMinutes < 50)) {
        if (progession == 0) {
            progression = currentMinutes - 5;
        }
        displayClassesHour("08:05", "08:50", (45 - progression).toString());
    } else if ((currentHour == 8 && currentMinutes >= 55) || (currentHour == 9 && currentMinutes < 40)) {
        if (progression == 0) {
            if (currentHour == 9)
                progression = currentMinutes + 5;
            else
                progression = currentMinutes - 55;
        }
        displayClassesHour("08:55", "09:40", (45 - progression).toString());
    } else if ((currentHour == 9 && currentMinutes >= 50) || (currentHour == 10 && currentMinutes < 35)) {
        if (progression == 0) {
            if (currentHour == 10)
                progression = currentMinutes + 10;
        } else {
            progression = currentMinutes - 50;
        }
        displayClassesHour("09:50", "10:35", (45 - progression).toString());
    } else if ((currentHour == 10 && currentMinutes >= 40) || (currentHour == 11 && currentMinutes < 25)) {
        if (progression == 0) {
            if (currentHour == 11)
                progression = currentMinutes + 20;
        } else {
            progression = currentMinutes - 40;
        }
        displayClassesHour("10:40", "11:25", (45 - progression).toString());
    } else if ((currentHour == 11 && currentMinutes >= 35) || (currentHour == 12 && currentMinutes < 20)) {
        if (progression == 0) {
            if (currentHour == 12) {
                progression = currentMinutes + 25;
            } else {
                progression = currentMinutes - 35;
            }
        }
        displayClassesHour("11:35", "12:20", (45 - progression).toString());
    } else if ((currentHour == 12 && currentMinutes >= 25) || (currentHour == 13 && currentMinutes < 10)) {
        if (progression == 0) {
            if (currentHour == 13) {
                progression = currentMinutes + 35;
            } else {
                progression = currentMinutes - 25;
            }
        }
        displayClassesHour("12:25", "13:10", (45 - progression).toString());
    } else if ((currentHour == 13 && currentMinutes >= 20) || (currentHour == 14 && currentMinutes < 5)) {
        if (progression == 0) {
            if (currentHour == 14) {
                progression = currentMinutes + 40;
            } else {
                progression = currentMinutes - 20;
            }
        }
        displayClassesHour("13:20", "14:05", (45 - progression).toString());
    } else if ((currentHour == 14 && currentMinutes >= 10) && (currentHour == 14 && currentMinutes < 55)) {
        if (progression == 0) {
            progression = currentMinutes - 10;
        }
        displayClassesHour("14:10", "14:55", (45 - progression).toString());
    } else if ((currentHour == 15 && currentMinutes >= 5) && (currentHour == 15 && currentMinutes < 50)) {
        if (progression == 0) {
            progression = currentMinutes - 5;
        }
        displayClassesHour("15:05", "15:50", (45 - progression).toString());
    } else if ((currentHour == 16 && currentMinutes >= 0) && (currentHour == 16 && currentMinutes < 45)) {
        if (progression == 0) {
            progression = currentMinutes;
        }
        displayClassesHour("16:00", "16:45", (45 - progression).toString());
    } else if ((currentHour == 16 && currentMinutes >= 50) || (currentHour == 17 && currentMinutes < 35)) {
        if (progression == 0) {
            if (currentHour == 17) {
                progression = currentMinutes + 10;
            } else {
                progression = currentMinutes - 50;
            }
        }
        displayClassesHour("16:50", "17:35", (45 - progression).toString());
    } else if ((currentHour == 17 && currentMinutes >= 40) || (currentHour == 18 && currentMinutes < 25)) {
        if (progression == 0) {
            if (currentHour == 18) {
                progression = currentMinutes + 20;
            } else {
                progression = currentMinutes - 40;
            }
        }
        displayClassesHour("17:40", "18:25", (45 - progression).toString());
    } else {
        progression = 0;
        if (currentHour >= 18 || currentHour < 8)
            displayClassesHour("Następny dzwonek", "o 8:00!", "POZA GODZINAMI ZAJĘĆ");
        else
            displayClassesHour("PRZERWA", "TRWA", "PRZERWA");
    }
}

function displayClassesHour(startOf, endOf, timeLeft) {
    if (timeLeft == "POZA GODZINAMI ZAJĘĆ" || timeLeft == "PRZERWA")
        document.getElementById('TextUnderBack').innerHTML = "<center>" + timeLeft + "</center>";
    else
        document.getElementById('TextUnderBack').innerHTML = "<center> Do przerwy zostało " + timeLeft + " minut...</center>";

    document.getElementById("startOfClasses").innerHTML = startOf;
    document.getElementById("endOfClasses").innerHTML = endOf;
}


function binaryClockUpdate(currentHour, currentMinutes) {

    document.getElementsByClassName("hour16")[0].style.backgroundColor = "black";
    document.getElementsByClassName("hour8")[0].style.backgroundColor = "black";
    document.getElementsByClassName("hour4")[0].style.backgroundColor = "black";
    document.getElementsByClassName("hour2")[0].style.backgroundColor = "black";
    document.getElementsByClassName("hour1")[0].style.backgroundColor = "black";
    document.getElementsByClassName("minutes32")[0].style.backgroundColor = "black";
    document.getElementsByClassName("minutes16")[0].style.backgroundColor = "black";
    document.getElementsByClassName("minutes8")[0].style.backgroundColor = "black";
    document.getElementsByClassName("minutes4")[0].style.backgroundColor = "black";
    document.getElementsByClassName("minutes2")[0].style.backgroundColor = "black";
    document.getElementsByClassName("minutes1")[0].style.backgroundColor = "black";

    if (currentHour % 16 < currentHour) {
        document.getElementsByClassName("hour16")[0].style.backgroundColor = "green";
        currentHour -= 16;
    }
    if (currentHour % 8 < currentHour) {
        document.getElementsByClassName("hour8")[0].style.backgroundColor = "green";
        currentHour -= 8;
    }
    if (currentHour % 4 < currentHour) {
        document.getElementsByClassName("hour4")[0].style.backgroundColor = "green";
        currentHour -= 4;
    }
    if (currentHour % 2 < currentHour) {
        document.getElementsByClassName("hour2")[0].style.backgroundColor = "green";
        currentHour -= 2;
    }
    if (currentHour % 1 < currentHour) {
        document.getElementsByClassName("hour1")[0].style.backgroundColor = "green";
        currentHour -= 1;
    }
    if (currentMinutes % 32 < currentMinutes) {
        document.getElementsByClassName("minutes32")[0].style.backgroundColor = "green";
        currentMinutes -= 32;
    }
    if (currentMinutes % 16 < currentMinutes) {
        document.getElementsByClassName("minutes16")[0].style.backgroundColor = "green";
        currentMinutes -= 16;
    }
    if (currentMinutes % 8 < currentMinutes) {
        document.getElementsByClassName("minutes8")[0].style.backgroundColor = "green";
        currentMinutes -= 8;
    }
    if (currentMinutes % 4 < currentMinutes) {
        document.getElementsByClassName("minutes4")[0].style.backgroundColor = "green";
        currentMinutes -= 4;
    }
    if (currentMinutes % 2 < currentMinutes) {
        document.getElementsByClassName("minutes2")[0].style.backgroundColor = "green";
        currentMinutes -= 2;
    }
    if (currentMinutes % 1 < currentMinutes) {
        document.getElementsByClassName("minutes1")[0].style.backgroundColor = "green";
        currentMinutes -= 1;
        // console.log(1);
    }
}
