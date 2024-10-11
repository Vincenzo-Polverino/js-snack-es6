console.log('linked');

const bikes = [
    {
        name: 'bike_1',
        weight: 10,
    },
    {
        name: 'bike_2',
        weight: 20,
    },
    {
        name: 'bike_3',
        weight: 30,
    },
    {
        name: 'bike_4',
        weight: 40,
    },
]

let minor_weight = bikes[0].weight
let lighter_bike = bikes[0].name

for (let i = 0; i < bikes.length; i++) {
    
    
    let bike = bikes[i];

    if (bike.weight < minor_weight) {
        minor_weight = bike.weight
        lighter_bike = bike.name;
    }

}
document.getElementById('result').innerText = lighter_bike;