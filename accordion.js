// To begin, close all the sections by default
// To do that, hide all the sections, specifically the p tags
// Only the h3 tags will be left visible

var cheeseH3 = document.getElementById("cheese-heading");
var lettuceH3 = document.getElementById("lettuce-heading");
var tomatoH3 = document.getElementById("tomato-heading");
var beefH3 = document.getElementById("beef-heading");

var cheesep = document.getElementById("cheese-content");
var lettucep = document.getElementById("lettuce-content");
var tomatop = document.getElementById("tomato-content");
var beefp = document.getElementById("beef-content");

cheesep.style.display = "none";
lettucep.style.display = "none";
tomatop.style.display = "none";
beefp.style.display = "none";

// Assign functions to each h3 tag

function toggleCheese() {
    if (cheesep.style.display === "none") {
        cheesep.style.display = "block";
    } else {
        cheesep.style.display = "none";
    }

    // var fadeEffect = setInterval(function () {
    //     if (!cheeseH3.style.opacity) {
    //         cheeseH3.style.opacity = 1;
    //     }
    //     if (cheeseH3.style.opacity > 0) {
    //         cheeseH3.style.opacity -= 0.1;
    //     } else {
    //         clearInterval(fadeEffect);
    //     }
    // }, 200);
}

function toggleLettuce() {
    if (lettucep.style.display === "none") {
        lettucep.style.display = "block";
    } else {
        lettucep.style.display = "none";
    }
}

function toggleTomato() {
    if (tomatop.style.display === "none") {
        tomatop.style.display = "block";
    } else {
        tomatop.style.display = "none";
    }
}

function toggleBeef() {
    if (beefp.style.display === "none") {
        beefp.style.display = "block";
    } else {
        beefp.style.display = "none";
    }
}

// In order to toggle each section on/off, we need to allow
// the user to click on each h3 tag
// To do that, we have to add a click event listener to each h3 tag

cheeseH3.addEventListener("click", toggleCheese);
lettuceH3.addEventListener("click", toggleLettuce);
tomatoH3.addEventListener("click", toggleTomato);
beefH3.addEventListener("click", toggleBeef);
