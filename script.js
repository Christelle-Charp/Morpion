/*
Morpions
Objectif :
Réaliser un jeu de morpion en HTML / CSS /JAVASCRIPT. Il faut appuyer sur un bouton pour lancer le jeu , 
chaque joueur joue a tour de rôle et pose un symbole sur le plateau de jeu de 9 cases. 

Vous connaissez les règles : le joueur qui gagne est celui qui arrive à aligner 3 symboles identiques. 

Attention : il est interdit de récupérer un code tout prêt sur le net ou de demander a une IA de générer le code
⇒ Ce qui m’intéresse c’est votre démarche, votre méthodo et votre raisonnement

Méthodologie :
Réalisez votre structure HTML
Rendez le plateau de jeu “joli” et trouvez comment vous allez afficher vos symboles croix et rond (ou autres !)
Ensuite écrivez le pseudo code (en français) du déroulé du scenario du jeu. Tout doit être décrit avant de se lancer dans le code JS.
Lister les fonctions que vous imaginez avoir besoin
Les documenter tout de suite avant d’écrire leur code interne
Enfin passez au code javascript !
Testez, débuggez , jouez !

*/
/*
let partie = ["", "", "", "", "", "", "", "", ""]

let gagnant = [
    ["", "", "", "", "", "", "", "", ""]
]
*/



/* Tableau des résultats gagnants avec fonction checkWin

let gagnant1x = [
    ["x", "x", "x"],
    ["", "", ""],
    ["", "", ""]
]
let gagnant2x = [
    ["", "", ""],
    ["x", "x", "x"],
    ["", "", ""]
]

let gagnant3x = [
    ["", "", ""],
    ["", "", ""],
    ["x", "x", "x"]
]

let gagnant4x = [
    ["x", "", ""],
    ["x", "", ""],
    ["x", "", ""]
]

let gagnant5x = [
    ["", "x", ""],
    ["", "x", ""],
    ["", "x", ""]
]

let gagnant6x = [
    ["", "", "x"],
    ["", "", "x"],
    ["", "", "x"]
]

let gagnant7x = [
    ["x", "", ""],
    ["", "x", ""],
    ["", "", "x"]
]

let gagnant8x = [
    ["", "", "x"],
    ["", "x", ""],
    ["x", "", ""]
]

let gagnant1O = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]
let gagnant2O = [
    ["", "", ""],
    ["O", "O", "O"],
    ["", "", ""]
]

let gagnant3O = [
    ["", "", ""],
    ["", "", ""],
    ["O", "O", "O"]
]

let gagnant4O = [
    ["O", "", ""],
    ["O", "", ""],
    ["O", "", ""]
]

let gagnant5O = [
    ["", "O", ""],
    ["", "O", ""],
    ["", "O", ""]
]

let gagnant6O = [
    ["", "", "O"],
    ["", "", "O"],
    ["", "", "O"]
]

let gagnant7O = [
    ["O", "", ""],
    ["", "O", ""],
    ["", "", "O"]
]

let gagnant8O = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]
*/

/* variable pour remplir le tableau partie
let p1 = partie[0][0];
let p2 = partie[0][1];
let p3 = partie[0][2];
let p4 = partie[1][0];
let p5 = partie[1][1];
let p6 = partie[1][2];
let p7 = partie[2][0];
let p8 = partie[2][1];
let p9 = partie[2][2];
*/



// Tableau vide au départ qui se rempli à chaque coup avec les choix de X
let partieX = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

// Tableau vide au départ qui se rempli à chaque coup avec les choix de O
let partieO = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]

//Variable pour ne prendre en compte que les clic dans la grille
let grilleMorpion = document.getElementById("grilleMorpion");


let demarrer = document.getElementById("demarrer");

//Variables pour identifier chaque case de la grille
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let c7 = document.getElementById("c7");
let c8 = document.getElementById("c8");
let c9 = document.getElementById("c9");


// compteur du nBre de coup qui démarre à 0. Quand le joueur 1 joue,
//  le nombre sera impair et quand le joueur 2 joue, le nombre sera paire.
let numeroCoup = 1;
function compterClicks () {
    numeroCoup = numeroCoup + 1;
    console.log("Nbre de click " + numeroCoup)
}
grilleMorpion.addEventListener("click", compterClicks) 

function checkWinX(){
    if(partieX[0][0] === "X" && partieX[0][1] === "X" && partieX[0][2] === "X") { 
        return true;
        alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer...");
        } else if (partieX[1][0] === "X" && partieX[1][1] === "X" && partieX[1][2] === "X") { 
            return true;
            alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer...");
            } else if (partieX[2][0] === "X" && partieX[2][1] === "X" && partieX[2][2] === "X") { 
                return true;
                alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer...");
                } else if (partieX[0][0] === "X" && partieX[1][1] === "X" && partieX[2][2] === "X") { 
                    return true;
                    alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer...");
                    } else if (partieX[0][0] === "X" && partieX[1][1] === "X" && partieX[2][2] === "X") { 
                        return true;
                        alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer...");
                        } else if (partieX[0][2] === "X" && partieX[1][1] === "X" && partieX[2][0] === "X") { 
                            return true;
                            alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer...");
                        }
};

