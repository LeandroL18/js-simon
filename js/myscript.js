// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// selezione bottoni
const sendButton = document.getElementById("sendbutton");
const confrontbt = document.getElementById("confronta");

// generazione array di 5 numeri casuali 
const outputNum = genArrayRandom(0, 100, 5);
console.log(outputNum);

// visualizzazione array in pagina
document.getElementById("outputnumber").innerHTML = outputNum;

// dopo 30 secondi accade la scomparsa output array e la comparsa input
setTimeout(function(){
    document.getElementById("outputnumber").innerHTML = "";

    document.querySelector(".hidden").style.display = "inline-block";
    document.querySelector("#inputnumber").style.display = "inline-block";
    sendButton.style.display = "inline-block";
}, 30000);

// definizione array 
let inputNum = [];
let wrongNum = [];
let rightNum = [];

// prendiamo in input i numeri dell'utente
let iNumber = document.getElementById("inputnumber");

// al click del bottone invia
sendButton.addEventListener("click",
    function() {
        // aggiungiamo il valore in input dell'utente (se non è già dentro) all'array vuoto e lo stampiamo
        if(!inputNum.includes(parseInt(iNumber.value))){
            inputNum.push(parseInt(iNumber.value));
        }
        else alert("Numero già inserito! Prova ad inserirne un altro!");
        // stampiamo l'array con i numeri che inserisce l'utente
        document.getElementById("usernumber").innerHTML = "I tuoi numeri sono "+ inputNum;
        console.log(inputNum);

        document.getElementById("inputnumber").value="";
    }
)

// al click del bottone confronta
confrontbt.addEventListener("click", 
    function(){
        // confrontiamo i due array con la funzione
        const result = confrontarray(outputNum,inputNum);

        console.log("I numeri che hai indovinato sono " + rightNum);
        console.log("I numeri che non hai indovinato sono " + wrongNum);
        
        if(result===true) document.getElementById("risultato").innerHTML = "Bravo! Hai una memoria di ferro!";

        else document.getElementById("risultato").innerHTML = "Scarsone! Hai sbagliato! <br> I numeri che hai indovinato sono " + rightNum + "<br> I numeri che non hai indovinato sono " + wrongNum;

        document.getElementById("outputnumber").innerHTML = outputNum;
        document.getElementById("h3_1").style.display = "none";
        document.getElementById("h4_1").style.display = "none";
    }
)



// funzione per il confronto di due array
function confrontarray(array1,array2) {
    // se gli array sono di lunghezza diversa ritorna falso
    if(array1.length !== array2.length) return false;
    // se no confrontiamo ogni elemento dell'array
    else {
        for(var i = 0; i<array1.length; i++){
            if(array1[i] === array2[i]) rightNum.push(array1[i]);
            else wrongNum.push(array2[i]);
        }
        if(wrongNum.length >= 1) return false;
        else return true;
    }  
}




// funzione creazione array randomico
function genArrayRandom(min,max,nElement) {
    const arr = [];

    while(arr.length < nElement){
        // generiamo numero random
        let number = Math.floor(Math.random()* max) + min;
        // controllo se il numero generato non è già nell'array
        if(!arr.includes(number)){
            arr.push(number);
        }
    }
    return arr;
}