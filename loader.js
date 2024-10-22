

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

    // Ajoute un état à l'historique avant la redirection
    history.pushState({page: 1}, '', window.location.href);

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

window.addEventListener('popstate', function(event) {
    console.log('Retour en arrière détecté');
    // Redirection forcée à chaque retour en arrière
    window.location.href = "./page-accueil/pageaccueil-teastation.html";
});