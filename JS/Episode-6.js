//Enoncé

alert('Episode 6\n' +
    'Ecrire un programme qui demande à l’utilisateur trois nombres et affiche la moyenne de ces nombres en alerte.');

//Les variables

var nbr1 = parseInt(prompt('Veuillez rentrer le premier nombre'));
var nbr2 = parseInt(prompt('Veuillez rentrer le second nombre'));
var nbr3 = parseInt(prompt('Veuillez rentrer le dernier nombre'));

var somme = nbr1 + nbr2 + nbr3;
var moyenne = somme/3;

alert('La moyenne de ces chiffres est de : '+ moyenne + '.');