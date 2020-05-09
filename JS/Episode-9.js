// Enoncé

alert('Episode 9\n' +
    'Ecrire un programme qui demande la moyenne d’un élève et affiche sa mention (Passable, Assez-Bien, Bien, Très bien, Excellent).\n' +
    'NB : La moyenne varie entre 0 et 20.');

var moyenne = parseInt(prompt('Veuillez finir votre moyenne : '));

if (moyenne < 10){
    alert('Peu mieux faire');
}else{
    if (moyenne == 10 || moyenne == 11 ) {
        alert('Passable');
    }
    if (moyenne == 12 || moyenne == 13 ){
        alert('Assez bien');
    }
    if (moyenne == 14 || moyenne == 15 ){
        alert('Bien');
    }
    if (moyenne == 16 || moyenne == 17 ){
        alert('Très bien');
    }
    if (moyenne == 18 || moyenne == 19 || moyenne == 20){
        alert('Excellent');
    }
}


