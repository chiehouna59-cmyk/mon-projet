document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formulaire");

    form.addEventListener("submit", function (e) {

        const nomInput = document.querySelector("input[name='nom']");
        const emailInput = document.querySelector("input[name='email']");

        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validation du nom
        if (nomInput.value.trim() === "") {
            alert("Veuillez entrer votre nom");
            e.preventDefault();
            return;
        }

        // Validation de l'email
        if (!regexEmail.test(emailInput.value)) {
            alert("Email invalide !");
            e.preventDefault();
            return;
        }

        // OK
        alert("Message envoyé avec succès ✅ !");
    });

    // Bouton projet en cours
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
