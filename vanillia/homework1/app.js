const title = document.querySelector("h1");
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
    
    eventMouseEnter : function () {
        title.innerHTML = "The mouse is here!";
        title.style.color = colors[0];
    },
    eventMouseLeave : function () {
        title.innerHTML = "The mouse is gone!";
        title.style.color = colors[1];
    },
    eventContextMenu : function () {
        title.innerHTML = "That was a right click!";
        title.style.color = colors[2];
    },
    eventResize : function () {
        title.innerHTML = "You just resized!";
        title.style.color = colors[3];
    },
}

title.addEventListener("mouseenter",superEventHandler.eventMouseEnter);
title.addEventListener("mouseleave",superEventHandler.eventMouseLeave);
window.addEventListener("contextmenu",superEventHandler.eventContextMenu);
window.addEventListener("resize",superEventHandler.eventResize);


