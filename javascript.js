var random = ['harrypotter', 'poudlard', 'voldemort', 'developpement', 'lensois', 'ordinateur', 'macbook',];
var mathrandom = random[Math.floor(Math.random()*random.length)];
var motcorrect = 0;
var vie = 0;

// Reset l'input

function reset () {

    document.getElementById('texte').value = '';
    document.getElementById('texte').focus();
}

// Contenu du Pendu

document.getElementById('envoyer').addEventListener("click",

    function niveaux () {

        for (var i = 0 ; i < mathrandom.length ; i++) {

            var lettre = document.getElementById('texte').value;

            console.log(mathrandom);
            console.log(lettre);

            if ( lettre == mathrandom[i] ){

            if ( document.getElementById('lettre' + i).innerHTML = '_') {
                motcorrect ++;
                document.getElementById("lettre" + i ).innerHTML = lettre;
                document.getElementById("lettre" + i ).style.color = 'red';

            }}}

        if ( motcorrect === mathrandom.length) {
            document.getElementById('indication').innerHTML = "Félicitations !!!!";
            document.getElementById('indication').style.color = 'green';
            document.getElementById('image2').style.height = '300px';
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

     document.getElementById('chance').innerHTML = 'Vous avez utilisé ' + vie  + ' vie sur 10!';

     if ( vie >= 10 ) {
         document.getElementById('indication').innerHTML = "Vous avez Perdu !!!!";
         document.getElementById('indication').style.color = 'red';
         document.getElementById('envoyer').style.display = 'none';
         document.getElementById('image').style.height = '300px';
     }

        reset();
});

// Mot caché

for (var i = 0; i < mathrandom.length; i++) {
    document.getElementById('lettre' + i).innerHTML = "_";
}

// Reset le Mot

document.getElementById('reset').addEventListener("click",

    function () {

        document.location.reload(true)
});

// Mode de Difficulté

document.getElementById('facile').addEventListener("click",

    function () {

    });


document.getElementById('normal').addEventListener("click",

    function () {

});

document.getElementById('difficile').addEventListener("click",

    function () {

});