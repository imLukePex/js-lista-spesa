// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// Selezione Ul
const listaUl = document.querySelector(".elenco");

// Creo un array con la lista della spesa
const listaSpesa = ["Pomodori", "Carote", "Sedano", "Cipolle", "Banane", "Mele"];

// Scorro la lista della spesa
let i = 0;

while (i < listaSpesa.length) {
    
    // Mi salvo l'elemento iesimo della lista
    let itemIesimo = listaSpesa[i];
    
    // Per ogni elemento faccio l'output
    console.log(itemIesimo);
    
    // Creiamo il LI
    const elementLi = document.createElement("li");
    
    // Inseriamo dentro il LI il contenuto
    elementLi.append(itemIesimo);
    
    // Inseriamo il nuovo LI creato dentro l'UL
    listaUl.append(elementLi);

    // Incrementiamo l'iterazione
    i++;
}