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

for (let caseMorpion of casesMorpion) {
    caseMorpion.addEventListener('click', function (){

        switch (caseMorpion.id) {
            case 'case1':
                if (compteur === 1) {
                    document.getElementById('case1').innerHTML= pionX;
                    elementsJoueurX()
                }
                else {
                    document.getElementById('case1').innerHTML= pionO;
                    elementsJoueurO()
                }
                break;

            case 'case2':
                if (compteur === 1) {
                    document.getElementById('case2').innerHTML= pionX;
                    elementsJoueurX()
                }
                else {
                    document.getElementById('case2').innerHTML= pionO;
                    elementsJoueurO()
                }
                break;

            case 'case3':
                if (compteur === 1) {
                    document.getElementById('case3').innerHTML= pionX;
                    elementsJoueurX()
                }
                else {
                    document.getElementById('case3').innerHTML= pionO;
                    elementsJoueurO()
                }
                break;

            case 'case4':
                if (compteur === 1) {
                    document.getElementById('case4').innerHTML= pionX;
                    elementsJoueurX()
                }
                else {
                    document.getElementById('case4').innerHTML= pionO;
                    elementsJoueurO()
                }
                break;

            case 'case5':
                if (compteur === 1) {
                    document.getElementById('case5').innerHTML= pionX;
                    elementsJoueurX()
                }
                else {
                    document.getElementById('case5').innerHTML= pionO;
                    elementsJoueurO()
                }
                break;

            case 'case6':
                if (compteur === 1) {
                    document.getElementById('case6').innerHTML= pionX;
                    elementsJoueurX()
                }
                else {
                    document.getElementById('case6').innerHTML= pionO;
                    elementsJoueurO()
                }
                break;

            case 'case7':
                if (compteur === 1) {
                    document.getElementById('case7').innerHTML= pionX;
                    elementsJoueurX()
                }
                else {
                    document.getElementById('case7').innerHTML= pionO;
                    elementsJoueurO()
                }
                break;

            case 'case8':
                if (compteur === 1) {
                    document.getElementById('case8').innerHTML= pionX;
                    elementsJoueurX()
                }
                else {
                    document.getElementById('case8').innerHTML= pionO;
                    elementsJoueurO()
                }
                break;

            case 'case9':
                if (compteur === 1) {
                    document.getElementById('case9').innerHTML= pionX;
                    elementsJoueurX()
                }
                else {
                    document.getElementById('case9').innerHTML= pionO;
                    elementsJoueurO()
                }
                break;

            case 'restart':
                window.location.reload();
                break;

        }

    })
}

// Boucle des points:
let caseCheck = document.get