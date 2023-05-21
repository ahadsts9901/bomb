function getnumber(num) {
    let result = document.getElementById("number");

    result.value += num;
}

function Clear() {
    let result = document.getElementById("number");

    result.value = "";
}

function Back() {
    let str = document.getElementById("number").value;
    str = str.substr(0, str.length - 1);
    document.getElementById("number").value = str;
}

function Start() {
    let number = document.getElementById("number");
    number.style.color = "#000";
    if (number.value === "12345678") {
        number.value = "C-H-E-C-K-I-N-G...";
        let seconds = 10;
        let countDownInterval = setInterval(function() {
            // console.log(seconds)
            number.value = seconds;
            seconds--;
            document.getElementById("timer").play();
            if (seconds < 0) {
                clearInterval(countDownInterval);
                document.getElementById("bomb").play();
            }
        }, 1500);

        document.getElementById("yellow").style.backgroundColor = "#bababa";
        document.getElementById("yellow").style.width = "0.7em";
        document.getElementById("yellow").style.height = "0.7em";
        document.getElementById("green").style.backgroundColor = "#0e0";
        document.getElementById("green").style.width = "0.9em";
        document.getElementById("green").style.height = "0.9em";
        document.getElementById("red").style.backgroundColor = "#bababa";
        document.getElementById("red").style.width = "0.7em";
        document.getElementById("red").style.height = "0.7em";
    } else {
        number.value = "E-R-R-O-R";
        number.style.color = "#e00";
        document.getElementById("red").style.backgroundColor = "#e00";
        document.getElementById("red").style.width = "0.9em";
        document.getElementById("red").style.height = "0.9em";
        document.getElementById("yellow").style.backgroundColor = "#bababa";
        document.getElementById("yellow").style.width = "0.7em";
        document.getElementById("yellow").style.height = "0.7em";
        document.getElementById("green").style.backgroundColor = "#bababa";
        document.getElementById("green").style.width = "0.7em";
        document.getElementById("green").style.height = "0.7em";
    }
}

function sound() {
    document.getElementById("play-button").innerHTML =
        '<a href="javascript:void(0)" onClick="soundStop()"><h1 id="play-button" class="bi bi-volume-up-fill"></h1></a>';
    document.getElementById("war-background").play();
}

function soundStop() {
    document.getElementById("play-button").innerHTML =
        '<a href="javascript:void(0)" onClick="sound()"><h1 id="play-button" class="bi bi-volume-mute-fill"></h1></a>';
    document.getElementById("war-background").disabled = true;
}