function checkWinO(){
    if(partieO[0][0] === "O" && partieO[0][1] === "O" && partieO[0][2] === "O") { 
        return true;
        alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquez sur le bouton Démarrer...");
        } else if (partieO[1][0] === "O" && partieO[1][1] === "O" && partieO[1][2] === "O") { 
            return true;
            alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquez sur le bouton Démarrer...");
            } else if (partieO[2][0] === "O" && partieO[2][1] === "O" && partieO[2][2] === "O") { 
                return true;
                alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquez sur le bouton Démarrer...");
                } else if (partieO[0][0] === "O" && partieO[1][1] === "O" && partieO[2][2] === "O") { 
                    return true;
                    alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquez sur le bouton Démarrer...");
                    } else if (partieO[0][0] === "O" && partieO[1][1] === "O" && partieO[2][2] === "O") { 
                        return true;
                        alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquez sur le bouton Démarrer...");
                        } else if (partieO[0][2] === "O" && partieO[1][1] === "O" && partieO[2][0] === "O") { 
                            return true;
                            alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquez sur le bouton Démarrer...");
                        }
};

function resetX() {
    partieX[0][0] = "";
    c1.innerText = "";
    partieX[0][1] = "";
    c2.innerText = "";
    partieX[0][2] = "";
    c3.innerText = "";
    partieX[1][0] = "";
    c4.innerText = "";
    partieX[1][1] = "";
    c5.innerText = "";
    partieX[1][2] = "";
    c6.innerText = "";
    partieX[2][0] = "";
    c7.innerText = "";
    partieX[2][1] = "";
    c8.innerText = "";
    partieX[2][2] = "";
    c9.innerText = "";
}

function resetO() {
    partieO[0][0] = "";
    c1.innerText = "";
    partieO[0][1] = "";
    c2.innerText = "";
    partieO[0][2] = "";
    c3.innerText = "";
    partieO[1][0] = "";
    c4.innerText = "";
    partieO[1][1] = "";
    c5.innerText = "";
    partieO[1][2] = "";
    c6.innerText = "";
    partieO[2][0] = "";
    c7.innerText = "";
    partieO[2][1] = "";
    c8.innerText = "";
    partieO[2][2] = "";
    c9.innerText = "";
}



demarrer.addEventListener("click", function() {
    grilleMorpion.classList.remove("hidden");
    resetO();
    resetX();
    numeroCoup = 1
    alert("Bienvenue dans le jeu du Morpion!");
    alert("Voici les règles. Pour gagner, il faut alligner 3 symboles identiques, soit horizontalement, soit verticalement, soit en diagonale.");
    alert("Le joueur 1 commence - Il a les croix.")
})

// Trouver une fonction pour dire qu'au bout de 9 coups, c'est match nul - A revoir car natch nul au 9eme coup meme si c'est gagné

// Trouver comment empecher de cliquer une fois qu'il y a un gagnant - ok

//Mettre un SetTimeOut pour décaler l'affiche de l'alert - ok

