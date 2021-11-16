/*
RANDOM HEX COLOR GENERATOR FOR DESTRUCTIBLE ELEMENTS

let divs = [...document.querySelectorAll("div")]
const arrOfHex = ['F', 'E', 'D', 'C', 'B', 'A', '1', '2', '3', '4', '5', '6', '7', '8', '9']
divs.forEach((item) => {
    let sum = "#"
    for (let i = 0; i < 6; i++) {
        sum += arrOfHex[Math.floor(Math.random() * arrOfHex.length)]
    }
    item.style.backgroundColor = sum

})

*/
