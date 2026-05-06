// Bouton projet en cours
document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("lienProjet").onclick = function (e) {
        e.preventDefault();
        document.getElementById("messageProjet").textContent =
            "Merci de patienter, projet en cours de construction.";
    };

    // FILTRE PROJETS
    const boutons = document.querySelectorAll('.filter-btn');
    const cartes = document.querySelectorAll('.projet-card');

    boutons.forEach(btn => {
        btn.addEventListener('click', () => {

            const categorie = btn.dataset.filter;

            cartes.forEach(carte => {
                if (categorie === 'all' || carte.dataset.category === categorie) {
                    carte.style.display = 'block';
                } else {
                    carte.style.display = 'none';
                }
            });

        });
    });

});
