// Enoncé

alert("Episode 8\n" +
    "Ecrire un programme qui demande le nom de l’utilisateur et son sexe et affiche Bonjour monsieur " +
    "<nom> ou Bonjour madame <nom>. Où <nom> est le nom saisi par l’utilisateur.");

var nom = prompt('Quel est votre nom d\'utilisateur?');
var sexe = prompt('De quel sexe êtes vous?');

if(sexe === 'masculin'){
    alert("Bonjour monsieur " + nom);
}else{
    alert("Bonjour madame " + nom);
}