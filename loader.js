

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


// Vérifier si le paramètre "redirected" est dans l'URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has('redirected')) {
    window.location.href = './page-accueil/pageaccueil-teastation.html'; // Rediriger immédiatement
} else {
    // Sinon, exécuter le loader et définir le timeout
    setTimeout(function() {
        window.location.href = './page-accueil/pageaccueil-teastation.html?redirected=true'; // Ajouter un paramètre à l'URL
    }, 3000); // Temps d'attente de 3 secondes
}