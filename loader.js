

gsap.to(".dot" , {
    y : -60,

    stagger : {
        each: 0.2,
        repeat: -1,
        yoyo: true,

    }

})


gsap.to(".shadow" , {
    y : 60,
    stagger : {
        each: 0.2,
        repeat: -1,
        yoyo: true,
    },
    opacity : 0.1,

}) 

console.log("Chargement de la page loader");


setTimeout(function() {

    // Force l'enregistrement de l'historique (Pour le navigateur Google Chrome)
    history.pushState(null, '', window.location.href);

    window.location.href = "./page-accueil/pageaccueil-teastation.html";
}, 3000); 

// Pour éviter le bug de l'animation "Loader" qui s'effectue à l'infini lors du retour en arrière sur le navigateur Safari
window.onpageshow = function(event) {
        // Détecte si la page a été chargée depuis l'historique (bouton retour)
    if (event.persisted) {
        window.location.reload() 
    }
}

// Pour Chrome : gestion du retour en arrière
window.onpopstate = function(event) {
    console.log('Retour en arrière détecté');
    window.location.href = "./page-accueil/pageaccueil-teastation.html"; // Redirige vers la page d'accueil
};