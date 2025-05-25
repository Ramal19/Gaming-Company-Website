let navBar = document.querySelector(".navbar")

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 800) {
        navBar.style.display = "none";
    } else {
        navBar.style.display = "flex";
    }
});