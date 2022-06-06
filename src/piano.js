let a = new Audio("http://www.vibrationdata.com/piano_B.mp3");
let keydownA = document.getElementById('a');
let s = new Audio("http://www.vibrationdata.com/piano_B.mp3");
let keydownS = document.getElementById('s');
let d = new Audio("http://mrclan.com/fastdl/tfc/sound/d1.wav");
let keydownD = document.getElementById('d');
let f = new Audio("http://mrclan.com/fastdl/tfc/sound/c3.wav");
let keydownF = document.getElementById('f');
let g = new Audio("http://www.vibrationdata.com/piano_A_sharp.mp3");
let keydownG = document.getElementById('g');
let h = new Audio("http://mrclan.com/fastdl/tfc/sound/g2.wav");
let keydownH = document.getElementById('h');
let j = new Audio("http://www.vibrationdata.com/piano_middle_C.mp3");
let keydownJ = document.getElementById('j');
let  w = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8967/4329625759280ee6fa2705f340c1979f3f8054fa/mp3/68439-piano-bb-wav.mp3?1512767681");
let keydownW = document.getElementById('w');
let e = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8964/216fa22d8f5189bc92a710ba9459746ee29e0869/mp3/68440-piano-c-wav.mp3?1512767680");
let keydownE = document.getElementById('e');
let t = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8965/1b22caa7eb732c94a1ec0305c05e307487934143/mp3/68444-piano-eb-wav.mp3?1512767680");
let keydownT = document.getElementById('t');
let y = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8966/d260eaaf648c7857b28d7e45d35d3d6467b70a2b/mp3/68445-piano-f-wav.mp3?1512767681");
let keydownY = document.getElementById('y');
let u = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8963/8c93434b9dc2534bd2621a156b220a92b8f091dd/mp3/68447-piano-g-wav.mp3?1512767680");
let keydownU = document.getElementById('u');

let keys = ["KeyA", "KeyS", "KeyD", "KeyF","KeyG","KeyH","KeyJ","KeyW","KeyE","KeyT","KeyY","KeyU"];

document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        a;
        a.load();
        a.play();
        keydownA.style.background = "darkgrey";
    } else if (event.code == "KeyS") {
        s;
        s.load();
        s.play();
        keydownS.style.background = "darkgrey";
    } else if (event.code == "KeyD") {
        d;
        d.load();
        d.play();
        keydownD.style.background = "darkgrey";
    } else if (event.code == "KeyF") {
        f;
        f.load();
        f.play();
        keydownF.style.background = "darkgrey";
    } else if (event.code == "KeyG") {
        g;
        g.load();
        g.play();
        keydownG.style.background = "darkgrey";
    } else if (event.code == "KeyH") {
        h;
        h.load();
        h.play();
        keydownH.style.background = "darkgrey";
    } else if (event.code == "KeyJ") {
        j;
        j.load();
        j.play();
        keydownJ.style.background = "darkgrey";
    } else if (event.code == "KeyW") {
        w;
        w.load();
        w.play();
        keydownW.style.background = "#434343";
    } else if (event.code == "KeyE") {
        e;
        e.load();
        e.play();
        keydownE.style.background = "#434343";
    } else if (event.code == "KeyT") {
        t;
        t.load();
        t.play();
        keydownT.style.background = "#434343";
    } else if (event.code == "KeyY") {
        y;
        y.load();
        y.play();
        keydownY.style.background = "#434343";
    } else if (event.code == "KeyU") {
        u;
        u.load();
        u.play();
        keydownU.style.background = "#434343";
    } else {
        console.log("Please, press the correct key.")
    }
});
document.addEventListener("keyup", function(event) {
    if (event.code == "KeyA") {
        keydownA.style.background = "white";
        keydownA.style.transition = "0.5s"
    } else if (event.code == "KeyS") {
        keydownS.style.background = "white";
        keydownS.style.transition = "0.5s"
    } else if (event.code == "KeyD") {
        keydownD.style.background = "white";
        keydownD.style.transition = "0.5s"
    } else if (event.code == "KeyF") {
        keydownF.style.background = "white";
        keydownF.style.transition = "0.5s"
    } else if (event.code == "KeyG") {
        keydownG.style.background = "white";
        keydownG.style.transition = "0.5s"
    } else if (event.code == "KeyH") {
        keydownH.style.background = "white";
        keydownH.style.transition = "0.5s"
    } else if (event.code == "KeyJ") {
        keydownJ.style.background = "white";
        keydownJ.style.transition = "0.5s"
    } else if (event.code == "KeyW") {
        keydownW.style.background = "black";
        keydownW.style.transition = "0.5s"
    } else if (event.code == "KeyE") {
        keydownE.style.background = "black";
        keydownE.style.transition = "0.5s"
    } else if (event.code == "KeyT") {
        keydownT.style.background = "black";
        keydownT.style.transition = "0.5s"
    } else if (event.code == "KeyY") {
        keydownY.style.background = "black";
        keydownY.style.transition = "0.5s"
    } else if (event.code == "KeyU") {
        keydownU.style.background = "black";
        keydownU.style.transition = "0.5s"
    } else {
        console.log("Please, press the correct key.")
    }
});