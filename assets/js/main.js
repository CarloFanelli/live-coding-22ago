//Anni: chiediamo all'utente la sua età e comunichiamo l'anno di nascita.

/* strumenti:
    - un prompt per l'età
    - una variabile
    - un console log per avere il risultato stampato
    - un document.getElementById per stampare l'anno
*/


// chiedere l'età all'utente

let userAge = prompt('type your age');

// recupero l'anno corrente con una const

const currentYear = 2023;

// sottraggo all'anno gli anni

let birthYear = currentYear - Number(userAge);

// stampo in console il risultato

console.log('your Birth year is ' + birthYear)


// Salutare: chiediamo all'utente il suo nome e inseriamo in pagina la stringa "ciao <nome_utente>"

/*
Strumenti:
    - un prompt per il nome dell'utente
    - una variabile per contenere il nome dell'utente
    - un getElementById per selezionare un elemento dal doc html
    - un console.log
 */

// chiedere il nome

const userName = prompt ('your name');

// selezionare il tag tramite id in cui inserire il risultato

const greetingsElement = document.getElementById('greetings');
// stampare in console

console.log('ciao ' + userName)

//stampare in pagina

greetingsElement.innerHTML = 'ciao ' + userName ;