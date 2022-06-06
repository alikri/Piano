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
let r = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8965/1b22caa7eb732c94a1ec0305c05e307487934143/mp3/68444-piano-eb-wav.mp3?1512767680");
let keydownR = document.getElementById('r');
let y = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8966/d260eaaf648c7857b28d7e45d35d3d6467b70a2b/mp3/68445-piano-f-wav.mp3?1512767681");
let keydownY = document.getElementById('y');
let u = new Audio("https://d9olupt5igjta.cloudfront.net/samples/sample_files/8963/8c93434b9dc2534bd2621a156b220a92b8f091dd/mp3/68447-piano-g-wav.mp3?1512767680");
let keydownU = document.getElementById('u');


document.addEventListener("keydown", function(event) {
    if (event.code == "KeyA") {
        a;
        a.load();
        a.play();
        keydownA.style.background = "linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)";
        keydownA.style.boxShadow = "2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);";
        keydownA.style.borderTop ="1px solid #777;";
        keydownA.style.borderLeft ="1px solid #999;";
        keydownA.style.borderBottom ="1px solid #999;";
    } else if (event.code == "KeyS") {
        s;
        s.load();
        s.play();
        keydownS.style.background = "linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)";
        keydownS.style.boxShadow = "2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);";
        keydownS.style.borderTop ="1px solid #777;";
        keydownS.style.borderLeft ="1px solid #999;";
        keydownS.style.borderBottom ="1px solid #999;";
    } else if (event.code == "KeyD") {
        d;
        d.load();
        d.play();
        keydownD.style.background = "linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)";
        keydownD.style.boxShadow = "2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);";
        keydownD.style.borderTop ="1px solid #777;";
        keydownD.style.borderLeft ="1px solid #999;";
        keydownD.style.borderBottom ="1px solid #999;";
    } else if (event.code == "KeyF") {
        f;
        f.load();
        f.play();
        keydownF.style.background = "linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)";
        keydownF.style.boxShadow = "2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);";
        keydownF.style.borderTop ="1px solid #777;";
        keydownF.style.borderLeft ="1px solid #999;";
        keydownF.style.borderBottom ="1px solid #999;";
    } else if (event.code == "KeyG") {
        g;
        g.load();
        g.play();
        keydownG.style.background = "linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)";
        keydownG.style.boxShadow = "2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);";
        keydownG.style.borderTop ="1px solid #777;";
        keydownG.style.borderLeft ="1px solid #999;";
        keydownG.style.borderBottom ="1px solid #999;";
    } else if (event.code == "KeyH") {
        h;
        h.load();
        h.play();
        keydownH.style.background = "linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)";
        keydownH.style.boxShadow = "2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);";
        keydownH.style.borderTop ="1px solid #777;";
        keydownH.style.borderLeft ="1px solid #999;";
        keydownH.style.borderBottom ="1px solid #999;";
    } else if (event.code == "KeyJ") {
        j;
        j.load();
        j.play();
        keydownJ.style.background = "linear-gradient(to bottom,#fff 0%,#e9e9e9 100%)";
        keydownJ.style.boxShadow = "2px 0 3px rgba(0,0,0,0.1) inset,-5px 5px 20px rgba(0,0,0,0.2) inset,0 0 3px rgba(0,0,0,0.2);";
        keydownJ.style.borderTop ="1px solid #777;";
        keydownJ.style.borderLeft ="1px solid #999;";
        keydownJ.style.borderBottom ="1px solid #999;";
    } else if (event.code == "KeyW") {
        w;
        w.load();
        w.play();
        keydownW.style.background = "linear-gradient(to right,#444 0%,#222 100%)";
        keydownW.style.boxShadow = "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5)";
    } else if (event.code == "KeyE") {
        e;
        e.load();
        e.play();
        keydownE.style.background = "linear-gradient(to right,#444 0%,#222 100%)";
        keydownE.style.boxShadow = "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5)";
    } else if (event.code == "KeyR") {
        r;
        r.load();
        r.play();
        keydownR.style.background = "linear-gradient(to right,#444 0%,#222 100%)";
        keydownR.style.boxShadow = "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5)";
    } else if (event.code == "KeyY") {
        y;
        y.load();
        y.play();
        keydownY.style.background = "linear-gradient(to right,#444 0%,#222 100%)";
        keydownY.style.boxShadow = "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5)";
    } else if (event.code == "KeyU") {
        u;
        u.load();
        u.play();
        keydownU.style.background = "linear-gradient(to right,#444 0%,#222 100%)";
        keydownU.style.boxShadow = "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -2px 2px 3px rgba(0,0,0,0.6) inset,0 1px 2px rgba(0,0,0,0.5)";
    } else {
        console.log("Please, press the correct key.")
    }
});
document.addEventListener("keyup", function(event) {
    if (event.code == "KeyA") {
        keydownA.style.background = "white";
    } else if (event.code == "KeyS") {
        keydownS.style.background = "white";
    } else if (event.code == "KeyD") {
        keydownD.style.background = "white";
    } else if (event.code == "KeyF") {
        keydownF.style.background = "white";
    } else if (event.code == "KeyG") {
        keydownG.style.background = "white";
    } else if (event.code == "KeyH") {
        keydownH.style.background = "white";
    } else if (event.code == "KeyJ") {
        keydownJ.style.background = "white";
    } else if (event.code == "KeyW") {
        keydownW.style.background = "linear-gradient(45deg,#222 0%,#555 100%)";
        keydownU.style.boxShadow = "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5)";
    } else if (event.code == "KeyE") {
        keydownE.style.background = "linear-gradient(45deg,#222 0%,#555 100%)";
        keydownU.style.boxShadow = "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5)";
    } else if (event.code == "KeyR") {
        keydownR.style.background = "linear-gradient(45deg,#222 0%,#555 100%)";
        keydownR.style.boxShadow = "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5)";
    } else if (event.code == "KeyY") {
        keydownY.style.background = "linear-gradient(45deg,#222 0%,#555 100%)";
        keydownY.style.boxShadow = "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5)";
    } else if (event.code == "KeyU") {
        keydownU.style.background = "linear-gradient(45deg,#222 0%,#555 100%)";
        keydownU.style.boxShadow = "-1px -1px 2px rgba(255,255,255,0.2) inset,0 -5px 2px 3px rgba(0,0,0,0.6) inset,0 2px 4px rgba(0,0,0,0.5)";
    } else {
        console.log("Please, press the correct key.")
    }
});