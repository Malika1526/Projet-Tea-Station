

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
 // Vérifier si la redirection a déjà été effectuée
 if (sessionStorage.getItem('redirected')) {
    window.location.href = 'pageaccueil-teastation.html'; // Rediriger immédiatement
} else {
    // Sinon, exécuter le loader et définir le timeout
    setTimeout(function() {
        // Marquer la redirection comme effectuée
        sessionStorage.setItem('redirected', true);
        window.location.href = 'pageaccueil-teastation.html';
    }, 3000); // Temps d'attente de 3 secondes
}