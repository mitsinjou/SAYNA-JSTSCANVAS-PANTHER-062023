// Fonction afficher lors du défilement
function montrerLorsDefilement() {
    var elements = document.querySelectorAll(".fade"); // Sélectionne tous  "fade"

    // Parcours tous les éléments
    elements.forEach(function (element) {
        if (estVisible(element)) {
            // Vérifie si l'élément est visible à l'écran
            element.classList.add("show"); // Ajoute une classe pour afficher
        } else {
            element.classList.remove("show"); // Sinon, retire la classe pour masquer
        }
    });
}

//  vérifier si un élément est visible
function estVisible(element) {
    var hauteurFenetre = window.innerHeight; // hauteur de la fenêtre
    var positionElement = element.getBoundingClientRect().top; //  position de l'élément
    var pointApparition = 150; // point de déclenchement

    return positionElement < hauteurFenetre - pointApparition; // vrai si l'élément est suffisamment visible
}

// affichage des éléments lors du défilement
window.addEventListener("scroll", montrerLorsDefilement);

// Attendre que le document soit prêt
$(document).ready(function () {
    // Masquer les éléments avec la classe "box"
    $(".box").hide();

    // apparaître les éléments "box"
    setTimeout(function () {
        $(".box").slideDown(4000); // Faire glisser vers le bas les éléments pendant un temps
    }, 3000); // Attendre 3 secondes avant d'exécuter la fonction

    // Ajouter un effet de zoom sur les titres h1 et h2
    $("h1, h2").hover(
        function () {
            $(this).css("transform", "scale(1.3)"); // Agrandir le titre
        },
        function () {
            $(this).css("transform", "scale(1)"); // Revenir à la taille normale du titre
        }
    );

    // Ajouter un effet de zoom sur l'image avec la classe "panther-head" lorsqu'on passe la souris dessus
    $(".panther-head").hover(
        function () {
            $(this).css("transform", "scale(1.3)"); // Agrandir l'image
        },
        function () {
            $(this).css("transform", "scale(1)"); // Revenir à la taille normale de l'image
        }
    );

    // Ajouter une animation d'agrandissement/rétrécissement sur l'image avec la classe "panther-head" lorsqu'on passe la souris dessus
    $(".panther-head").mouseenter(function () {
        $(this).animate({ width: "+=10%" }); // Agrandir l'image de 10%
    });

    $(".panther-head").mouseleave(function () {
        $(this).animate({ width: "-=10%" }); // Rétrécir l'image de 10%
    });
});

// SLIDE

document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".container-carroussel");
    const carouselButton = document.querySelector("bouton-carroussel");

    carouselButton.addEventListener("click", function () {
        const firstItem = carousel.firstElementChild; // premier élément du carrousel
        carousel.removeChild(firstItem); // Supprime le premier élément du carrousel
        carousel.appendChild(firstItem); // Ajoute le premier élément à la fin
    });
});
