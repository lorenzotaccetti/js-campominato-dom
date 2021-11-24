// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una b.

// Collego la generazione della griglia al click del button
let buttonPlay = document.getElementById('button');

buttonPlay.addEventListener('click', function() {
    // Seleziono il container
    let mainContainer = document.getElementById('main-container');
    mainContainer.innerHTML = '';

    // Creo la variabile dell bombe
    let bombNumber = 16;

    // Importo il valore della difficoltà scelta dall'utente
    const userDifficulty = document.getElementById('difficolta').value;
    
    // Con un if divido nei casi possibili
    if( userDifficulty === 'easy') {

        // Genero un array di 16 elementi che rappresentano le bombe
        let bombArray = [];

        while( bombArray.length < bombNumber) {
        
            const randomNumber = Math.floor(Math.random() * 100) + 1;

            if(!bombArray.includes(randomNumber)) {
            bombArray.push(randomNumber)
            }
        };

        console.log(bombArray);

        // Creo un array vuoto che conterrà i numeri cliccati dall'utente non bombe
        const attemptsArray = [];

        // Calcolo il numero max di tentativi dopo il quale l'utente ha vinto
        const maxAttempts = 100 - bombArray.length;

        // Se è easy popolo il contenitore con 100 celle
        for (let i = 1; i <= 100; i++) {
            const newBox = document.createElement('div');
            // Aggiungo la classe box e la larghezza
            newBox.classList.add('box');
            // Popolo il box con il numero
            newBox.innerHTML = `<span>${i}</span>`;
            // Popolo il container
            mainContainer.appendChild(newBox);
            // Aggiungo l'evento al box
            newBox.addEventListener('click', function() {

                // Leggo il numero della cella
                const clickedNumber = parseInt( this.querySelector('span').textContent );

                // Aggiungo una if per vedere se il giocatore ha vinto o perso
                if (bombArray.includes(clickedNumber)){
                    // la cella diventa rossa
                    this.classList.add('bomb');
                    // tutte le bombe diventano rosse

                    // Non si può più cliccare sulla bomba
                    this.style.pointerEvents = 'none';

                    // alert sconfitta
                    endGame('lose')
                } else {
                    // la cella diventa azzurra
                    this.classList.add('active');
                    this.style.pointerEvents = 'none';
                    // pusho dentro l'arrey vuoto dei tentativi i numeri cliccati non bombe
                    attemptsArray.push(clickedNumber);
                    
                    // se l'utente non prende neanche una bomba ha vinto
                    if (attemptsArray.length >= maxAttempts) {
                        endGame('win')
                    }
                }
            });
        }

        function endGame(winOrLose) {
            if (winOrLose === 'win') {
                alert('hai vinto');
            } else {
                alert('Hai perso, hai azzeccato ' + attemptsArray.length + ' tentativi')
            }

            const allBoxes = document.getElementsByClassName('box');
            for (let i = 0; i < allBoxes.length; i++ ) {
                const thisBox = allBoxes[i];
                thisBox.style.pointerEvents = 'none';
            }
        }

    } else if ( userDifficulty === 'hard') {

        // Genero un array di 16 elementi che rappresentano le bombe
        let bombArray = [];

        while( bombArray.length < bombNumber) {
            
            const randomNumber = Math.floor(Math.random() * 81) + 1;

            if(!bombArray.includes(randomNumber)) {
                bombArray.push(randomNumber)
            }
        };

        console.log(bombArray);

        // Creo un array vuoto che conterrà i numeri cliccati dall'utente non bombe
        const attemptsArray = [];

        // Calcolo il numero max di tentativi dopo il quale l'utente ha vinto
        const maxAttempts = 81 - bombArray.length;

        // Se è hard popolo il contenitore con 81 celle
        for (let i = 1; i <= 81; i++) {
            // Creo l'elemento
            const newBox = document.createElement('div');
            // Aggiungo la classe box e la larghezza
            newBox.classList.add('box','width-9');
            // Popolo il box con il numero
            newBox.innerHTML = `<span>${i}</span>`;
            // Popolo il container
            mainContainer.appendChild(newBox);
            // Aggiungo l'evento al box
            newBox.addEventListener('click', function() {
                // this.classList.add('active');

                // Leggo il numero della cella
                const clickedNumber = parseInt( this.querySelector('span').textContent );

                // Aggiungo una if per vedere se il giocatore ha vinto o perso
                if (bombArray.includes(clickedNumber)){
                    this.classList.add('bomb');
                    this.style.pointerEvents = 'none';
                    // alert sconfitta
                    endGame('lose')
                } else {
                    // la cella diventa azzurra
                    this.classList.add('active');
                    this.style.pointerEvents = 'none';
                    // pusho dentro l'arrey vuoto dei tentativi i numeri cliccati non bombe
                    attemptsArray.push(clickedNumber);

                    // se l'utente non prende neanche una bomba ha vinto
                    if (attemptsArray.length >= maxAttempts) {
                        endGame('win')
                    }
                }
            });
        }

        function endGame(winOrLose) {
            if (winOrLose === 'win') {
                alert('hai vinto');
            } else {
                alert('Hai perso, hai azzeccato ' + attemptsArray.length + ' tentativi')
            }

            const allBoxes = document.getElementsByClassName('box');
            for (let i = 0; i < allBoxes.length; i++ ) {
                const thisBox = allBoxes[i];
                thisBox.style.pointerEvents = 'none';
            }
        }
    
    } else if ( userDifficulty === 'crazy') {

        // Genero un array di 16 elementi che rappresentano le bombe
        let bombArray = [];

        while( bombArray.length < bombNumber) {
            
            const randomNumber = Math.floor(Math.random() * 49) + 1;

            if(!bombArray.includes(randomNumber)) {
                bombArray.push(randomNumber)
            }
        };

        console.log(bombArray);

        // Creo un array vuoto che conterrà i numeri cliccati dall'utente non bombe
        const attemptsArray = [];

        // Calcolo il numero max di tentativi dopo il quale l'utente ha vinto
        const maxAttempts = 49 - bombArray.length;

        // Se è crazy popolo il contenitore con 49 celle
        for (let i = 1; i <= 49; i++) {
            const newBox = document.createElement('div');
            // Aggiungo la classe box e la larghezza
            newBox.classList.add('box','width-7');
            // Popolo il box con il numero
            newBox.innerHTML = `<span>${i}</span>`;
            // Popolo il container
            mainContainer.appendChild(newBox);
            // Aggiungo l'evento al box
            newBox.addEventListener('click', function() {
                // this.classList.add('active');

                // Leggo il numero della cella
                const clickedNumber = parseInt( this.querySelector('span').textContent );

                // Aggiungo una if per vedere se il giocatore ha vinto o perso
                if (bombArray.includes(clickedNumber)){
                    this.classList.add('bomb');
                    this.style.pointerEvents = 'none';
                    // alert sconfitta
                    endGame('lose')
                } else {
                    // la cella diventa azzurra
                    this.classList.add('active');
                    this.style.pointerEvents = 'none';
                    // pusho dentro l'arrey vuoto dei tentativi i numeri cliccati non bombe
                    attemptsArray.push(clickedNumber);
                    
                    // se l'utente non prende neanche una bomba ha vinto
                    if (attemptsArray.length >= maxAttempts) {
                        endGame('win')
                    }
                }
            });
        }
        
        function endGame(winOrLose) {
            if (winOrLose === 'win') {
                alert('hai vinto');
            } else {
                alert('Hai perso, hai azzeccato ' + attemptsArray.length + ' tentativi')
            }

            const allBoxes = document.getElementsByClassName('box');
            for (let i = 0; i < allBoxes.length; i++ ) {
                const thisBox = allBoxes[i];
                thisBox.style.pointerEvents = 'none';
            }
        }
    }
});
