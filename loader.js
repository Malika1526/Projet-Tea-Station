

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


// Simulation d'un faux temps de chargement de 3 secondes
setTimeout(function() {

    window.location.href = "./page-accueil/pageaccueil-teastation.html";
}, 3000); 

// Pour éviter le bug de l'animation "Loader" qui s'effectue à l'infini lors du retour en arrière sur le navigateur Safari
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
}