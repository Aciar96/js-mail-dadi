/*
Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilisci il vincitore, in base a chi fa il punteggio più alto e stampa  in console il risultato (ossia se ha vinto il computer o il player)
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?
*/
// creo un arrey per i numeri  da 1 a 6
// creo numeri random per il pcu
// creo numeri random per il giocatore
// creo un ciclo che parte dalla posizione 0 e arriva massimo alla random.lengt
// se il numero del giocatore è piu altro di quello della cpu scrivi hai vinto
// se il numero del cpu è piu altro di quello della cpu scrivi hai perso
// se i numeri sono uguali scrivi pareggio

// creo un arrey per i numeri  da 1 a 6
const random = [1, 2, 3, 4 , 5, 6 ]
// creo numeri random per il pcu
const cpuNumber = Math.floor(Math.random() * 6 + 1)
console.log(cpuNumber) 
// creo numeri random per il giocatore
const playerNumber = Math.floor(Math.random()* 6 + 1)
console. log(playerNumber)

// creo un ciclo che parte dalla posizione 0 e arriva massimo alla random.lengt
for(let i = 0; i < random.length; i++){
   // se il numero del giocatore è piu altro di quello della cpu scrivi hai vinto
    if(playerNumber < cpuNumber){
        console.log('hai perso')
    // se il numero del cpu è piu altro di quello della cpu scrivi hai perso
    }else if(playerNumber > cpuNumber){
     console.log('hai vinto')
    // se i numeri sono uguali scrivi pareggio
    }else{
        console.log('pareggio')
    }
}


