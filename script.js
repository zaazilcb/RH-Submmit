  document.addEventListener("DOMContentLoaded", function () {
    const titulos = document.querySelectorAll(".titulo");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    titulos.forEach(titulo => observer.observe(titulo));
});
