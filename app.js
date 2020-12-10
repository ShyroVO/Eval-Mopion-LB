// formule de clic droit:
document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

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

// Boucle action sur les cases (bouton):
let casesMorpion = document.getElementsByClassName("caseCheck");
let pionTotals = 9;
let one, two, three, four, five, six, seven, eight, nine;

function caseNameNumber (caseNumber) {
    let caseName = "case";
    let pionX = "X";
    let pionO = "O";

    if (event.button === 0){
        document.getElementById(caseName+caseNumber).innerHTML= pionX;
        aQuiLeTour();
        pionTotals--;
        compteur = 2;
    }
    else if (event.button === 2) {
        document.getElementById(caseName+caseNumber).innerHTML= pionO;
        aQuiLeTour();
        pionTotals--;
        compteur = 1;
    }
}

for (let caseMorpion of casesMorpion) {
    caseMorpion.addEventListener('mouseup', function (){
        let clickL = event.button === 0;
        let clickR = event.button === 2;

        switch (caseMorpion.id) {
            case 'case1':
                caseNameNumber("1");
                if (clickL) {
                    one = true;
                }
                else if (clickR) {
                    one = false;
                }
                checkCase();
                break;

            case 'case2':
                caseNameNumber("2");
                if (clickL) {
                    two = true;
                }
                else if (clickR) {
                    two = false;
                }
                checkCase();
                break;

            case 'case3':
                caseNameNumber("3");
                if (clickL) {
                    three = true;
                }
                else if (clickR) {
                    three = false;
                }
                checkCase();
                break;

            case 'case4':
                caseNameNumber("4");
                if (clickL) {
                    four = true;
                }
                else if (clickR) {
                    four = false;
                }
                checkCase();
                break;

            case 'case5':
                caseNameNumber("5");
                if (clickL) {
                    five = true;
                }
                else if (clickR) {
                    five = false;
                }
                checkCase();
                break;

            case 'case6':
                caseNameNumber("6");
                if (clickL) {
                    six = true;
                }
                else if (clickR) {
                    six = false;
                }
                checkCase();
                break;

            case 'case7':
                caseNameNumber("7");
                if (clickL) {
                    seven = true;
                }
                else if (clickR) {
                    seven = false;
                }
                checkCase();
                break;

            case 'case8':
                caseNameNumber("8");
                if (clickL) {
                    eight = true;
                }
                else if (clickR) {
                    eight = false;
                }
                checkCase();
                break;

            case 'case9':
                caseNameNumber("9");
                if (clickL) {
                    nine = true;
                }
                else if (clickR) {
                    nine = false;
                }
                checkCase();
                break;
        }
    })
}

//Reload page:
document.getElementById('restart').addEventListener('click', function reloadPage(){
    window.location.reload();
})

// Win check:
let playerWin = document.getElementById('playerWin');

function checkCase() {
    if (one === true && two === true && three === true || four === true && five === true && six === true ||
        seven === true && eight === true && nine === true || one === true && four === true && seven === true ||
        two === true && five === true && eight === true || three === true && six === true && nine === true ||
        one === true && five === true && nine === true || three === true && five === true && seven === true) {

        playerWin.innerHTML= "Joueur X a gagner!";
        quiJoue.innerHTML= "Joueur X a gagner!"
        playerWin.style.backgroundColor="lightblue";
        quiJoue.style.backgroundColor="lightblue";
        alert("Joueur X Gagne!");
        pionTotals++;
    }
    else if (one === false && two === false && three === false || four === false && five === false && six === false ||
        seven === false && eight === false && nine === false || one === false && four === false && seven === false ||
        two === false && five === false && eight === false || three === false && six === false && nine === false ||
        one === false && five === false && nine === false || three === false && five === false && seven === false) {

        playerWin.innerHTML= "Joueur O a gagner!";
        quiJoue.innerHTML= "Joueur O a gagner!"
        playerWin.style.backgroundColor="#ee8341";
        quiJoue.style.backgroundColor="#ee8341";
        alert("Joueur O Gagne!");
        pionTotals++;
    }
    if (pionTotals === 0) {
        quiJoue.innerHTML= "Match Nul!"
        playerWin.innerHTML= "Match Nul!";
        playerWin.style.backgroundColor= "red";
        quiJoue.style.backgroundColor= "red";
        alert("Match Nul!");
        window.location.reload();
    }
}
