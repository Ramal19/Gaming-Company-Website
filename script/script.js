let navBar = document.querySelector(".navbar");
let downloadButton = document.getElementById("download-button");
let header = document.querySelector("header");
let topButton = null;
let cardsSection = document.querySelector(".card-three");
let menuButton = document.querySelector(".menu-button");
let isMenuOpen = null;
let scrollPosition = window.scrollY;

window.addEventListener('scroll', () => {
    (window.scrollY > scrollPosition) ? navBar.style.display = "none" : navBar.style.display = "flex";

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
    cardsSection.scrollIntoView({ behavior: "smooth" });
});
if (menuButton) {
    menuButton.addEventListener('click', () => {
        document.body.style.overflow = "hidden";
        if (!isMenuOpen) {
            isMenuOpen = document.createElement("div");
            isMenuOpen.classList.add("menu-open");
            isMenuOpen.innerHTML = `
                <button class="close-menu-button"><i class="bi bi-x"></i></button>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            `;

            header.appendChild(isMenuOpen);
            let closeMenuButton = isMenuOpen.querySelector(".close-menu-button");
            closeMenuButton.addEventListener('click', () => {
                isMenuOpen.remove();
                isMenuOpen = null;
                document.body.style.overflow = "auto";
            });

            let menuLinks = isMenuOpen.querySelectorAll("a");
            menuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    isMenuOpen.remove();
                    isMenuOpen = null;
                    document.body.style.overflow = "auto";
                })
            })
        }
    })
}