// Fonction pour afficher les éléments lors du défilement
function montrerLorsDefilement() {
    var elements = document.querySelectorAll(".fade"); // Sélectionne tous les éléments avec la classe "fade"

    // Parcours tous les éléments sélectionnés
    elements.forEach(function (element) {
        if (estVisible(element)) {
            // Vérifie si l'élément est visible à l'écran
            element.classList.add("show"); // Ajoute une classe pour afficher l'élément
        } else {
            element.classList.remove("show"); // Sinon, retire la classe pour masquer l'élément
        }
    });
}

// Fonction pour vérifier si un élément est visible à l'écran
function estVisible(element) {
    var hauteurFenetre = window.innerHeight; // Récupère la hauteur de la fenêtre du navigateur
    var positionElement = element.getBoundingClientRect().top; // Récupère la position de l'élément par rapport à la fenêtre
    var pointApparition = 150; // Définit un point de déclenchement de l'apparition

    return positionElement < hauteurFenetre - pointApparition; // Retourne vrai si l'élément est suffisamment visible
}

// Gérer l'affichage des éléments lors du défilement
window.addEventListener("scroll", montrerLorsDefilement);

// Attendre que le document soit prêt
$(document).ready(function () {
    // Masquer les éléments avec la classe "box"
    $(".box").hide();

    // Faire apparaître les éléments avec la classe "box" après un délai
    setTimeout(function () {
        $(".box").slideDown(4000); // Faire glisser vers le bas les éléments pendant un temps
    }, 3000); // Attendre 3 secondes avant d'exécuter la fonction

    // Ajouter un effet de zoom sur les titres h1 et h2 lorsqu'on passe la souris dessus
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
