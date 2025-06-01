let navBar = document.querySelector(".navbar");
let downloadButton = document.getElementById("download-button");
let header = document.querySelector("header");
let topButton = null;

window.addEventListener('scroll', () => {
    (window.scrollY > 800) ?  navBar.style.display = "none" : navBar.style.display = "flex";

    if (window.scrollY > 0) {
        if (!topButton) {
            topButton = document.createElement("button");
            topButton.innerHTML = `<i class="bi bi-arrow-up"></i>`;
            topButton.classList.add("top-button");
            header.appendChild(topButton);
            topButton.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    } else if (topButton && window.scrollY === 0) {
        topButton.remove();
        topButton = null;
    }
});

downloadButton.addEventListener('click', () => {
    window.scrollTo({ top: 500, behavior: "smooth" });
});