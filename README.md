# Eval-Mopion-LB

Évaluation : Morpion

A l’aide de HTML, CSS et JavaScript, vous allez créer un jeu du Morpion, pour celles et ceux qui ne savent pas ce que c’est, rendez vous sur ce lien.
Propriétés  générales:

Réaliser une maquette ! ( Balsamiq ou Pencil, … )

L’interface doit être agréable et travaillée

Si vous utilisez des console log pour debug, retirez les avant de fournir votre travail
Propriétés du jeu :
Le joueur 1 ( vous ) joue avec le clic gauche de la souris
Le joueur 2 ( votre voisin par exemple ) joue avec le clic droit de la souris

A rendre :
La maquette de l’application
Le lien vers le repo que vous aurez créé
Le lien vers l’application hébergée ( Github pages )

Bonus :
Il est possible de jouer contre un joueur OU contre l’ordinateur !

Parce que je suis gentil, je vous donne le code pour empêcher le menu contextuel d’apparaître au clic droit de la souris 
document.addEventListener('contextmenu', function (event){
    event.preventDefault();
});

Et parce que c’est bientôt Noël, voici un indice vous permettant de gérer le clic sur les différents boutons :
xxxxxxx.addEventListener('mouseup', function(xxxxxxxxxx) {
    xxxxxx (event.button) {
        case 0:
        case 1:
        case 2:
            break;
    }
});
