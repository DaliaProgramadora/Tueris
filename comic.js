 //BOTONUP

 function scrollarriba() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
document.getElementById('scrollup').addEventListener('click', scrollarriba);

//LOGO

var logo = document.getElementById("logo");

logo.addEventListener("click", function() {
  window.location.href = "index.html";
});

// menu burger
function toggleMenu() {
    var menuOverlay = document.getElementById("menuOverlay");
    if (menuOverlay.style.display === "block") {
        menuOverlay.style.display = "none";
    } else {
        menuOverlay.style.display = "block";
    }
}
