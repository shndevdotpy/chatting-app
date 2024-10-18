// Loader
var setLoader;
var random;

function loader() {
    setLoader = setTimeout(showPage, 1000+Math.floor(Math.random() * 3000) + 1);
}

function showPage() {
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("loader").style.opacity = "0%";
}
// Loader


function randomDMNumber(x){
    random = Math.floor(Math.random() * x) + 1;
    if (random>99){
        random = "+99";
    }
    document.getElementById("dm-pings").innerHTML = random;
}

function muteUnmute(){
    if (document.getElementById("mutebutton").className == "mute"){
        document.getElementById("mutebutton").className = "muted";
        notifySound(0);
    } 
    else {
        document.getElementById("mutebutton").className = "mute";
        document.getElementById("deafbutton").className = "deaf";
        notifySound(1);

    }
}

function deafUndeaf(){
    if (document.getElementById("deafbutton").className == "deaf"){
        document.getElementById("deafbutton").className = "deafen";
        document.getElementById("mutebutton").className = "muted";
        notifySound(0);
    } 
    else {
        document.getElementById("deafbutton").className = "deaf";
        notifySound(1);

    }
}

function settingsMenu(x){
    if (x == "open"){
        document.getElementById("settings-area").style.visibility = "visible";
        document.getElementById("settings-area").style.opacity = "100%";
        document.getElementById("settings-container").style.marginTop = "20vh";
        document.getElementById("settingsbutton").style.transform = "rotate(360deg)";
        popSound();
    } else if (x == "close") {
        document.getElementById("settings-area").style.visibility = "hidden";
        document.getElementById("settings-area").style.opacity = "0%";
        document.getElementById("settings-container").style.marginTop = "300px";
        document.getElementById("settingsbutton").style.transform = "rotate(-360deg)";
        popSound();
    }
}

function notifySound(x){
    if (x==1){
        var notify = new Audio('./sounds/notify.mp3');
        notify.play();
    } else {
        var notify = new Audio('./sounds/notify1.mp3');
        notify.play();
    }
    
}

function popSound(){
    var notify = new Audio('./sounds/pop.mp3');
    notify.play();
}
