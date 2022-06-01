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
    } else if (event.code == "KeyW") {
        audio = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8967/4329625759280ee6fa2705f340c1979f3f8054fa/mp3/68439-piano-bb-wav.mp3?1512767681");
    } else if (event.code == "KeyE") {
        audio = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8964/216fa22d8f5189bc92a710ba9459746ee29e0869/mp3/68440-piano-c-wav.mp3?1512767680");
    } else if (event.code == "KeyT") {
        audio = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8965/1b22caa7eb732c94a1ec0305c05e307487934143/mp3/68444-piano-eb-wav.mp3?1512767680");
    } else if (event.code == "KeyY") {
        audio = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8966/d260eaaf648c7857b28d7e45d35d3d6467b70a2b/mp3/68445-piano-f-wav.mp3?1512767681");
    } else if (event.code == "KeyU") {
        audio = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8963/8c93434b9dc2534bd2621a156b220a92b8f091dd/mp3/68447-piano-g-wav.mp3?1512767680");
    } else {
        console.log("Please, press the correct key.")
    }
    console.log(audio);
    if (audio !== null) {
        audio.load();
        audio.play();
    }
});