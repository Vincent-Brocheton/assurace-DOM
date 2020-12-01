let button = document.getElementById("calcul");

button.addEventListener("click", (e) => {

    e.preventDefault();

    let colorRes = document.getElementById("colorRes");
    let result = document.getElementById("result");
    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;
    let age_assure = Number(document.getElementById("age").value);
    let annee_permis = Number(document.getElementById("permis").value);
    let nb_accident = Number(document.getElementById("accident").value);
    let temps_assurance = Number(document.getElementById("yearsAssur").value);

    let compteur = 0;

    if (age_assure >= 25) {
        compteur++;
    }
    if (annee_permis > 2) {
        compteur++;
    }

    compteur = compteur - nb_accident;

    if ((compteur === 0 || compteur === 1 || compteur === 2) && temps_assurance > 5) {
        compteur++;
    }

    if (compteur === 3) {
        colorRes.style.backgroundColor = "blue";
        result.innerHTML = firstName + " " + lastName + " vous pouvez accéder au tarif bleu";
    } else if (compteur === 2) {
        colorRes.style.backgroundColor = "green";
        result.innerHTML = firstName + " " + lastName + " vous pouvez accéder au tarif vert";
    } else if (compteur === 1) {
        colorRes.style.backgroundColor = "orange";
        result.innerHTML = firstName + " " + lastName + " vous pouvez accéder au tarif orange";
    } else if (compteur === 0) {
        colorRes.style.backgroundColor = "red";
        result.innerHTML = firstName + " " + lastName + " vous pouvez accéder au tarif rouge";
    } else if (compteur < 0) {
        result.innerHTML = firstName + " " + lastName + " vous ne pouvez pas être assuré chez nous";
    }

})