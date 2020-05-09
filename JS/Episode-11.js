// Enoncé

alert('Episode 11\n' +
    'Ecrire un programme qui demande un nombre à l’utilisateur et affiche ' +
    'la table de multiplication de ce nombre jusqu’à 10.\n');

var a = parseInt(prompt("Rentré un nombre s\'il vous plait."));
var b ;

alert("Multiplication par " + a);

for (var x = 1; x <=10; x++){
    b = a * x;
    document.write(" " +x+ " * " +a+ " = ", + b + "<br>");
    console.log(" " +x+ " * " +a+ " = ", + b);
    alert(" " +x+ " * " +a+ " = ", + b);
}


