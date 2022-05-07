// ======================================================== DEBUT
// code source pour accomplir l'inversion du couleur entre texte et arrière-plan du bouton
const buttons = document.querySelectorAll(".btn");
const button2 = document.querySelector(".button2");

for (let button of buttons) {
    let text_color = window.getComputedStyle(button, null)["color"];
    let background_color = window.getComputedStyle(button, null)["backgroundColor"];

    button.addEventListener("mouseover", (c) => {
        c.preventDefault();
        button.style.color = background_color;
        button.style.backgroundColor = text_color;
        button.style.border = `1px solid ${background_color}`;
        button.style.boxShadow = `0px 3px 3px 3px ${background_color}`;
    });

    button2.addEventListener("mouseover", (c) => {
        c.preventDefault();
        button2.style.color = "#b11313";
        button2.style.backgroundColor = "#ffffff";
        button2.style.boxShadow = "0px 3px 3px 3px #ffffff"
    });

    button.addEventListener("mouseout", (c) => {
        c.preventDefault();
        button.style.color = text_color;
        button.style.backgroundColor = background_color;
        button.style.border = `1px solid ${text_color}`;
        button.style.boxShadow = "none";
    });
}
// ======================================================== FIN


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


// ======================================================= DEBUT
// une Popup Box s'affiche pour signaler que l’opération a été effectuée
const popupBox = document.querySelector(".popupBox"), popupBox1 = document.querySelector(".popupBox1");
const formButton = document.querySelector(".form-button"), formButton1 = document.querySelector(".form-button1");
const one = document.getElementById("one"), two = document.getElementById("two");
const three = document.getElementById("three"), four = document.getElementById("four");
const five = document.getElementById("five");
const btnOK = document.querySelector("#hideBtn"), btnOK1 = document.querySelector("#hideBtn1");
const inputText1 = document.getElementById("inputText1"), inputText2 = document.getElementById("inputText2"); 

formButton.addEventListener("click", (s) => {
    s.preventDefault();
    if (one.value !== "" && two.value !== "" && three.value !== "" && four.value !== "" && five.value !== "") {
        popupBox.style.display = "block";
    }
});

formButton1.addEventListener("click", (s) => {
    s.preventDefault();
    if (inputText1.value !== "" && inputText2.value !== "") {
        popupBox1.style.display = "block";
    }
})

btnOK.addEventListener("click", (c) => {
    c.preventDefault();
    popupBox.style.display = "none";
});

btnOK1.addEventListener("click", (c) => {
    c.preventDefault();
    popupBox1.style.display = "none";
})
// ======================================================= FIN


// ======================================================= DEBUT
// Les images des trois héros Spiderman se zooment légèrement et individuellement au passage de la souris
// Le texte sera révélé au passage de la souris sur l’image
// Décalage du bouton “voir adversaires”
const firstSpiderman = document.getElementById("firstSpiderman"), secondSpiderman = document.getElementById("secondSpiderman"), thirdSpiderman = document.getElementById("thirdSpiderman");
const firstText = document.getElementById("firstText"), secondText = document.getElementById("secondText"), thirdText = document.querySelectorAll(".thirdText");
const fBtn = document.getElementById("fBtn"), sBtn = document.getElementById("sBtn"), tBtn = document.getElementById("tBtn");
const cardBody = document.querySelectorAll(".card-body");
let fo = 0, so = 0, to = 0;

firstText.style.display = "none";
secondText.style.display = "none";
thirdText.forEach((el) => {el.style.display = "none";});

firstSpiderman.addEventListener("mouseover", (o) => {
    o.preventDefault();
    firstSpiderman.style.scale = "1.2"
    firstText.style.display = "block"; firstText.style.paddingTop = "2rem";
    firsttext();
    fBtn.style.padding = "20px 25px"
});
firstSpiderman.addEventListener("mouseout", (o) => {
    o.preventDefault();
    fo = 0;
    firstSpiderman.style.scale = "none";
    firstText.style.opacity = "0";
    firstText.style.display = "none";
    fBtn.style.padding = "15px 20px";
});

secondSpiderman.addEventListener("mouseover", (o) => {
    o.preventDefault();
    secondSpiderman.style.scale = "1.2";
    secondText.style.display = "block"; secondText.style.paddingTop = "2rem";
    secondtext();
    sBtn.style.padding = "20px 25px";
});
secondSpiderman.addEventListener("mouseout", (o) => {
    o.preventDefault();
    so = 0;
    secondSpiderman.style.scale = "none";
    secondText.style.opacity = "0";
    secondText.style.display = "none";
    sBtn.style.padding = "15px 20px";
});

thirdSpiderman.addEventListener("mouseover", (o) => {
    o.preventDefault();
    thirdSpiderman.style.scale = "1.2";
    thirdText.forEach((el) => {el.style.paddingTop = "1rem"; el.style.display = "block";});
    thirdtext();
    tBtn.style.padding = "20px 25px";
});
thirdSpiderman.addEventListener("mouseout", (o) => {
    o.preventDefault();
    to = 0;
    thirdSpiderman.style.scale = "none";
    thirdText.forEach((el) => {el.style.opacity = "0";});
    thirdText.forEach((el) => {el.style.display = "none";});
    tBtn.style.padding = "15px 20px";
})

function firsttext() {
    firstText.style.opacity = fo;
    if (fo < 1) {
        setTimeout("firsttext()", 50);
        fo += 0.2;
    }
}

function secondtext() {
    secondText.style.opacity = so;
    if (so < 1) {
        setTimeout("secondtext()", 50);
        so += 0.2;
    }
}

function thirdtext() {
    thirdText.forEach((el) => {el.style.opacity = to;});
    if (to < 1) {
        setTimeout("thirdtext()", 50);
        to += 0.2;
    }
}
// ======================================================= FIN


