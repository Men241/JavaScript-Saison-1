// Ennoncé

alert("Episode 7\n" +
    "Ecrire un programme qui demande l'âge de l’utilisateur et affiche : Vous êtes mineur ou Vous êtes majeur.\n" +
    "NB : Est considérée majeure, une personne ayant au moins 18 ans.");

var age = parseInt(prompt("Quel âge avez-vous?"));

if (age >= 18){
    alert(" Vous êtes majeur ");
}else{
    alert("Vous êtes mineur");
}
