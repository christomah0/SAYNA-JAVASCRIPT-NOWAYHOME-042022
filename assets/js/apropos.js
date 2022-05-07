// ======================================================== DEBUT
// code source pour que les lignes du logo passent en blanc
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const collectionOfLogo = [
    ["./assets/logo/logof.png", "./assets/logo/logoi.png", "./assets/logo/logot.png", "./assets/logo/logoy.png"],
    ["./assets/logo/logof-white.png", "./assets/logo/logoi-white.png", "./assets/logo/logot-white.png", "./assets/logo/logoy-white.png"]
];

img1.addEventListener("mouseover", () => {img1.src = collectionOfLogo[1][0]});
img1.addEventListener("mouseout", () => {img1.src = collectionOfLogo[0][0]});

img2.addEventListener("mouseover", () => {img2.src = collectionOfLogo[1][1]});
img2.addEventListener("mouseout", () => {img2.src = collectionOfLogo[0][1]});

img3.addEventListener("mouseover", () => {img3.src = collectionOfLogo[1][2]});
img3.addEventListener("mouseout", () => {img3.src = collectionOfLogo[0][2]});

img4.addEventListener("mouseover", () => {img4.src = collectionOfLogo[1][3]});
img4.addEventListener("mouseout", () => {img4.src = collectionOfLogo[0][3]});
// ======================================================= FIN


// ======================================================= DEBUT
// code source pour le surlignelement des rubriques du menu lorsque la souris survole l'élément
const lines = document.querySelectorAll("li");

for (let line of lines) {
    line.addEventListener("mouseover", (l) => {
        l.preventDefault();
        line.style.borderBottom = "3px solid #ffffff";
        if (line.classList.contains("list_")) {
            line.style.borderBottom = "none";
        }
    });
    line.addEventListener("mouseout", (l) => {
        l.preventDefault();
        line.style.borderBottom = "none";
    });
}
// ======================================================= FIN


// ======================================================= DEBUT
// code source pour que Tous les titres du site (avec la police Far From Home) apparaîssent avec un fade in en démarrant de la gauche (mouvement de gauche à droite)
const title = document.querySelector(".titre");
const valueOfTitle = title.textContent;
let j = 0;

// Les sous-titres quant à eux (en dessous du titre) apparaîssent progressivement (opacité de 0% à 100%)
const subtitle = document.querySelector(".description");

function opacityOfSubtitle() {
    subtitle.style.opacity = j;
    if (j < 1) {
        setTimeout("opacityOfSubtitle()", 100);
        j += 0.1;
    }
}

title.style.transform = "translateX(0%)"
opacityOfSubtitle();
// ======================================================= FIN