let sidenavOpen = document.getElementById("sidenavOpen");
let sidenavClose = document.getElementById("sidenavClose");
let sidenav = document.getElementById("sidenav");

sidenavOpen.addEventListener("click", toggleSidenav);
sidenavClose.addEventListener("click", toggleSidenav);

function toggleSidenav() {
    if (sidenav.style.visibility === "visible") {
        sidenav.style.visibility = "hidden";
    } else {
        sidenav.style.visibility = "visible";
    }
}