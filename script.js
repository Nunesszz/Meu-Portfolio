document.addEventListener("DOMContentLoaded", () =>{
    // Revela seções principais
    ScrollReveal().reveal('section', {
        delay: 200,
        distance: '40px',
        origin: 'bottom',
        duration: 1000,
        easing: 'ease-in-out',
        reset: true,
        viewFactor: 0.1
    });

    // Revela sua foto com efeito da direita
    ScrollReveal().reveal('.minhafoto', {
        delay: 300,
        distance: '60px',
        origin: 'right',
        duration: 1000,
        easing: 'ease-in-out',
        reset: true,
        viewFactor: 0.2
    });

    // Revela elementos de contato
    ScrollReveal().reveal('.contato-item', {
        delay: 300,
        distance: '30px',
        origin: 'left',
        interval: 100,
        duration: 800,
        viewFactor: 0.3,
        reset: true
    });

    // Revela a barra de redes sociais
    ScrollReveal().reveal('.redes', {
        delay: 400,
        distance: '30px',
        origin: 'bottom',
        duration: 800,
        viewFactor: 0.3,
        reset: true
    });
   
});

//efeito de "Bem-vindo"
window.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById("welcome-overlay");

    // Aguarda 2,5 segundos e esconde o overlay
    setTimeout(() => {
        overlay.classList.add("hidden");
    }, 2500);
});
