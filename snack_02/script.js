console.log('linked');

/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/



// Creiamo un array di squadre di calcio con solo i nomi
let squadre = [

    {
        nome: 'squadra_1',
        punti: 0,
        falli: 0
    },

    {
        nome: 'squadra_2',
        punti: 0,
        falli: 0
    },

    {
        nome: 'squadra_2',
        punti: 0,
        falli: 0
    },

    {
        nome: 'squadra_3',
        punti: 0,
        falli: 0
    }
];

// Assegniamo valori random a punti e falli subiti
for (let i = 0; i < squadre.length; i++) {
    squadre[i].punti = Math.floor(Math.random() * 100);
    squadre[i].falli = Math.floor(Math.random() * 50);
}


// Creiamo un nuovo array con solo nomi e falli subiti
let nomi_falli = [];
for (let i = 0; i < squadre.length; i++) {
    nomi_falli.push(
        {
            nome: squadre[i].nome,
            falli: squadre[i].falli
        }
    );
}

console.log(squadre, nomi_falli);
