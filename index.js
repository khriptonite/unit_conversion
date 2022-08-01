const inputNum = document.getElementById('input-num');
const convertBtn = document.getElementById('convert-btn');
let convertSec  = document.querySelectorAll('.convert-section')
let resultSec = document.querySelectorAll('.convert-results')
let length = document.querySelector('.length')
let volume = document.querySelector('.volume')
let mass = document.querySelector('.mass')

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/







let units = {
    feet: 3.281,
    gallons: 0.264,
    pounds: 2.204,
    meters: 0.3048,
    liters: 3.785,
    kilos: 0.453
}



convertBtn.addEventListener('click', function() {
    displayLength()
    displayVolume()
    displayMass()
})

// function convert(unit1, unit2) {
//     let value = unit1 * unit2
//     return value.toFixed(3) 
// }

function displayValues(unit1, unit2) {
    let name = ''
    let name2 = ''
    let num = ''
    let num2 = ''
    let value = inputNum.value
    let html = ''
    for(let i in units) {
        if (i === unit1) {
            name = i
            num = units[i] * value
        } else if (i === unit2) {
            name2 = i 
            num2 = units[i] * value
        }
    }  
        html += `'<p>${value} ${name} = ${num2.toFixed(3)} ${name2} | ${value} ${name2} = ${num.toFixed(3)} ${name}</p>'`
        return html
        
}


function displayLength() {
    length.innerHTML = displayValues('meters', 'feet')
}

function displayVolume() {
    volume.innerHTML = displayValues('liters', 'gallons')
}

function displayMass() {
    mass.innerHTML = displayValues('kilos', 'pounds')
}



// function displayValues(unit1, unit2) {
//     let name = ''
//     let name2 = ''
//     let num = ''
//     let num2 = ''
//     let html = 20
//     for(let i in units) {
//         if (i === unit1) {
//             name = i
//             num = units[i] * html
//         } else if (i === unit2) {
//             name2 = i 
//             num2 = units[i] * html
//         }
//     }  
//         console.log(`${html} ${name} = ${num} ${name2} | ${html} ${name2} = ${num2} ${name}`)
// }

// displayValues('meters', 'feet')