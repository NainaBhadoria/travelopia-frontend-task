// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var cross = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cross.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// mobile menu click
var menu_click = document.querySelector(".menu-bar");
var cross_click = document.querySelector(".icon_close");
menu_click.addEventListener("click", function() {
  document.querySelector(".mobile-menu").classList.add("in")
});
cross_click.addEventListener("click", function() {
  document.querySelector(".mobile-menu").classList.remove("in")
});