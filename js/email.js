/*
Mail
Crea (inventa) una lista di inidirizzi mail autorizzati.
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa in console un messaggio appropriato sull’esito del controllo. ("Benvenuto" se la mail è nella lista, "Spiacenti" se non lo è);
*/

// creo una lista di email
//chiedo all' utente un email ( prompt)
//controllo che il nome scelto sia nella lista 
//se l' email è presente stampo  il permesso in console
//se l' email non è presente stampo il divieto in console 

//creo una lista email
const emails = ['pinco.pallino@io.com', 'solitoignoto@io.com', 'umbrella@io.com']
console.table(emails);
//chiedo all' utente un email (prompt)
const quest = prompt('inserisci un email', 'solitoignoto@io.com')

//controllo che il nome scelto sia nella lista 
for (let i = 0; i < emails.length; i++){
    console.log(i)
 //se l' email è presente stampo  il permesso in console
    if(quest !== emails.length[0] || quest !==emails.length[1] || quest !==emails.length[2]){
     console.log('non puoi accedere')
     //se l' email non è presente stampo il divieto in console 
 }else if ( quest === emails.length[0]  || quest === emails.length[1]|| quest === emails.length[2])
  console.log('puoi accedere')
}