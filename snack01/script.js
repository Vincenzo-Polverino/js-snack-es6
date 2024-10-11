console.log('linked');

const bikes = [
    {
        nome: 'bike1',
        peso: 10,
    },
    {
        nome: 'bike2',
        peso: 20,
    },
    {
        nome: 'bike3',
        peso: 30,
    },
    {
        nome: 'bike4',
        peso: 40,
    },
]

let peso_minore = bikes[0].peso

for (let i = 0; i < bikes.length; i++) {
    
    
    let bike = bikes[i];

    if (bike.peso < peso_minore) {
        peso_minore = bike.peso
    }

}
console.log(peso_minore);