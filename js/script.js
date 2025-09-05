// Scrivere un programma che chieda all’utente:
// Il numero di chilometri da percorrere
// Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. 

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. 
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// MILESTONE 3:
// Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.



//MILESTONE 1
//richiamiamo il bottone
const button = document.getElementById("bottone");

//richiamiamo il nome passeggero
const userName = document.getElementById("nome");
const nome = document.getElementById("outputNome");

//dichiarazione elementi output
const outEta = document.getElementById("outputEta");
const outKm = document.getElementById("outputKm");

//selezione l'elemento form
const myForm = document.querySelector("form");

//gestione evento bottone
myForm.addEventListener("submit",
    (event) => {
        //blocco invio del form
        event.preventDefault();

        //richiamiamo gli input 
        const etaUser = parseInt(document.getElementById("eta").value);
        const kmUser = parseInt(document.getElementById("km").value);

        //stampiamo in pagina i dati del form
        nome.innerText = `Nome e cognome: ${userName.value}`;
        outEta.innerText = `età utente: ${etaUser}`;
        outKm.innerText = `Km inseriti: ${kmUser}`;

        //stampiamo in pagina e in console il prezzo finale
        console.log(ticketPrice(etaUser,kmUser));
        document.getElementById("result").innerText = ticketPrice(etaUser,kmUser);
    }
);

//funzione per il calcolo del prezzo in base a KM ed età
function ticketPrice(eta,km){
    let tripPrice = 0.21 * km;
    if (eta < 18) {
        tripPrice = tripPrice - ((tripPrice * 20 / 100));
    } else if (eta > 65) { 
         tripPrice = tripPrice - ((tripPrice * 40 / 100));
    }
     return `prezzo finale: ${tripPrice.toFixed(2)} €`;
}


































//MILESTONE 1
//creiamo una funzione per stabilire il prezzo del biglietto
// function ticketPrice(eta,km){
//     eta = parseInt(prompt("inserisci la tua età"));
//     km = parseInt(prompt("inserisci quanti Km devi fare"));    
//     console.log("età utente:", eta , "anni");
//     console.log("Km da percorrere:", km , "Km");
//     let tripPrice = 0.21 * km;
//     if (eta < 18) {
//         tripPrice = tripPrice - ((tripPrice * 20 / 100));
//         console.log("sconto applicato: bambini, 20%");
//     } else if (eta > 65) { 
//          tripPrice = tripPrice - ((tripPrice * 40 / 100));
//         console.log("sconto applicato: Over65, 40%");
//     }
//      return `prezzo finale: ${tripPrice.toFixed(2)} €`;
// }

// //richiamiamo la funzione
// console.log(ticketPrice())