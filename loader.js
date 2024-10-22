

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
    history.replaceState(null, null, 'pageaccueil-teastation.html'); // Remplacer l'historique pour éviter le retour sur le loader

}, 3000); 
