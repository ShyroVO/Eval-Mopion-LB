// Anti clic droit:
/*
document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});
 */
// Selection joueur X ou O qui commence:
let compteur = Math.floor(Math.random()* 2 + 1);
let quiJoue = document.getElementById('quiJoue');

if (compteur === 1) {
    quiJoue.innerHTML = "Joueur X qui commence!";
    quiJoue.style.backgroundColor= "lightblue";
}
else {
    quiJoue.innerHTML = "Joueur O qui commence!";
    quiJoue.style.backgroundColor= "#ee8341";
}

// Changement de tour:
function aQuiLeTour () {
    if (compteur === 2) {
        quiJoue.innerHTML = "Joueur X !";
        quiJoue.style.backgroundColor= "lightblue";
    }
    else {
        quiJoue.innerHTML = "Joueur O !";
        quiJoue.style.backgroundColor= "#ee8341";
    }
}

function elementsJoueurX () {
    aQuiLeTour();
    compteur = 2;
}

function elementsJoueurO () {
    aQuiLeTour();
    compteur = 1;
}

// Boucle action sur les cases (bouton):
let casesMorpion = document.getElementsByTagName('button');
let pionX = "X";
let pionO = "O";

let one, two, three, four, five, six, seven, eight, nine;

for (let caseMorpion of casesMorpion) {
    caseMorpion.addEventListener('click', function (){

        switch (caseMorpion.id) {
            case 'case1':
                if (compteur === 1) {
                    document.getElementById('case1').innerHTML= pionX;
                    elementsJoueurX()
                    one = true;
                }
                else {
                    document.getElementById('case1').innerHTML= pionO;
                    elementsJoueurO()
                    one = false;
                }
                break;

            case 'case2':
                if (compteur === 1) {
                    document.getElementById('case2').innerHTML= pionX;
                    elementsJoueurX()
                    two = true;
                }
                else {
                    document.getElementById('case2').innerHTML= pionO;
                    elementsJoueurO()
                    two = false;
                }
                break;

            case 'case3':
                if (compteur === 1) {
                    document.getElementById('case3').innerHTML= pionX;
                    elementsJoueurX()
                    three = true;
                }
                else {
                    document.getElementById('case3').innerHTML= pionO;
                    elementsJoueurO()
                    three = false;
                }
                break;

            case 'case4':
                if (compteur === 1) {
                    document.getElementById('case4').innerHTML= pionX;
                    elementsJoueurX()
                    four = true;
                }
                else {
                    document.getElementById('case4').innerHTML= pionO;
                    elementsJoueurO()
                    four = false;
                }
                break;

            case 'case5':
                if (compteur === 1) {
                    document.getElementById('case5').innerHTML= pionX;
                    elementsJoueurX()
                    five = true;
                }
                else {
                    document.getElementById('case5').innerHTML= pionO;
                    elementsJoueurO()
                    five = false;
                }
                break;

            case 'case6':
                if (compteur === 1) {
                    document.getElementById('case6').innerHTML= pionX;
                    elementsJoueurX()
                    six = true;
                }
                else {
                    document.getElementById('case6').innerHTML= pionO;
                    elementsJoueurO()
                    six = false;
                }
                break;

            case 'case7':
                if (compteur === 1) {
                    document.getElementById('case7').innerHTML= pionX;
                    elementsJoueurX()
                    seven = true;
                }
                else {
                    document.getElementById('case7').innerHTML= pionO;
                    elementsJoueurO()
                    seven = false;
                }
                break;

            case 'case8':
                if (compteur === 1) {
                    document.getElementById('case8').innerHTML= pionX;
                    elementsJoueurX()
                    eight = true;
                }
                else {
                    document.getElementById('case8').innerHTML= pionO;
                    elementsJoueurO()
                    eight = false;
                }
                break;

            case 'case9':
                if (compteur === 1) {
                    document.getElementById('case9').innerHTML= pionX;
                    elementsJoueurX()
                    nine = true;
                }
                else {
                    document.getElementById('case9').innerHTML= pionO;
                    elementsJoueurO()
                    nine = false;
                }
                break;

            case 'restart':
                window.location.reload();
                break;

        }
    })
}
