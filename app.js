// Anti clic droit:
document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

// Selection joueur X ou O qui commence:
let compteur = Math.floor(Math.random()* 2 + 1);
let quiJoue = document.getElementById('quiJoue');
let buttonColor = document.getElementById('game');

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
    buttonColor.classList.add("colorPlayerX");
}

function elementsJoueurO () {
    aQuiLeTour();
    compteur = 1;
    buttonColor.classList.add("colorPlayerO");
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
                    checkCase();
                }
                else {
                    document.getElementById('case1').innerHTML= pionO;
                    elementsJoueurO()
                    one = false;
                    checkCase();
                }
                break;

            case 'case2':
                if (compteur === 1) {
                    document.getElementById('case2').innerHTML= pionX;
                    elementsJoueurX()
                    two = true;
                    checkCase();
                }
                else {
                    document.getElementById('case2').innerHTML= pionO;
                    elementsJoueurO()
                    two = false;
                    checkCase();
                }
                break;

            case 'case3':
                if (compteur === 1) {
                    document.getElementById('case3').innerHTML= pionX;
                    elementsJoueurX()
                    three = true;
                    checkCase();
                }
                else {
                    document.getElementById('case3').innerHTML= pionO;
                    elementsJoueurO()
                    three = false;
                    checkCase();
                }
                break;

            case 'case4':
                if (compteur === 1) {
                    document.getElementById('case4').innerHTML= pionX;
                    elementsJoueurX()
                    four = true;
                    checkCase();
                }
                else {
                    document.getElementById('case4').innerHTML= pionO;
                    elementsJoueurO()
                    four = false;
                    checkCase();
                }
                break;

            case 'case5':
                if (compteur === 1) {
                    document.getElementById('case5').innerHTML= pionX;
                    elementsJoueurX()
                    five = true;
                    checkCase();
                }
                else {
                    document.getElementById('case5').innerHTML= pionO;
                    elementsJoueurO()
                    five = false;
                    checkCase();
                }
                break;

            case 'case6':
                if (compteur === 1) {
                    document.getElementById('case6').innerHTML= pionX;
                    elementsJoueurX()
                    six = true;
                    checkCase();
                }
                else {
                    document.getElementById('case6').innerHTML= pionO;
                    elementsJoueurO()
                    six = false;
                    checkCase();
                }
                break;

            case 'case7':
                if (compteur === 1) {
                    document.getElementById('case7').innerHTML= pionX;
                    elementsJoueurX()
                    seven = true;
                    checkCase();
                }
                else {
                    document.getElementById('case7').innerHTML= pionO;
                    elementsJoueurO()
                    seven = false;
                    checkCase();
                }
                break;

            case 'case8':
                if (compteur === 1) {
                    document.getElementById('case8').innerHTML= pionX;
                    elementsJoueurX()
                    eight = true;
                    checkCase();
                }
                else {
                    document.getElementById('case8').innerHTML= pionO;
                    elementsJoueurO()
                    eight = false;
                    checkCase();
                }
                break;

            case 'case9':
                if (compteur === 1) {
                    document.getElementById('case9').innerHTML= pionX;
                    elementsJoueurX()
                    nine = true;
                    checkCase();
                }
                else {
                    document.getElementById('case9').innerHTML= pionO;
                    elementsJoueurO()
                    nine = false;
                    checkCase();
                }
                break;

            case 'restart':
                window.location.reload();
                break;

        }
    })
}

// Victoire de qui:
function checkCase() {
    let playerX = document.getElementById("playerX");
    let playerO = document.getElementById('playerO');
    let playerXpoint = 1;
    let playerOpoint = 1;

    if (one === true && two === true && three === true || four === true && five === true && six === true ||
        seven === true && eight === true && nine === true || one === true && four === true && seven === true ||
        two === true && five === true && eight === true || three === true && six === true && nine === true ||
        one === true && five === true && nine === true || three === true && five === true && seven === true) {

        playerX.innerHTML= playerXpoint + "pts";
        playerXpoint++;
        alert("Joueur X Gagne!");
        window.location.reload();
    }

    else if (one === false && two === false && three === false || four === false && five === false && six === false ||
        seven === false && eight === false && nine === false || one === false && four === false && seven === false ||
        two === false && five === false && eight === false || three === false && six === false && nine === false ||
        one === false && five === false && nine === false || three === false && five === false && seven === false) {

        playerO.innerHTML= playerOpoint + "pts";
        playerOpoint++;
        alert("Joueur O Gagne!");
        window.location.reload();
    }

}
