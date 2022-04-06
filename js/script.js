// Chiedi all’utente il suo nome
const firstName = prompt('Come ti chiami?');
console.log(firstName);

// Chiedi il suo cognome
const surname = prompt('Qual è il tuo cognome?');
console.log(surname);

// Chiedi il suo colore preferito
const color = prompt('Qual è il tuo colore preferito?');
console.log(color);


// Intrinseca i 3 elementi in un messaggio
const password = `Basandoci sui tuoi dati, abbiamo creato una super password ;) : ${firstName}${color}${surname}`;
console.log(password)

// Scrivi sulla pagina il messaggio
document.getElementById('mypassword').innerHTML = password;