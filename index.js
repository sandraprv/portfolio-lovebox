// ------ CAROUSEL ------ //


// ------ PORTFOLIO ------ //

var btns = document.querySelectorAll(".portfolio-btn");

btns.forEach(function(btn){
    btn.onclick = function() {
        var modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display = "block";
        
        document.getElementById("overlay").style.display = "block";

    };
});

// CLOSING THE MODAL //
// BY BTN //
var closeBtns = document.querySelectorAll(".close");

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        btn.closest(".modal").style.display = "none";
        document.getElementById("overlay").style.display = "none";


    };
});

// BY CLICKING THE OVERLAY //
var modals = document.querySelectorAll(".modal");

function off() {
  document.getElementById("overlay").style.display = "none";
  modals.forEach(function(modal){
    modal.style.display ="none";
  });
};

// ----- SECTIONS ------ //

const sectionsTitles = document.getElementsByClassName("sectionTitle");
console.log(sectionsTitles);
var x;

for (x = 0; x < sectionsTitles.length; x++) {

  sectionsTitles[x].addEventListener("click", function() {
    var y = this.nextElementSibling;
      if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
  });
}


// ----- FAQ ------ //
const acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("is-visible"); // p
    this.lastChild.classList.toggle("upsidedown") // arrow
  });
}
