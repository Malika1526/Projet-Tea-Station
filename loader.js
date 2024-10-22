

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
    //history.replaceState(null, null, './page-accueil/pageaccueil-teastation.html'); 
    window.location.href = "./page-accueil/pageaccueil-teastation.html";
}, 3000); 

window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload() 
    }
}