c1.addEventListener("click", function() {
    if (numeroCoup % 2 != 0) {
        partieX[0][0] = "X";
        c1.innerText = "X";
        console.log(partieX);
        if (numeroCoup < 9){
            if (!checkWinX()) {
                setTimeout(() => alert("C'est au tour du joueur 2 - Il a les O"),500);
            } else {
                setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
                setTimeout(() => alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
            };
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Match Nul. Cliquez sur Démarrer pour recommencer..."),500);
        };
        
    } else {
        partieO[0][0] = "O";
        c1.innerText = "O";
        console.log(partieO);
        if (!checkWinO()) {
            setTimeout(() => alert("C'est au tour du joueur 1 - Il a les X"),500);
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
        };
        //checkWinO();
    };

    
});

c2.addEventListener("click", function() {
    if (numeroCoup % 2 != 0) {
        partieX[0][1] = "X";
        c2.innerText = "X";
        console.log(partieX);
        if (numeroCoup < 9){
            if (!checkWinX()) {
                setTimeout(() => alert("C'est au tour du joueur 2 - Il a les O"),500);
            } else {
                setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
                setTimeout(() => alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
            };
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Match Nul. Cliquez sur Démarrer pour recommencer..."),500);
        };

    } else {
        partieO[0][1] = "O";
        c2.innerText = "O";
        console.log(partieO);
        if (!checkWinO()) {
            setTimeout(() => alert("C'est au tour du joueur 1 - Il a les X"),500);
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
        };
    };
    

});

c3.addEventListener("click", function() {
    if (numeroCoup % 2 != 0) {
        partieX[0][2] = "X";
        c3.innerText = "X";
        console.log(partieX);
        if (numeroCoup < 9){
            if (!checkWinX()) {
                setTimeout(() => alert("C'est au tour du joueur 2 - Il a les O"),500);
            } else {
                setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
                setTimeout(() => alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
            };
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Match Nul. Cliquez sur Démarrer pour recommencer..."),500);
        };

    } else {
        partieO[0][2] = "O";
        c3.innerText = "O";
        console.log(partieO);
        if (!checkWinO()) {
            setTimeout(() => alert("C'est au tour du joueur 1 - Il a les X"),500);
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
        };
    };
    

});

c4.addEventListener("click", function() {
    if (numeroCoup % 2 != 0) {
        partieX[1][0] = "X";
        c4.innerText = "X";
        console.log(partieX);
        if (numeroCoup < 9){
            if (!checkWinX()) {
                setTimeout(() => alert("C'est au tour du joueur 2 - Il a les O"),500);
            } else {
                setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
                setTimeout(() => alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
            };
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Match Nul. Cliquez sur Démarrer pour recommencer..."),500);
        };
    } else {
        partieO[1][0] = "O";
        c4.innerText = "O";
        console.log(partieO);
        if (!checkWinO()) {
            setTimeout(() => alert("C'est au tour du joueur 1 - Il a les X"),500);
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
        };
    };
    

});

c5.addEventListener("click", function() {
    if (numeroCoup % 2 != 0) {
        partieX[1][1] = "X";
        c5.innerText = "X";
        console.log(partieX);
        if (numeroCoup < 9){
            if (!checkWinX()) {
                setTimeout(() => alert("C'est au tour du joueur 2 - Il a les O"),500);
            } else {
                setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
                setTimeout(() => alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
            };
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Match Nul. Cliquez sur Démarrer pour recommencer..."),500);
        };
    } else {
        partieO[1][1] = "O";
        c5.innerText = "O";
        console.log(partieO);
        if (!checkWinO()) {
            setTimeout(() => alert("C'est au tour du joueur 1 - Il a les X"),500);
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
        };
    };
    

});

c6.addEventListener("click", function() {
    if (numeroCoup % 2 != 0) {
        partieX[1][2] = "X";
        c6.innerText = "X";
        console.log(partieX);
        if (numeroCoup < 9){
            if (!checkWinX()) {
                setTimeout(() => alert("C'est au tour du joueur 2 - Il a les O"),500);
            } else {
                setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
                setTimeout(() => alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
            };
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Match Nul. Cliquez sur Démarrer pour recommencer..."),500);
        };
    } else {
        partieO[1][2] = "O";
        c6.innerText = "O";
        console.log(partieO);
        if (!checkWinO()) {
            setTimeout(() => alert("C'est au tour du joueur 1 - Il a les X"),500);
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
        };
    };
    

});

c7.addEventListener("click", function() {
    if (numeroCoup % 2 != 0) {
        partieX[2][0] = "X";
        c7.innerText = "X";
        console.log(partieX);
        if (numeroCoup < 9){
            if (!checkWinX()) {
                setTimeout(() => alert("C'est au tour du joueur 2 - Il a les O"),500);
            } else {
                setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
                setTimeout(() => alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
            };
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Match Nul. Cliquez sur Démarrer pour recommencer..."),500);
        };
    } else {
        partieO[2][0] = "O";
        c7.innerText = "O";
        console.log(partieO);
        if (!checkWinO()) {
            setTimeout(() => alert("C'est au tour du joueur 1 - Il a les X"),500);
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
        };
    };
    

});

c8.addEventListener("click", function() {
    if (numeroCoup % 2 != 0) {
        partieX[2][1] = "X";
        c8.innerText = "X";
        console.log(partieX);
        if (numeroCoup < 9){
            if (!checkWinX()) {
                setTimeout(() => alert("C'est au tour du joueur 2 - Il a les O"),500);
            } else {
                setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
                setTimeout(() => alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
            };
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Match Nul. Cliquez sur Démarrer pour recommencer..."),500);
        };
    } else {
        partieO[2][1] = "O";
        c8.innerText = "O";
        console.log(partieO);
        if (!checkWinO()) {
            setTimeout(() => alert("C'est au tour du joueur 1 - Il a les X"),500);
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
        };
    };


});

c9.addEventListener("click", function() {
    if (numeroCoup % 2 != 0) {
        partieX[2][2] = "X";
        c9.innerText = "X";
        console.log(partieX);
        if (numeroCoup < 9){
            if (!checkWinX()) {
                setTimeout(() => alert("C'est au tour du joueur 2 - Il a les O"),500);
            } else {
                setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
                setTimeout(() => alert("Le joueur 1 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
            };
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Match Nul. Cliquez sur Démarrer pour recommencer..."),500);
        };
    } else {
        partieO[2][2] = "O";
        c9.innerText = "O";
        console.log(partieO);
        if (!checkWinO()) {
            setTimeout(() => alert("C'est au tour du joueur 1 - Il a les X"),500);
        } else {
            setTimeout(() => grilleMorpion.classList.add("hidden"),1000);
            setTimeout(() => alert("Le joueur 2 a gagné! - Pour recommencer une partie, cliquer sur le bouton Démarrer..."),500);
        };
    };


});



