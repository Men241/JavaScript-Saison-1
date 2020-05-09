// Enoncé

alert('Episode 10\n' +
    'Ecrire un programme qui demande le montant d’une facture ' +
    'et affiche le total à payer après avoir appliqué une remise ' +
    'de 10% si le montant de la facture dépasse 40.000 F.\t');

var montant = parseInt(prompt("Veuillez rentrer votre montant :"));

if (montant > 40000){
    montant = montant * 10 / 100;
    alert("Bravo! Vous bénéficiez d\'une remise de 10%. Le montant total est de : " + montant);
}else{
    alert("désolé, vous ne bénéficiez pas d\'une remise. Le montant total est de : " + montant);
}