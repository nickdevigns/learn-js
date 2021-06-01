function logger (arg) {
    console.log("What's up logger " + arg + "?")
}
logger("bro")

const ten = () => 10
// const ten = _ => 10;
console.log(ten);

const loggerz = (arg) => {
  console.log(arg)
}
// const loggerz = arg => {
//     console.log(arg)
// }
loggerz("What's up logger");

// Normal Function (with Function expression)
function addNormalFunction (num1, num2) {
    return num1 + num2
}
function multiplyNormalFunction (num1, num2) {
    return num1 * num2
}
// Arrow Function with implicit return
const addArrowFunction1 = (num1, num2) => num1 + num2
const multiplyArrowFunction1 = (num1, num2) => num1 * num2

// Arrow Function without implicit return
const addArrowFunction2 = (num1, num2) => {
    return num1 + num2
}
const multiplyArrowFunction2 = (num1, num2) => {
    return num1 * num2
}

// const addResult = addNormalFunction(43, 44)
// const addResult = addArrowFunction1(43, 44)
const addResult = addArrowFunction2(43, 44)
console.log(addResult)

// const multiplyResult = multiplyNormalFunction(20, 18)
// const multiplyResult = multiplyArrowFunction1(20, 18)
const multiplyResult = multiplyArrowFunction2(20, 18)
console.log(multiplyResult)

const car = {
    engine : "2.5L V4",
    'wheel size' : "17 inch",
    drive: function(speed) {
        console.log("You are driving " + speed + " miles per hour")
    }
}

console.log(car.engine)
console.log(car['wheel size'])

car.navigation = true
console.log(car.navigation)

car['wheel type'] = "aluminum"
console.log(car['wheel type'])

car.drive(60)

const james = 22
const valerie = 25
const kenneth = 27
const nick = 43

if (nick < james) {
    console.log("Nick is younger than James")
} else if (nick > valerie) {
    console.log("Nick is older than Valerie")
} else if (nick >= kenneth) {
    console.log("Nick is as old as Kenneth")
}

// const characters = document.querySelector(ul)
const characters = document.querySelector('#star-wars-characters')
// const luke = characters.querySelector('.luke')
// const luke = characters.querySelector('li')
const luke = characters.querySelector('[data-type=hero]')
// const yoda = characters.querySelector('.yoda')
const yoda = characters.querySelector('[data-type=master]')
// const vader = characters.querySelector('.badboy')
const vader = characters.querySelector('[data-type=villain]')


const buttonToggler = document.querySelector('.toggler')
const add = document.querySelector('.add')
const remove = document.querySelector('.remove')
const contains1 = document.querySelector('.contains1')
const contains2 = document.querySelector('.contains2')

buttonToggler.addEventListener('click', function () {
    if (remove.classList.contains('.remove')) {
        remove.classList.remove('remove')
    } else {
        remove.classList.add('remove')
    }

    add.classList.toggle('red')
})

if (contains1.classList.contains('blue')) {
    console.log("Contains 1 contains the blue class")
} else if (contains2.classList.contains('blue')) {
    console.log("Contains 2 contains the blue class")
} else {
    console.log("Contains 1 or 2 does not contain the blue class")
}
const toggle = document.querySelector('.toggle')
toggle.classList.toggle('red')