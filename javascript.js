var random = ['harrypotter', 'poudlard', 'voldemort', 'developpement', 'lensois', 'ordinateur', 'macbook',];
var mathrandom = random[Math.floor(Math.random()*random.length)];
var motcorrect = 0;
var vie = 0;
var chance = 10;
var lettre;
var tableau = [];

// Reset l'input

function reset () {

    document.getElementById('texte').value = '';
    document.getElementById('texte').focus();
}

// Contenu du Pendu

document.getElementById('envoyer').addEventListener("click",

    function  () {

        lettre = document.getElementById('texte').value;

        if (!antichit()) {

            tableau.push(lettre);
            console.log(tableau);


        for (var i = 0 ; i < mathrandom.length ; i++) {

            console.log(mathrandom);


            if ( lettre == mathrandom[i] ){
                motcorrect ++;
                document.getElementById("lettre" + i ).innerHTML = lettre;
                document.getElementById("lettre" + i ).style.color = 'red';

            }}

        if ( motcorrect === mathrandom.length) {
            document.getElementById('indication').innerHTML = "Félicitations !!!!";
            document.getElementById('indication').style.color = 'green';
            document.getElementById('image2').style.height = '200px';
        }

        else {
            document.getElementById('indication').innerHTML = "  ";
        }

     if (mathrandom.indexOf(lettre) === -1) {

         document.getElementById('indication').innerHTML = "la lettre n'est pas dans le mot";
         document.getElementById('indication').style.color = 'red';
         vie++;
         console.log(vie);
     }

     document.getElementById('chance').innerHTML = 'Vous avez utilisé ' + vie + ' ' + 'sur' + ' ' +  chance + '!';
     document.getElementById('utiliser').innerHTML += lettre + ' / ' ;


     if ( vie >= chance ) {
         document.getElementById('indication').innerHTML = "Vous avez Perdu !!!! Le Mot à trouver était : " + ' ' + mathrandom;
         document.getElementById('indication').style.color = 'red';
         document.getElementById('envoyer').style.display = 'none';
         document.getElementById('image').style.height = '200px';
     }

            reset();
        }});

// Mot caché

for (var i = 0; i < mathrandom.length; i++) {
    document.getElementById('lettre' + i).innerHTML = "_";
}

// Reset le Mot

document.getElementById('reset').addEventListener("click",

    function () {

        document.location.reload(true)
});

function antichit() {

    for ( var t = 0; t < tableau.length; t++) {

        if (lettre == tableau[t]) {

            return true;
        }
    }
}

// Mode de Difficulté

document.getElementById('facile').addEventListener("click",

    function () {

    chance;
    document.getElementById('chance').innerHTML = 'Vous avez utilisé ' + vie  + ' vie sur 10!';
        document.getElementById('difficile').style.opacity = '0';
        document.getElementById('normal').style.opacity = '0';
        document.getElementById('facile').style.backgroundColor = 'red';
        document.getElementById('facile').style.color = 'white';
    });


document.getElementById('normal').addEventListener("click",

    function () {

    chance = 5;
        document.getElementById('chance').innerHTML = 'Vous avez utilisé ' + vie  + ' vie sur 5!';
        document.getElementById('facile').style.opacity = '0';
        document.getElementById('difficile').style.opacity = '0';
        document.getElementById('normal').style.backgroundColor = 'red';
        document.getElementById('normal').style.color = 'white';
});

document.getElementById('difficile').addEventListener("click",

    function () {

    chance = 3;
    document.getElementById('chance').innerHTML = 'Vous avez utilisé ' + vie  + ' vie sur 3!';
    document.getElementById('facile').style.opacity = '0';
    document.getElementById('normal').style.opacity = '0';
    document.getElementById('difficile').style.backgroundColor = 'red';
    document.getElementById('difficile').style.color = 'white';

});