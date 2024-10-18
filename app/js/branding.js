var appBrand = "Chatting App";
var appAuthor = "shndev";
var appAuthorLink = "https://github.com/shndevdotpy";

function applyBrand(){
    document.title = appBrand;
    document.getElementById("loadertext").innerHTML = appBrand;
    document.getElementById("brand").innerHTML = appBrand + " <span style='font-size: 10px;'>by <a onclick='author()' style='font-size:15px;text-decoration: none; color: #33f;'>"+appAuthor+"</a></span>"
}

function author(){
    window.location.href = appAuthorLink;
}