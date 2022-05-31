document.addEventListener("keydown", function(event) {
    let audio = null;
    if (event.code == "KeyA") {
        audio = new Audio("http://www.vibrationdata.com/piano_B.mp3");
    } else if (event.code == "KeyS") {
        audio = new Audio("http://mrclan.com/fastdl/tfc/sound/e1.wav");
    } else if (event.code == "KeyD") {
        audio = new Audio("http://mrclan.com/fastdl/tfc/sound/d1.wav");
    } else if (event.code == "KeyF") {
        audio = new Audio("http://mrclan.com/fastdl/tfc/sound/c3.wav");
    } else if (event.code == "KeyG") {
        audio = new Audio("http://www.vibrationdata.com/piano_A_sharp.mp3");
    } else if (event.code == "KeyH") {
        audio = new Audio("http://mrclan.com/fastdl/tfc/sound/g2.wav");
    } else if (event.code == "KeyJ") {
        audio = new Audio("http://www.vibrationdata.com/piano_middle_C.mp3");
    } else {
        console.log("Please, press the correct key.")
    }
    console.log(audio);
    if (audio !== null) {
        audio.load();
        audio.play();
    }
});