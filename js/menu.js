let openMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");
let menu = document.getElementById("menu");

openMenu.onclick = function() {
    menu.classList.add("opened");
}

closeMenu.onclick = function() {
    menu.classList.remove("opened");
}

window.onscroll = function() {
    menu.classList.remove("opened");
}