// Enoncé

alert("Episode 13\n" +
    "Ecrire un programme qui demande sans cesse à l'utilisateur de renseigner la bonne réponse d’une opération " +
    "(ex: Combien font 5+1 ?) jusqu’à ce qu’il renseigne la bonne réponse.\n");


alert(" Combien font : 50 + 140?");

solution = parseInt(prompt('Inscrivez la réponse : '));

var reponse = 50 + 140;

do{
    solution = prompt("Réponse incorrect, essayez encore.");
}
while(parseInt(solution)!=reponse);

alert( "Bonnne réponse");








