function logger (arg) {
  console.log("What's up logger " + arg + '?')
}
logger('bro')

const ten = () => 10
// const ten = _ => 10;
console.log(ten)

const loggerz = (arg) => {
  console.log(arg)
}
// const loggerz = arg => {
//     console.log(arg)
// }
loggerz("What's up logger")

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
  engine: '2.5L V4',
  'wheel size': '17 inch',
  drive: function (speed) {
    console.log('You are driving ' + speed + ' miles per hour')
  }
}

console.log(car.engine)
console.log(car['wheel size'])

car.navigation = true
console.log(car.navigation)

car['wheel type'] = 'aluminum'
console.log(car['wheel type'])

car.drive(60)

const james = 22
const valerie = 25
const kenneth = 27
const nick = 43

if (nick < james) {
  console.log('Nick is younger than James')
} else if (nick > valerie) {
  console.log('Nick is older than Valerie')
} else if (nick >= kenneth) {
  console.log('Nick is as old as Kenneth')
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
  console.log('Contains 1 contains the blue class')
} else if (contains2.classList.contains('blue')) {
  console.log('Contains 2 contains the blue class')
} else {
  console.log('Contains 1 or 2 does not contain the blue class')
}
const toggler = document.querySelector('.toggle')
toggler.classList.toggle('red')

// Offcanvas and Modal Buttons
const button = document.querySelector('.offcanvas__button')
const body = document.body
button.addEventListener('click', evt => {
  console.log('Push the screen!')
  body.classList.toggle('offcanvas-is-open')
})

const modalButton = document.querySelector('.jsModalButton')
modalButton.addEventListener('click', evt => {
  document.body.classList.add('modal-is-open')
  wave()
})

// Wave hand animation
const wavingHand = document.querySelector('.wave-hand')

const wave = _ => {
  const tl = new TimelineMax({})
  tl.set(wavingHand, {
    transformOrigin: 'bottom center'
  })
  tl.from(wavingHand, 0.5, {
    scale: 0.25,
    opacity: 0,
    ease: Back.easeOut.config(1.5)
  })
  tl.to(wavingHand, 0.2, { rotation: 15 })
  tl.to(wavingHand, 0.2, { rotation: -15 })
  tl.to(wavingHand, 0.2, { rotation: 15 })
  tl.to(wavingHand, 0.2, { rotation: -15 })
  tl.to(wavingHand, 0.2, { rotation: 0 })
}

const modalCloseButton = document.querySelector('.jsModalClose')
modalCloseButton.addEventListener('click', evt => {
  document.body.classList.remove('modal-is-open')
})

// Close the modal when clicking on the modal overlay
const modalOverlay = document.querySelector('.modal-overlay')

modalOverlay.addEventListener('click', evt => {
  /**
  if (evt.target.closest('.modal')) {
    evt.stopPropagation() // Stop event from bubbling - prevent the modal from closing when clicking inside modal
  } else {
    body.classList.remove('modal-is-open') // Close Modal
  }
  */

  // Easier way to write the code above
  if (!evt.target.closest('.modal')) {
    body.classList.remove('modal-is-open')
  }
})

// Array of oldest to youngest pets
const pets = ['Sammy', 'Finley', 'Shelby']
console.log(pets)
pets.shift() // Removes the first pet, Sammy
pets.shift() // Removes the first pet, Finley
console.log(pets) // ['Shelby']
pets.push('Finley', 'Sammy') // Adds Finley and Sammy to the end of the array
console.log(pets) // ['Shelby','Finley','Sammy']
pets.pop() // Removes the last pet, Sammy
pets.pop() // Removes the last pet, Finley
console.log(pets) // ['Shelby']
pets.unshift('Sammy', 'Finley') // Adds Sammy and Finley to the front of the array
console.log(pets) // ['Sammy', 'Finley', 'Shelby']
pets.splice(0, 2) // Removes Sammy and Finley from the start of the array
/**
 * First argument (0): Start at index 0.
 * Second argument (2): Delete 2 items.
 */
console.log(pets) // ['Shelby']
pets.splice(1, 0, 'Finley', 'Sammy') // Adds Finley and Sammy after the first pet, Shelby
/**
 * First argument (1): Start at index 1.
 * Second argument (0): Delete 0 items.
 * Third and fourth argument: Items we want to add.
 */
console.log(pets) // ['Shelby','Finley','Sammy']
pets.splice(pets.length - 2, 2)
/**
 * Removes Finley and Sammy from the end of the array
 * First argument (pets.length - 2): Modifies the array at index pets.length - 2, which is 3 - 2 = 1. So we remove items from second item onwards.
 * Second argument (2): Delete 2 items.
 */
console.log(pets) // ['Shelby']
pets.splice(0, 0, 'Sammy', 'Finley') // Adds Sammy and Finley to the start of the array
console.log(pets) // ['Sammy', 'Finley', 'Shelby']

const people = [
  'Benjamin Franklin',
  'Thomas Edison',
  'Franklin Roosevelt',
  'Mahatma Gandhi',
  'Napoleon Bonaparte',
  'Abraham Lincoln'
]
console.log(people[0])

// What is the index of Mahatma Gandhi in this list of people?
const gandhi = people.indexOf('Mahatma Gandhi')
console.log(gandhi)

// Add Winston Churchill and Albert Einstein to the start of the list.
// people.unshift('Winston Churchill', 'Albert Einstein')
people.splice(0, 0, 'Winston Churchill', 'Albert Einstein')
console.log(people)
// Alternative by copying array avoiding mutation
const addedToStartOfList = ['Winston Churchill', 'Albert Einstein', ...people]
console.log(addedToStartOfList)

// Add Charles Darwin and Walt Disney to the end of the list.
const peopleCP1 = people.slice() // copy previous Array
// people.push('Charles Darwin', 'Walt Disney')
peopleCP1.splice(peopleCP1.length, 0, 'Charles Darwin', 'Walt Disney')
console.log(peopleCP1)
// Alternative method by copying array avoiding mutation
const addedToEndOfList = [...people, 'Charles Darwin', 'Walt Disney']
console.log(addedToEndOfList)

// Add Pablo Picasso and Ludwig van Beethoven after Mahatma Gandhi. Use splice.
const peopleCP2 = peopleCP1.slice() // copy previous Array

// const gandhiIndex = peopleCP2.indexOf('Mahatma Gandhi')
// Alternative method of the above
const gandhiIndex = people.findIndex(p => p === 'Mahatma Gandhi')

// peopleCP2.splice(gandhiIndex + 1, 0, 'Pablo Picasso', 'Ludwig van Beethoven')
// Alternative method of the above
peopleCP2.splice(gandhiIndex + 1, 0, ...['Pablo Picasso', 'Ludwig van Beethoven'])
console.log(peopleCP2)

// Remove Benjamin Franklin and Thomas Edison
const peopleCP3 = peopleCP2.slice() // copy previous Array
peopleCP3.splice(2, 2)
console.log(peopleCP3)

// Remove Napoleon Bonaparte and Abraham Lincoln
const peopleCP4 = peopleCP3.slice() // copy previous Array
// peopleCP4.splice(peopleCP4.length - 4, 2)
// Alternative method of the above
peopleCP4.splice(-4, 2)
console.log(peopleCP4)

// Remove Mahatma Gandhi with splice
const peopleCP5 = peopleCP4.slice() // copy previous Array
// const gandhiIDX = peopleCP5.indexOf('Mahatma Gandhi')
// Alternative method of the above
const gandhiIDX = peopleCP5.findIndex(p => p === 'Mahatma Gandhi')
console.log(gandhiIDX)

peopleCP5.splice(gandhiIDX, 1)
console.log(peopleCP5)

// Arrays
const numbers = [1, 12, 4, 18, 9, 7, 11, 3, 50, 5, 6]
const newNumbers = []
const multipliedBy5Numbers = []

// For...of loop alternative to for loop
for (const num of numbers) {
  // for (let i = 0; i < numbers.length; i++) { // regular for loop

  console.log(num) // Loop through the numbers and console.log each number within
  //   console.log(numbers[i])

  //   const num = numbers[i]

  // Loop through the numbers. If the numbers are greater than 5, console.log them
  if (num > 5) {
    console.log('The number ' + num + ' is greater than 5')
  }

  // Create a new array (newNumbers). Add all numbers that are greater than 10 into this new array.
  if (num > 10) {
    newNumbers.push(num)
  }

  /**
   * Create a new array (multipliedBy5Numbers).
   * Multiply all numbers by 5 and put them into the new array.
   */
  multipliedBy5Numbers.push(num * 5)
}

console.log(newNumbers)
console.log(multipliedBy5Numbers)

const people2 = [
  { firstName: 'Benjamin', lastName: 'Franklin', yearBorn: 1706, yearOfDeath: 1790 },
  { firstName: 'Thomas', lastName: 'Edison', yearBorn: 1847, yearOfDeath: 1931 },
  { firstName: 'Franklin', lastName: 'Roosevelt', yearBorn: 1882, yearOfDeath: 1945 },
  { firstName: 'Napolean', lastName: 'Bonaparte', yearBorn: 1769, yearOfDeath: 1821 },
  { firstName: 'Abraham', lastName: 'Lincoln', yearBorn: 1809, yearOfDeath: 1865 },
  { firstName: 'Mother', lastName: 'Theresa', yearBorn: 1910, yearOfDeath: 1962 },
  { firstName: 'Mahatma', lastName: 'Gandhi', yearBorn: 1869, yearOfDeath: 1948 },
  { firstName: 'Winston', lastName: 'Churchill', yearBorn: 1874, yearOfDeath: 1965 },
  { firstName: 'Charles', lastName: 'Darwin', yearBorn: 1809, yearOfDeath: 1882 },
  { firstName: 'Albert', lastName: 'Einstein', yearBorn: 1879, yearOfDeath: 1955 },
  { firstName: 'Pablo', lastName: 'Picasso', yearBorn: 1881, yearOfDeath: 1973 },
  { firstName: 'Ludwig', lastName: 'Beethoven', yearBorn: 1770, yearOfDeath: 1827 },
  { firstName: 'Walt', lastName: 'Disney', yearBorn: 1901, yearOfDeath: 1966 },
  { firstName: 'Henry', lastName: 'Ford', yearBorn: 1863, yearOfDeath: 1947 },
  { firstName: 'Steve', lastName: 'Jobs', yearBorn: 1955, yearOfDeath: 2012 }
]

// The forEach loop

// console.log the first name of each person in the array.
people2.forEach(person => console.log(person.firstName))

// Make a second array that contains only the first name of each person.
const peopleFirstName = []
people2.forEach(person => peopleFirstName.push(person.firstName))
console.log(peopleFirstName)

// Make a third array that contains people that have died after 1950.
const people1950 = []
people2.forEach(person => {
  if (person.yearOfDeath > 1950) {
    people1950.push(person)
  }
})
console.log(people1950)
/**
 * Find index of Charles Darwin in the array.
 * array.forEach((currentValue, index, array) => {
 *  Your loop here
 * })
 */

// If something cannot be found, index should be -1
let darwinIndex = -1
people2.forEach((person, index) => {
  if (person.lastName === 'Darwin') {
    darwinIndex = index
  }
})
console.log(darwinIndex)

// Useful array methods

// FindIndex
// Find the index of Thomas Edison.
const edisonIndex = people2.findIndex(person => person.lastName === 'Edison')
console.log('The index is ' + edisonIndex)

// Find
// Find the object that contains Winston Churchill.
const churchill = people2.find(person => person.lastName === 'Churchill')
console.log(churchill)

// Filter
// Create an array that contains people that died before 1940.
const peopleDiedB41940 = people2.filter(person => person.yearOfDeath < 1940)
console.log(peopleDiedB41940)

// Create an array that contains people that were alive between 1850 and 1970.
const peopleAliveBtw18501970 = people2.filter(person => person.yearOfDeath > 1850 && person.yearOfDeath < 1970)
console.log(peopleAliveBtw18501970)

// Map
// Create an array that contains the firstName, lastName and yearsLived for each person (where yearsLived is the number of years the person lived).
const peeps = people2.map(person => {
  const yearsLived = person.yearOfDeath - person.yearBorn
  return {
    firstName: person.firstName,
    lastName: person.lastName,
    yearsLived
  }
})
console.log(peeps)

// Get the total number of yearsLived of the people who were alive between 1750 and 1900.
const aliveBetween1750And1900 = people.filter(person => {
  const { yearBorn, yearOfDeath } = person
  return yearBorn < 1900 && yearOfDeath > 1750
})

let totalYearsLived = 0
aliveBetween1750And1900.forEach(person => {
  const { yearBorn, yearOfDeath } = person
  const yearsLived = yearOfDeath - yearBorn
  totalYearsLived = totalYearsLived + yearsLived
})

console.log(totalYearsLived) // 891

// Reduce

/**
 * Reduce is an array method that helps you convert an array into a single value.
 * initialValue (0) is the value you want to start with.
 * accumulator (acc) is the value returned from the previous iteration. It will be initialValue for the first iteration.
 * currentValue (num) is array item in the current iteration.
 */
const someNumbers = [1, 2, 3, 4, 5]
const totals = someNumbers.reduce((acc, num) => acc + num, 0)
/**
 * 1st Iteration: someNumbers.reduce((0, 1) => 0 + 1) // returns 1, replaces acc in 2nd
 * 2nd Iteration: someNumbers.reduce((1, 2) => 1 + 2) // returns 3, replaces acc in 3rd
 * 3rd Iteration: someNumbers.reduce((3, 3) => 3 + 3) // returns 6, replaces acc in 4th
 * 4th Iteration: someNumbers.reduce((6, 4) => 6 + 4) // returns 10, replaces acc in 5th
 * 5th Iteration: someNumbers.reduce((10, 5) => 10 + 5) // returns 15
 */
console.log(totals) // 15

// Reducing an array into an object {}
const fruits = ['apple', 'apple', 'banana', 'banana', 'orange', 'pear', 'apple']
const tally = fruits.reduce((acc, fruit) => {
  const fruitCount = acc[fruit]
  fruitCount
    ? acc[fruit] = acc[fruit] + 1
    : acc[fruit] = 1
  /**
   * if (acc[fruit]) {
   *  acc[fruit] = acc[fruit] + 1
   * } else {
   *  acc[fruit] = 1
   * }
   */
  return acc
}, {})
console.log(tally)
/**
 * {
 *  apple: 3,
 *  banana: 2,
 *  orange: 1,
 *  pear: 1
 * }
 */

// Reducing multiple arrays into a single array (flattening)
const multipleArrays = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10]
]
const flattenedArray = multipleArrays.reduce((acc, item) => {
  return acc.concat(item)
}, [])
console.log(flattenedArray) // returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Looping through objects (using the tally object created above)
// via Object.keys
const keys = Object.keys(tally)
console.log(keys) // returns [apple, banana, orange, pear]
// Loop through an array created with Object.keys
keys.forEach(fruit => {
  console.log(`There are ${fruit}s in the fruit basket`)
})

// via Object.values
const valuez = Object.values(tally)
console.log(valuez) // returns [3, 2, 1, 1]
// Loop through an array created with Object.values
valuez.forEach(num => {
  console.log(num)
})

// via Object.entries - creates an array of arrays
const entries = Object.entries(tally)
console.log(entries)
/**
 * returns
 * [
 *  [apple, 3],
 *  [banana, 2],
 *  [orange, 1],
 *  [pear, 1]
 * ]
 */

// Loop through an array created with Object.entries
const bigoleBasket = Object.entries(tally)
bigoleBasket.forEach(([fruit, num]) => {
  console.log(`There are ${num} ${fruit}s in the fruit basket`)
})

const goodGuys = document.querySelectorAll('[data-type="hero"]')
Array.from(goodGuys).forEach(guy => guy.classList.add('yay'))

const villains = document.querySelectorAll('[data-type="villain"]')
Array.from(villains).forEach(villain => villain.classList.add('nay'))

const characterz = document.querySelectorAll('.characters')
Array.from(characterz).forEach(character => character.classList.add('star-wars'))

// Ternary Operators (replacing if/else statement)
const fruitBasket = ['apple', 'pear', 'orange']
const fruitIDX = fruitBasket.indexOf('apple')
/**
 * if (fruitIDX === 2) {
 *  eat()
 * } else {
 *  wash()
 * }
 *
 * fruitIDX === 2 ? eat() : wash()
 */

// Template Literals
const pet = (name, breed) => {
  console.log(`My name is ${name}`)
  console.log(`My name is ${name}
  and I'm a ${breed}`)
}
pet('Sammy', 'Maine Coon')

// Destructuring
const posts = [{
  id: 800,
  title: 'This is 💩'
}, {
  id: 801,
  title: 'Pooing is a natural thing.'
}, {
  id: 802,
  title: 'Poo jokes are getting irritating'
}]

/**
 * 1. Get the first two items in posts with destructuring.
 *    const [post1, post2] = posts
 * 2. Get the id and title of the first post with destructuring.
 */
const [post1, post2] = posts
const { title, id } = post1
console.log(title) // This is 💩
console.log(id) // 800
/** 3. Rename title of the first post to content while you destructure. */
const [postOne] = posts
const { title: content } = postOne
console.log(content) // // This is 💩
/** 4. The first post does not have a description. Create one as you destructure.
 *  Set it to 'Nothing is better than leaving the description empty'
 */
const [postNum1] = posts
const { description = 'Nothing is better than leaving the description empty' } = postNum1
console.log(description) // Nothing is better than leaving the description empty

// Default Parameters
const calculateTaxes = (income, taxRate = 0.17) => income * taxRate
console.log(calculateTaxes(100)) // 17 w/ default tax rate
console.log(calculateTaxes(100, 0.15)) // 15

// 1. Create a function, signUpForPlan, that takes in one parameter, plan. plan defaults to basic
const signUpForPlan = (user) => {
  const {
    plan = 'basic'
  } = user
}

// 2. Create a function, createEmployee that takes in an object that has five properties (firstName, lastName, age, gender, position (defaults to 'associate'))
const createEmployee = (employee) => {
  const {
    firstName,
    lastName,
    age,
    gender,
    position = 'associate'
  } = employee
}

// Enhanced Object Literals
// Property value shorthands
const address = '2345 South Kenmore Court'
const phone = '555-555-5555'
const home = {
  address,
  phone
}

console.log(home.address)
console.log(home.phone)

// Method shorthands
const house = {
  lights () { console.log('Turn it on!') }
}

// Add two dynamic variables into Javascript with computed property names
const property = 'address'
const person = {
  [property]: '2345',
  ['full' + property]: 'South Kenmore Court'
}

console.log(person.fulladdress) // 2531 South Kenmore Court

// Rest and Spread

// 1. Spread an array in a console.log
const houseOfPets = ['Sammy', 'Finley', 'Shelby']
console.log(...houseOfPets)

// 2. Spread an array when calling a function
const callPets = (first, second, third) => {
  console.log(first)
  console.log(second)
  console.log(third)
}
callPets(...houseOfPets)

// 3. Concatenate arrays with spread
const dog = ['Shelby']
const cats = ['Sammy', 'Finley']
const allPets = [...dog, ...cats]
console.log(allPets)

// 4. Use the rest operator as a function argument
const combineAllPets = (...allPets) => {
  console.log(allPets)
}

// 5. Destructure an array; pack items into a variable with rest
const [one, ...restofPets] = allPets
console.log(one)
console.log(restofPets)

// 6. Destructure an object; pack remaining properties with rest
const allThemPets = {
  firstPet: 'Sammy',
  secondPet: 'Finley',
  thirdPet: 'Shelby'
}
const { firstPet, ...rest } = allThemPets
console.log(firstPet)
console.log(rest)

// 7. Spread an object into another object
const keeds = {
  firstBreed: 'Maine Coon',
  secondPetName: 'American Shorthair'
}
const puppers = {
  thirdPetName: 'Australian Shepherd'
}
const critters = { ...keeds, ...puppers }
console.log(critters)

// Accordion
// First accordion - could repeat for other 3 accordions but use a forEach loop instead
/**
 * const firstAccordion = document.querySelector('.accordion')
 * const firstAccordionHeader = firstAccordion.querySelector('.accordion__header')
 * firstAccordionHeader.addEventListener('click', evt => {
 *  firstAccordion.classList.toggle('is-open')
 * })
 */

/**
 * const accordions = Array.from(document.querySelectorAll('.accordion'))
 * accordions.forEach(accordion => {
 *  // Find accordion header
 *  const accordionHeader = accordion.querySelector('.accordion__header')
 *
 *  // Add event listener to the accordion header
 *  accordionHeader.addEventListener('click', evt => {
 *    // Open/close toggle for accordion (if close=>open=>close)
 *    accordion.classList.toggle('is-open')
 *  })
 * })
 */

// Alternative way to do the above function but with Event Delegation

/**
* Finds the correct height of the accordion content
* @param {HTMLElement} accordion The accordion
* @returns {Number} Accordion content's height in px value
*/
const getContentHeight = accordion => {
  const accordionInner = accordion.querySelector('.accordion__inner')
  if (accordion.classList.contains('is-open')) return 0
  return accordionInner.getBoundingClientRect().height
}
const getContentTopPosition = accordion => {
  return accordion.classList.contains('is-open')
    ? -50
    : 0
}
const getContentOpacity = accordion => {
  return accordion.classList.contains('is-open')
    ? 0
    : 1
}
const getContentLeftPosition = accordion => {
  return accordion.classList.contains('is-open')
    ? 150
    : 0
}

// Updates the accordion
const updateAccordion = (accordion, height, top, opacity, left) => {
  const accordionContent = accordion.querySelector('.accordion__content')
  const accordionInner = accordion.querySelector('.accordion__inner')
  const foodPic = accordionInner.querySelector('svg')
  const foodText = accordionInner.querySelector('p')

  accordion.classList.toggle('is-open') // add or remove the 'is-open' class to the parent element of the accordion header in order to open/close

  // accordionContent.style.height = height + 'px'
  accordionContent.style.height = `${height}px` // using template literals instead

  // foodPic.style.top = top + 'px'
  foodPic.style.top = `${top}px` // using template literals instead

  foodPic.style.opacity = opacity

  // foodText.style.left = left + 'px'
  foodText.style.left = `${left}px` // using template literals instead
}

const accordionContainer = document.querySelector('.accordion-container')
accordionContainer.addEventListener('click', evt => {
  // If the user clicked the accordion header or within, close the accordion
  const accordionHeader = evt.target.closest('.accordion__header')

  if (!accordionHeader) return // using an early return instead of below
  // if (accordionHeader) {
  const accordion = accordionHeader.parentElement
  const height = getContentHeight(accordion)
  const top = getContentTopPosition(accordion)
  const opacity = getContentOpacity(accordion)
  const left = getContentLeftPosition(accordion)
  updateAccordion(accordion, height, top, opacity, left)

  /**
   * let height
   * let top
   * let opacity
   * let left
   */

  /**
   * if (accordion.classList.contains('is-open')) {
   *  height = 0
   *  top = -50
   *  opacity = 0
   *  left = 150
   * } else {
   *  height = accordionInner.getBoundingClientRect().height
   *  top = 0
   *  opacity = 1
   *  left = 0
   * }
   */

  // Ternary Operator alternative method from the if/else above
  // const height = accordion.classList.contains('is-open') ? 0 : accordionInner.getBoundingClientRect().height

  // const top = accordion.classList.contains('is-open') ? -50 : 0

  // const opacity = accordion.classList.contains('is-open') ? 0 : 1

  // const left = accordion.classList.contains('is-open') ? 150 : 0

  // const tl = new TimelineMax({})
  // tl.from(accordion, 0.5, { ease: 'power4.out', opacity: 0 })
  // tl.from(foodPic, 0.5, { ease: 'Bounce.easeOut', y: -50 })
  // tl.from(foodText, 0.5, { ease: 'expo.out', x: 150 })
  // }
})

const clickMeBtn = document.querySelector('.toggler')
// Create a tween that moves an object from 200px from left to right.
// Float animation using TweenMax.method(element, duration, vars)
TweenMax.to(clickMeBtn, 2, { x: 200 })
// Create a tween that moves an object from 200px from top to bottom and turn an object invisible.
TweenMax.to(clickMeBtn, 2, { y: 200, delay: 2, opacity: 0 })

// Alternative listening methods and setting CSS properties

// Listening method #1 with 'this' keyword (work only with normal functions, NOT arrow => functions)
const offcanvasBtn = document.querySelector('.offcanvas__button')
offcanvasBtn.addEventListener('click', function (e) {
  // CSS style method #1
  // offcanvasBtn.style.setProperty('width', '400px')
  // offcanvasBtn.style.setProperty('height', '200px')

  // CSS style method #2
  this.style.width = '400px'
  this.style.height = '200px'
})

// Listening method #2 with Event.currentTarget (work with both normal and arrow functions)
const offcanvasBtnUpdates = e => {
  // CSS style method #3
  e.currentTarget.style.color = 'white'
  e.currentTarget.style.backgroundColor = 'purple'
}
const offcanvasBtn2 = document.querySelector('.offcanvas__button')
offcanvasBtn2.addEventListener('click', offcanvasBtnUpdates)

// Set and get attributes with setAttribute and getAttribute
offcanvasBtn.setAttribute('data-border-width', '2')
const offcanvasBtnBorderWidth = offcanvasBtn.getAttribute('data-border-width')
console.log(parseInt(offcanvasBtnBorderWidth)) // parseInt turns string '2' into number

// Set and get attributes with dataset
offcanvasBtn.dataset.borderStyle = 'solid'
const offcanvasBtnBorderStyle = offcanvasBtn.dataset.borderStyle
console.log(offcanvasBtnBorderStyle)

// Remove attribute
offcanvasBtn.removeAttribute('data-border-style')
console.log(offcanvasBtn)

// Traversing the DOM

// Select.characters with document.querySelector
const LORcharacters = document.querySelector('.characters')
// Select.humans from.characters
const LORhumanList = LORcharacters.querySelector('.humans')
// Select all humans with querySelectorAll, starting from.humans
const LORhumans = LORhumanList.querySelectorAll('li')
// Select all hobbits with children
const hobbitsList = LORcharacters.querySelector('.hobbits')
const hobbits = hobbitsList.children
// Select the Merry(the hobbit)
const merry = hobbits[2]
// Select.elves from Merry
const elves = merry.parentElement.nextElementSibling.nextElementSibling
// Select Glorfindel from.elves
const glorifindel = elves.children[1]
// Select Elrond from Glorfindel
const elrond = glorifindel.nextElementSibling
// Select Legolas from Glorfindel
const legolas = glorifindel.previousElementSibling
// Select the characters div from Nazgûl
const nazgul = document.querySelector('.enemies').children[1]
const LORcharacterz = nazgul.closest('.characters')

LORcharacters.classList.add('LOR')
// Change an element’s inner HTML with innerHTML
LORcharacters.innerHTML =
  `<ul class="hobbits">
<li>Frodo Baggins</li>
<li>Samwise "Sam" Gamgee</li>
<li>Meriadoc "Merry" Brandybuck</li>
<li>Peregrin "Pippin" Took</li>
<li>Bilbo Baggins</li>
</ul>
<ul class="humans">
<li>Gandalf</li>
<li>Saruman</li>
<li>Aragorn</li>
<li>Boromir</li>
<li>Faramir</li>
</ul>
<ul class="elves">
<li>Legolas</li>
<li>Glorfindel</li>
<li>Elrond</li>
<li>Arwen Evenstar</li>
</ul>
<ul class="enemies">
<li>Sauron</li>
<li>Nazgûl</li>
</ul>
<ul class="jedis">
<li class="character luke yay" data-type="hero">Luke Skywalker</li>
<li class="character yoda yay" data-type="master">Yoda</li>
<li class="character r2d2 yay" data-type="robot">R2D2</li>
<li class="character badboy nay" data-type="villain">TBD</li>
</ul>`

// Changing an element’s text with textContent
const badboy = document.querySelector('.badboy')
badboy.textContent = 'Darth Vader'

// Tabby
const tabby = document.querySelector('.tabby')

// Select all tabs
// const tabs = Array.from(tabby.querySelectorAll('.tab'))
// const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

// Using the Array spread operator instead of the above
const tabs = [...tabby.querySelectorAll('.tab')]
const tabContents = [...tabby.querySelectorAll('.tab-content')]

// Loop through all tab and add an event listener to each tab
tabs.forEach(tab => {
  tab.addEventListener('click', evt => {
    // console.log(tab)
    // When the user clicks a tab, we get the target from data-target
    const target = tab.dataset.target
    // console.log(target)
    const tabContent = tabby.querySelector('#' + target)
    // console.log(tabContent)
    // Remove is-selected class from every tab and from all tab content boxes
    tabs.forEach(t => t.classList.remove('is-selected'))
    tabContents.forEach(c => c.classList.remove('is-selected'))
    // Add is-selected class to the clicked tab and the corresponding tab content box
    tab.classList.add('is-selected')
    tabContent.classList.add('is-selected')
  })
})

// Alternate (easier) method of the above using Event Delegation
const tabsList = tabby.querySelector('.tabs')
tabsList.addEventListener('click', evt => {
  // 1. Find the clicked tab
  const tab = evt.target
  // 2. Find the corresponding tab content
  const target = tab.dataset.target
  // 3. Associate the tab content with the tab
  const tabContent = tabby.querySelector('#' + target)
  // 4. Remove 'is-selected' class from all tabs to de-emphasize them
  tabs.forEach(t => t.classList.remove('is-selected'))
  // 5. Add 'is-selected' class to clicked tab to emphasize it
  tab.classList.add('is-selected')
  // 6. Remove 'is-selected' class from all tab content to hide them
  tabContents.forEach(c => c.classList.remove('is-selected'))
  // 7. Add 'is-selected' class to corresponding tab to show it
  tabContent.classList.add('is-selected')
})

// Carousel
/* globals getComputedStyle */
// This line removes the squiggly underline from `getComputedStyle`. It tells standard that `getComputedStyle` is already defined.
const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = carousel.querySelector('.carousel__contents')
const slides = [...carousel.querySelectorAll('.carousel__slide')] // Using array spread instead
const dotsContainer = createDots(slides)
const dots = [...dotsContainer.children]
// const dotsContainer = carousel.querySelector('.carousel__dots')
// const dots = Array.from(carousel.querySelectorAll('.carousel__dot'))
// const dots = [...carousel.querySelectorAll('.carousel__dot')] // Using array spread instead
// const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))

// ========================
// Functions
// ========================

/**
 * Creates dots for the carousel
 * @returns The HTML for dots
 */

function createDots (slides) {
  const dotsContainer = document.createElement('div')
  dotsContainer.classList.add('carousel__dots')

  slides.forEach(slide => {
    const dot = document.createElement('button')
    dot.classList.add('carousel__dot')

    if (slide.classList.contains('is-selected')) {
      dot.classList.add('is-selected')
    }

    dotsContainer.appendChild(dot)
  })
  return dotsContainer
}

// Positioning the slides
const setSlidePositions = _ => {
  const slideWidth = slides[0].getBoundingClientRect().width
  /**
   * slides[0].style.left = slideWidth * 0 + 'px' // First slide's left should be 0px
   * slides[1].style.left = slideWidth * 1 + 'px' // Second slide’s left should be slideWidth
   * slides[2].style.left = slideWidth * 2 + 'px' // Third slide’s left should be slideWidth x 2
   */

  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px'
  })
}

/**
 * Switches slides
 * @param {HTMLElement} currentSlide
 * @param {HTMLElement} targetSlide
 */
// Shows next -or- previous slide
const switchSlide = (currentSlideIndex, targetSlideIndex) => {
  const currentSlide = slides[currentSlideIndex]
  const targetSlide = slides[targetSlideIndex]
  const destination = getComputedStyle(targetSlide).left
  // console.log(destination) //800

  /**
   * contents.style.left = '-' + destination // 800-800=0
   * contents.style.transform = 'translateX(-' + destination + ')' // replaced the above to animate the left transition
   */
  contents.style.transform = `translateX(-${destination})` // Using template literals instead replacing the above
  currentSlide.classList.remove('is-selected')
  /* nextSlide.classList.add('is-selected')
  previousSlide.classList.add('is-selected') */
  targetSlide.classList.add('is-selected')
}

/**
 * Highlights selected dot
 * @param {HTMLElement} currentDot
 * @param {HTMLElement} targetDot
 */
// Highlight dots
const highlightDot = (currentSlideIndex, targetSlideIndex) => {
  const currentDot = dots[currentSlideIndex]
  const targetDot = dots[targetSlideIndex]
  currentDot.classList.remove('is-selected')
  targetDot.classList.add('is-selected')
}

const showHideArrowButtons = targetSlideIndex => {
  if (targetSlideIndex === 0) {
    previousButton.setAttribute('hidden', true)
    nextButton.removeAttribute('hidden')
  } else if (targetSlideIndex === dots.length - 1) {
    previousButton.removeAttribute('hidden')
    nextButton.setAttribute('hidden', true)
  } else {
    previousButton.removeAttribute('hidden')
    nextButton.removeAttribute('hidden')
  }
}

const getCurrentSlideIndex = _ => {
  const currentSlide = contents.querySelector('.is-selected')
  return slides.findIndex(slide => slide === currentSlide)
}

// ========================
// Execution
// ========================
setSlidePositions()

nextButton.addEventListener('click', evt => {
  // const currentSlide = contents.querySelector('.is-selected')
  // console.log(currentSlide)
  // const nextSlide = currentSlide.nextElementSibling
  // console.log(nextSlide)
  // const currentDot = dotsContainer.querySelector('.is-selected')
  // const nextDot = currentDot.nextElementSibling
  // const currentSlideIndex = slides.findIndex(slide => slide === currentSlide)
  const currentSlideIndex = getCurrentSlideIndex()
  const nextSlideIndex = currentSlideIndex + 1

  switchSlide(currentSlideIndex, nextSlideIndex)
  highlightDot(currentSlideIndex, nextSlideIndex)
  showHideArrowButtons(nextSlideIndex)

  // previousButton.removeAttribute('hidden') // Shows previous button

  // Hides next button
  /**
   * if (!nextSlide.nextElementSibling) {
   *  nextButton.setAttribute('hidden', true)
   * }
   * // Check for 1 more slide after the next slide
   * // If no more slides, we know the next slide is the last slide and we hide the next button by adding the hidden attribute.
   */
})

previousButton.addEventListener('click', evt => {
  // const currentSlide = contents.querySelector('.is-selected')
  // const previousSlide = currentSlide.previousElementSibling
  // console.log(previousSlide)
  // const currentDot = dotsContainer.querySelector('.is-selected')
  // const previousDot = currentDot.previousElementSibling
  // const currentSlideIndex = slides.findIndex(slide => slide === currentSlide)
  const currentSlideIndex = getCurrentSlideIndex()
  const previousSlideIndex = currentSlideIndex + 1

  switchSlide(currentSlideIndex, previousSlideIndex)
  highlightDot(currentSlideIndex, previousSlideIndex)
  showHideArrowButtons(previousSlideIndex)

  // nextButton.removeAttribute('hidden') // Shows next button

  // Hides previous button
  /**
   * if (!previousSlide.previousElementSibling) {
   *  previousButton.setAttribute('hidden', true)
   * }
   * // Check for 1 more slide after the previous slide
   * // If no more slides, we know the previous slide is the first slide and we hide the previous button by adding the hidden attribute.
   */
})

// Adds dots into the DOM
carousel.appendChild(dotsContainer)

// Listen to dotsContainer
dotsContainer.addEventListener('click', evt => {
  const dot = evt.target.closest('button')
  if (!dot) return // Using early return instead of if statement below
  /**
   * if (dot) {
   *    dot.addEventListener('click', evt => {
   *    console.log(dot)
   *    // When a dot gets clicked, we need to find the corresponding slide
   *    let targetSlideIndex
   *    // loop through dots and check which dot was clicked
   *    for (let i = 0; i < dots.length; i++) {
   *      if (dots[i] === dot) {
   *        targetSlideIndex = i
   *      }
   *    }
   */

  // const currentSlide = contents.querySelector('.is-selected')
  // const currentSlideIndex = slides.findIndex(slide => slide === currentSlide)
  const currentSlideIndex = getCurrentSlideIndex()
  // const currentDot = dotsContainer.querySelector('.is-selected')
  const targetSlideIndex = dots.findIndex(d => d === dot)
  // console.log(targetSlideIndex) // returns 0,1,2

  // Once we know targetSlideIndex, we can use it to find the slide to show.
  // const slideToShow = slides[targetSlideIndex]
  // console.log(slideToShow)

  switchSlide(currentSlideIndex, targetSlideIndex)
  highlightDot(currentSlideIndex, targetSlideIndex)
  // Show / hide buttons
  showHideArrowButtons(targetSlideIndex)
  /**
      * })
   * }
   */
})

// Event Delegation
const list = document.querySelector('ul')

list.addEventListener('click', e => {
  // with 'closest'
  if (e.target.closest('li')) {
    console.log(e.target)
  }

  // with 'matches' and pointer-events
  if (e.target.matches('li')) {
    console.log(e.target)
  }

  /* Also, put this in the CSS file
  li a {
    pointer-events: none
  }
  */
})

// Removing Event Listeners

// Remove after 1 click
const submitForm = e => {
  console.log('The form is submitted')
  e.currentTarget.removeEventListener('click', submitForm)
}
const submitButton = document.querySelector('button')
submitButton.addEventListener('click', submitForm)

// Remove after 5 clicks
const listenFor5Clicks = e => {
  const elem = e.currentTarget
  const prevCount = parseInt(elem.dataset.count) || 0
  const currentCount = prevCount + 1

  elem.dataset.count = currentCount
  console.log(`clicked ${currentCount} times`)

  if (currentCount === 5) {
    elem.removeEventListener('click', listenFor5Clicks)
  }
}
const clickButton = document.querySelector('button')
clickButton.addEventListener('click', listenFor5Clicks)

// Calculator
const calculator = document.querySelector('.calculator')
const calculatorButtons = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')

// Creating helper functions
/**
 * Gets the displayed value
 */
const getDisplayValue = () => {
  return calculator.querySelector('.calculator__display').textContent
}

/**
 * Presses a calculator key
 * @param {String} key
 */
const pressKey = key => {
  document.querySelector(`[data-key="${key}"]`).click()
}

/**
 * Presses calculator keys in sequence
 * @param  {...any} keys
 */
const pressKeys = (...keys) => {
  keys.forEach(pressKey)
}

/**
 * Resets calculator
 */
const resetCalculator = _ => {
  pressKeys('clear', 'clear')
  console.assert(getDisplayValue() === '0', 'Clear calculator')
  console.assert(!calculator.dataset.firstValue, 'No first value')
  console.assert(!calculator.dataset.operator, 'No operator value')
  console.assert(!calculator.dataset.modifierValue, 'No operator value')
}

/**
 * Calculates a value
 * @param {String} firstValue
 * @param {String} operator
 * @param {String} secondValue
 * @returns {Number}
 */
const calculate = (firstValue, operator, secondValue) => {
  firstValue = parseFloat(firstValue)
  secondValue = parseFloat(secondValue)
  if (operator === 'plus') return firstValue + secondValue
  if (operator === 'minus') return firstValue - secondValue
  if (operator === 'times') return firstValue * secondValue
  if (operator === 'divide') return firstValue / secondValue
}

function handleClearKey (calculator, button) {
  const { previousButtonType } = calculator.dataset

  // If clear key pressed once, do this.
  display.textContent = '0'
  button.textContent = 'AC'

  // If clear key pressed twice, do that.
  if (button.textContent === 'AC') {
    delete calculator.dataset.firstValue
    delete calculator.dataset.operator
    delete calculator.dataset.modifierValue
  }
}

function handleNumberKey (calculator, button) {
  const { key } = button.dataset // Find the value of the key (value) that was clicked.
  const { previousButtonType } = calculator.dataset
  const displayValue = getDisplayValue()

  if (displayValue === '0') {
    display.textContent = key
  } else {
    display.textContent = displayValue + key
  }

  if (previousButtonType === 'operator') {
    display.textContent = key
  }

  if (previousButtonType === 'equal') {
    resetCalculator()
    display.textContent = key
  }
}

function handleDecimalKey (calculator) {
  const { previousButtonType } = calculator.dataset
  const displayValue = getDisplayValue()

  if (!displayValue.includes('.')) {
    display.textContent = displayValue + '.'
  }

  if (previousButtonType === 'equal') {
    resetCalculator()
    display.textContent = '0.'
  }

  if (previousButtonType === 'operator') {
    display.textContent = '0.'
  }
}

function handleOperatorKeys (calculator, button) {
  // const firstValue = calculator.dataset.firstValue
  // const operator = calculator.dataset.operator
  const displayValue = getDisplayValue()
  const { previousButtonType, firstValue, operator } = calculator.dataset
  const secondValue = displayValue

  button.classList.add('is-pressed')

  if (
    previousButtonType !== 'operator' &&
    previousButtonType !== 'equal' &&
    firstValue &&
    operator) {
    const result = calculate(firstValue, operator, secondValue)
    display.textContent = result
    calculator.dataset.firstValue = result
  } else {
    calculator.dataset.firstValue = displayValue
  }
  calculator.dataset.operator = button.dataset.key
}

function handleEqualKey (calculator) {
  // const firstValue = calculator.dataset.firstValue
  // const operator = calculator.dataset.operator
  // const modifierValue = calculator.dataset.modifierValue
  const displayValue = getDisplayValue()
  const { firstValue, operator, modifierValue } = calculator.dataset
  const secondValue = modifierValue || displayValue

  if (firstValue && operator) {
    const result = calculate(firstValue, operator, secondValue)
    display.textContent = result
    calculator.dataset.firstValue = result
    calculator.dataset.modifierValue = secondValue
  } else {
    display.textContent = parseFloat(displayValue) * 1
  }
}

// Listening for keys
calculatorButtons.addEventListener('click', evt => {
  if (!evt.target.closest('button')) return

  const button = evt.target
  const { buttonType } = button.dataset // Find the value of the key (value) or button-type (operator) that was clicked.
  // const { previousButtonType } = calculator.dataset
  // const displayValue = display.textContent // Find the current displayed result

  // Release operator key from pressed state
  const operatorKeys = [...calculatorButtons.children]
    .filter(button => button.dataset.buttonType === 'operator')
  operatorKeys.forEach(button => button.classList.remove('is-pressed'))

  if (buttonType !== 'clear') {
    const clearButton = calculator.querySelector('[data-button-type=clear]')
    clearButton.textContent = 'CE'
  }

  switch (buttonType) {
    case 'clear': handleClearKey(calculator, button); break
    case 'number': handleNumberKey(calculator, button); break
    case 'decimal': handleDecimalKey(calculator); break
    case 'operator': handleOperatorKeys(calculator, button); break
    case 'equal': handleEqualKey(calculator); break
  }

  calculator.dataset.previousButtonType = buttonType
})

// // Testing the calculator to see if '2' was pressed
// const buttonTwo = calculator.querySelector('[data-key="2"]')
// buttonTwo.click()
// const displayVal = display.textContent
// console.assert(displayVal === '2', 'Number key')

// // To reset the calculator, we press the clear button twice.
// const clearKey = calculator.querySelector('[data-key="clear"]')
// clearKey.click()
// clearKey.click()

// // Test to see if the calculator has been cleared
// const resultAfterClear = display.textContent
// console.assert(displayVal === '0', 'Calculator cleared')

// // If truly cleared, test to see if dataset.firstValue and dataset.operator don't exist.
// console.assert(!calculator.dataset.firstValue, 'No first value')
// console.assert(!calculator.dataset.operator, 'No operator value')

// Testing
// =======

/**
 * Runs a test
 * @param {Object} test
 */
const runTest = test => {
  pressKeys(...test.keys)
  console.assert(getDisplayValue() === test.result, test.message)
  resetCalculator()
}

const testClearKey = _ => {
  // Before calculation
  pressKeys('5', 'clear')
  console.assert(getDisplayValue() === '0', 'Clear before calculation')
  console.assert(calculator.querySelector('[data-key="clear"]').textContent === 'AC', 'Clear once, should show AC')
  resetCalculator()

  // After calculator
  pressKeys('5', 'times', '9', 'equal', 'clear')
  const { firstValue, operator } = calculator.dataset
  console.assert(firstValue, 'Clear once;  should have first value')
  console.assert(operator, 'Clear once;  should have operator value')
  resetCalculator()
}

// Test Suites
const tests = [
  // Initial Expressions
  {
    message: 'Number key',
    keys: ['2'],
    result: '2'
  }, {
    message: 'Number Number',
    keys: ['3', '5'],
    result: '35'
  }, {
    message: 'Number Decimal',
    keys: ['4', 'decimal'],
    result: '4.'
  }, {
    message: 'Number Decimal Number',
    keys: ['4', 'decimal', '5'],
    result: '4.5'
  },

  // Calculations
  {
    message: 'Addition',
    keys: ['2', 'plus', '5', 'equal'],
    result: '7'
  }, {
    message: 'Subtraction',
    keys: ['5', 'minus', '9', 'equal'],
    result: '-4'
  }, {
    message: 'Multiplication',
    keys: ['4', 'times', '8', 'equal'],
    result: '32'
  }, {
    message: 'Division',
    keys: ['5', 'divide', '1', '0', 'equal'],
    result: '0.5'
  },

  // Easy Edge Cases
  // Number keys first
  {
    message: 'Number Equal',
    keys: ['5', 'equal'],
    result: '5'
  }, {
    message: 'Number Decimal Equal',
    keys: ['2', 'decimal', '4', '5', 'equal'],
    result: '2.45'
  },

  // Decimal keys first
  {
    message: 'Decimal key',
    keys: ['decimal'],
    result: '0.'
  }, {
    message: 'Decimal Decimal',
    keys: ['2', 'decimal', 'decimal'],
    result: '2.'
  }, {
    message: 'Decimal Decimal',
    keys: ['2', 'decimal', '5', 'decimal', '5'],
    result: '2.55'
  }, {
    message: 'Decimal Equal',
    keys: ['2', 'decimal', 'equal'],
    result: '2'
  },

  // Equal key first
  {
    message: 'Equal',
    keys: ['equal'],
    result: '0'
  }, {
    message: 'Equal Number',
    keys: ['equal', '3'],
    result: '3'
  }, {
    message: 'Number Equal Number',
    keys: ['5', 'equal', '3'],
    result: '3'
  }, {
    message: 'Equal Decimal',
    keys: ['equal', 'decimal'],
    result: '0.'
  }, {
    message: 'Number Equal Decimal',
    keys: ['5', 'equal', 'decimal'],
    result: '0.'
  }, {
    message: 'Calculation + Operator',
    keys: ['1', 'plus', '1', 'equal', 'plus', '1', 'equal'],
    result: '3'
  },

  // Operator Keys first
  {
    message: 'Operator Decimal',
    keys: ['times', 'decimal'],
    result: '0.'
  }, {
    message: 'Number Operator Decimal',
    keys: ['5', 'times', 'decimal'],
    result: '0.'
  }, {
    message: 'Number Operator Equal',
    keys: ['7', 'divide', 'equal'],
    result: '1'
  }
]

// Runs the tests
testClearKey()
tests.forEach(runTest)

// Popover
const popoverTriggers = document.querySelectorAll('.popover-trigger')
// ========================
// Functions
// ========================
/**
 * Finds a popover from the trigger
 * @param {HTMLElement} popoverTrigger
 */
const getPopover = popoverTrigger => {
  return document.querySelector(`#${popoverTrigger.dataset.target}`)
}

// Calculate the position/parameters of the popover and popover trigger
const calculatePopoverPosition = (popoverTrigger, popover) => {
  const popoverTriggerRect = popoverTrigger.getBoundingClientRect()
  const popoverRect = popover.getBoundingClientRect()

  // calculate the positions
  const { position } = popover.dataset
  const space = 20

  if (position === 'top') {
    return {
      top: popoverTriggerRect.top - popoverRect.height - space,
      left: (popoverTriggerRect.left + popoverTriggerRect.right) / 2 - popoverRect.width / 2
    }
  }

  if (position === 'left') {
    return {
      left: popoverTriggerRect.left - popoverRect.width - space,
      top: (popoverTriggerRect.top + popoverTriggerRect.bottom) / 2 -
        (popoverRect.height / 2)
    }
  }

  if (position === 'right') {
    return {
      left: popoverTriggerRect.right + space,
      top: (popoverTriggerRect.top + popoverTriggerRect.bottom) / 2 -
        (popoverRect.height / 2)
    }
  }

  if (position === 'bottom') {
    return {
      top: popoverTriggerRect.bottom + space,
      left: (popoverTriggerRect.left + popoverTriggerRect.right) / 2 - popoverRect.width / 2
    }
  }
}

/**
 * Randomly generate a unique ID
 */
const generateUniqueString = length => {
  return Math.random().toString(36).substring(2, 2 + length)
}

/**
 * Creates a popover according to the trigger
 * @param {HTMLElement} popoverTrigger
 * @returns {HTMLElement}
 */
/* <div id="pop-4" class="popover" data-position="bottom">
   <p>The quick brown fox jumps over the lazy dog.</p>
   </div > */
const createPopover = popoverTrigger => {
  const popover = document.createElement('div')
  popover.classList.add('popover')
  popover.dataset.position = popoverTrigger.dataset.popoverPosition
  // popover.id = popoverTrigger.dataset.target
  const id = generateUniqueString(5)
  popover.id = id
  popoverTrigger.dataset.target = id

  const p = document.createElement('p')
  p.textContent = popoverTrigger.dataset.content
  popover.appendChild(p)
  // console.log(popover)
  document.body.appendChild(popover)
  return popover
}

// ========================
// Execution
// ========================
// Positions popover
popoverTriggers.forEach(popoverTrigger => {
  const popover = getPopover(popoverTrigger) || createPopover(popoverTrigger)

  // set the positions
  const popoverPosition = calculatePopoverPosition(popoverTrigger, popover)
  popover.style.top = `${popoverPosition.top}px`
  popover.style.left = `${popoverPosition.left}px`

  // hide the popover
  popover.setAttribute('hidden', true)
})

// Show/hide popover when user clicks on the trigger - doing this by using event delegation that listens to the common ancestor, document, for all triggers.
document.addEventListener('click', evt => {
  // If trigger clicked, find that trigger.
  const popoverTrigger = evt.target.closest('.popover-trigger')
  if (!popoverTrigger) return

  // Check whether the corresponding popover is shown or hidden.
  const popover = document.querySelector(`#${popoverTrigger.dataset.target}`)
  if (popover.hasAttribute('hidden')) {
    popover.removeAttribute('hidden')
  } else {
    popover.setAttribute('hidden', true)
  }

  // Hides popover when user clicks something other than trigger or popover
  if (!evt.target.closest('.popover') && !evt.target.closest('.popover-trigger')) {
    const popovers = [...document.querySelectorAll('.popover')]
    popovers.forEach(popover => popover.setAttribute('hidden', true))
  }
})

const form = document.querySelector('form')
console.log(form.elements)

const textField = form.querySelector('input[type="text"]')
textField.addEventListener('input', evt => {
  console.log(evt.target.value)
})
textField.addEventListener('focus', evt => {
  console.log(evt.target.value)
})
textField.addEventListener('blur', evt => {
  console.log(evt.target.value)
})

form.addEventListener('change', evt => {
  const checkBoxes = [...form.querySelectorAll('input[type="checkbox"]')]
  const checkedCheckBoxes = checkBoxes.filter(checkbox => checkbox.checked)
  console.log(checkedCheckBoxes) // returns checked inputs

  const radios = [...form.querySelectorAll('input[type="radio"]')]
  const radio = radios.find(radio => radio.checked)
  console.log(radio.value) // returns radio value
})

const textArea = form.querySelector('textarea')
textArea.addEventListener('input', evt => {
  console.log(evt.target.value)
})
textArea.addEventListener('focus', evt => {
  console.log(evt.target.value)
})
textArea.addEventListener('blur', evt => {
  console.log(evt.target.value)
})

// To Do List

// ========================
// Functions
// ========================
const makeTaskElement = taskname => {
  const taskElement = document.createElement('li')
  taskElement.classList.add('task')
  const uniqueID = generateUniqueString(10)
  taskElement.innerHTML = DOMPurify.sanitize(`
    <input type="checkbox" id="${uniqueID}" />
    <label for="${uniqueID}">
      <svg viewBox="0 0 20 15">
        <path d="M0 8l2-2 5 5L18 0l2 2L7 15z" fill-rule="nonzero" />
      </svg>
    </label>
    <span class="task__name">${taskname}</span>
    <button type="button" class="task__delete-button">
      <svg viewBox="0 0 20 20">
        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
      </svg>
    </button>`)
  return taskElement
}

// ========================
// Execution
// ========================

const todolist = document.querySelector('.todolist')

todolist.addEventListener('submit', evt => {
  evt.preventDefault()

  // Add a new task
  // 1. Get what the user typed
  const newTaskField = todolist.querySelector('#new-task')
  const inputValue = newTaskField.value.trim()
  // console.log(inputValue)
  if (!inputValue) return // prevent adding empty task

  // 2. Create the task element
  const taskElement = makeTaskElement(inputValue)

  // 3. Add the task element into the DOM
  const taskList = todolist.querySelector('.todolist__tasks')
  todolist.addEventListener('submit', evt => {
    taskList.appendChild(taskElement)
  })

  // 4. After submission
  newTaskField.value = '' // clear the new task field
  newTaskField.focus() // bring focus back to input field after entry

  // 5. Delete a task
  todolist.addEventListener('click', evt => {
    if (!evt.target.matches('.task__delete-button')) { return }

    const taskElement = evt.target.parentElement

    // Removes the task
    taskList.removeChild(taskElement)

    // Triggers empty state
    if (taskList.children.length === 0) {
      taskList.innerHTML = ''
    }
  })
})

// Typeahead

// ========================
// Variables
// ========================

// List of countries.
// Scroll past this list to code.
const countries = [
  { name: 'Afghanistan' },
  { name: 'Aland Islands' },
  { name: 'Albania' },
  { name: 'Algeria' },
  { name: 'American Samoa' },
  { name: 'Andorra' },
  { name: 'Angola' },
  { name: 'Anguilla' },
  { name: 'Antarctica' },
  { name: 'Antigua and Barbuda' },
  { name: 'Argentina' },
  { name: 'Armenia' },
  { name: 'Aruba' },
  { name: 'Australia' },
  { name: 'Austria' },
  { name: 'Azerbaijan' },
  { name: 'Bahamas' },
  { name: 'Bahrain' },
  { name: 'Bangladesh' },
  { name: 'Barbados' },
  { name: 'Belarus' },
  { name: 'Belgium' },
  { name: 'Belize' },
  { name: 'Benin' },
  { name: 'Bermuda' },
  { name: 'Bhutan' },
  { name: 'Bolivia' },
  { name: 'Bonaire, Sint Eustatius and Saba' },
  { name: 'Bosnia and Herzegovina' },
  { name: 'Botswana' },
  { name: 'Bouvet Island' },
  { name: 'Brazil' },
  { name: 'British Indian Ocean Territory' },
  { name: 'United States Minor Outlying Islands' },
  { name: 'Virgin Islands (British)' },
  { name: 'Virgin Islands (U.S.)' },
  { name: 'Brunei Darussalam' },
  { name: 'Bulgaria' },
  { name: 'Burkina Faso' },
  { name: 'Burundi' },
  { name: 'Cambodia' },
  { name: 'Cameroon' },
  { name: 'Canada' },
  { name: 'Cabo Verde' },
  { name: 'Cayman Islands' },
  { name: 'Central African Republic' },
  { name: 'Chad' },
  { name: 'Chile' },
  { name: 'China' },
  { name: 'Christmas Island' },
  { name: 'Cocos (Keeling) Islands' },
  { name: 'Colombia' },
  { name: 'Comoros' },
  { name: 'Congo' },
  { name: 'Congo (Democratic Republic of the)' },
  { name: 'Cook Islands' },
  { name: 'Costa Rica' },
  { name: 'Croatia' },
  { name: 'Cuba' },
  { name: 'Curaçao' },
  { name: 'Cyprus' },
  { name: 'Czech Republic' },
  { name: 'Denmark' },
  { name: 'Djibouti' },
  { name: 'Dominica' },
  { name: 'Dominican Republic' },
  { name: 'Ecuador' },
  { name: 'Egypt' },
  { name: 'El Salvador' },
  { name: 'Equatorial Guinea' },
  { name: 'Eritrea' },
  { name: 'Estonia' },
  { name: 'Ethiopia' },
  { name: 'Falkland Islands (Malvinas)' },
  { name: 'Faroe Islands' },
  { name: 'Fiji' },
  { name: 'Finland' },
  { name: 'France' },
  { name: 'French Guiana' },
  { name: 'French Polynesia' },
  { name: 'French Southern Territories' },
  { name: 'Gabon' },
  { name: 'Gambia' },
  { name: 'Georgia' },
  { name: 'Germany' },
  { name: 'Ghana' },
  { name: 'Gibraltar' },
  { name: 'Greece' },
  { name: 'Greenland' },
  { name: 'Grenada' },
  { name: 'Guadeloupe' },
  { name: 'Guam' },
  { name: 'Guatemala' },
  { name: 'Guernsey' },
  { name: 'Guinea' },
  { name: 'Guinea-Bissau' },
  { name: 'Guyana' },
  { name: 'Haiti' },
  { name: 'Heard Island and McDonald Islands' },
  { name: 'Holy See' },
  { name: 'Honduras' },
  { name: 'Hong Kong' },
  { name: 'Hungary' },
  { name: 'Iceland' },
  { name: 'India' },
  { name: 'Indonesia' },
  { name: "Côte d'Ivoire" },
  { name: 'Iran (Islamic Republic of)' },
  { name: 'Iraq' },
  { name: 'Ireland' },
  { name: 'Isle of Man' },
  { name: 'Israel' },
  { name: 'Italy' },
  { name: 'Jamaica' },
  { name: 'Japan' },
  { name: 'Jersey' },
  { name: 'Jordan' },
  { name: 'Kazakhstan' },
  { name: 'Kenya' },
  { name: 'Kiribati' },
  { name: 'Kuwait' },
  { name: 'Kyrgyzstan' },
  { name: "Lao People's Democratic Republic" },
  { name: 'Latvia' },
  { name: 'Lebanon' },
  { name: 'Lesotho' },
  { name: 'Liberia' },
  { name: 'Libya' },
  { name: 'Liechtenstein' },
  { name: 'Lithuania' },
  { name: 'Luxembourg' },
  { name: 'Macao' },
  { name: 'Macedonia (the former Yugoslav Republic of)' },
  { name: 'Madagascar' },
  { name: 'Malawi' },
  { name: 'Malaysia' },
  { name: 'Maldives' },
  { name: 'Mali' },
  { name: 'Malta' },
  { name: 'Marshall Islands' },
  { name: 'Martinique' },
  { name: 'Mauritania' },
  { name: 'Mauritius' },
  { name: 'Mayotte' },
  { name: 'Mexico' },
  { name: 'Micronesia (Federated States of)' },
  { name: 'Moldova (Republic of)' },
  { name: 'Monaco' },
  { name: 'Mongolia' },
  { name: 'Montenegro' },
  { name: 'Montserrat' },
  { name: 'Morocco' },
  { name: 'Mozambique' },
  { name: 'Myanmar' },
  { name: 'Namibia' },
  { name: 'Nauru' },
  { name: 'Nepal' },
  { name: 'Netherlands' },
  { name: 'New Caledonia' },
  { name: 'New Zealand' },
  { name: 'Nicaragua' },
  { name: 'Niger' },
  { name: 'Nigeria' },
  { name: 'Niue' },
  { name: 'Norfolk Island' },
  { name: 'North Korea' },
  { name: 'Northern Mariana Islands' },
  { name: 'Norway' },
  { name: 'Oman' },
  { name: 'Pakistan' },
  { name: 'Palau' },
  { name: 'Palestine, State of' },
  { name: 'Panama' },
  { name: 'Papua New Guinea' },
  { name: 'Paraguay' },
  { name: 'Peru' },
  { name: 'Philippines' },
  { name: 'Pitcairn' },
  { name: 'Poland' },
  { name: 'Portugal' },
  { name: 'Puerto Rico' },
  { name: 'Qatar' },
  { name: 'Republic of Kosovo' },
  { name: 'Réunion' },
  { name: 'Romania' },
  { name: 'Russian Federation' },
  { name: 'Rwanda' },
  { name: 'Saint Barthélemy' },
  { name: 'Saint Helena, Ascension and Tristan da Cunha' },
  { name: 'Saint Kitts and Nevis' },
  { name: 'Saint Lucia' },
  { name: 'Saint Martin (French part)' },
  { name: 'Saint Pierre and Miquelon' },
  { name: 'Saint Vincent and the Grenadines' },
  { name: 'Samoa' },
  { name: 'San Marino' },
  { name: 'Sao Tome and Principe' },
  { name: 'Saudi Arabia' },
  { name: 'Senegal' },
  { name: 'Serbia' },
  { name: 'Seychelles' },
  { name: 'Sierra Leone' },
  { name: 'Singapore' },
  { name: 'Sint Maarten' },
  { name: 'Slovakia' },
  { name: 'Slovenia' },
  { name: 'Solomon Islands' },
  { name: 'Somalia' },
  { name: 'South Africa' },
  { name: 'South Georgia and the South Sandwich Islands' },
  { name: 'South Korea' },
  { name: 'South Sudan' },
  { name: 'Spain' },
  { name: 'Sri Lanka' },
  { name: 'Sudan' },
  { name: 'Suriname' },
  { name: 'Svalbard and Jan Mayen' },
  { name: 'Swaziland' },
  { name: 'Sweden' },
  { name: 'Switzerland' },
  { name: 'Syrian Arab Republic' },
  { name: 'Taiwan' },
  { name: 'Tajikistan' },
  { name: 'Tanzania, United Republic of' },
  { name: 'Thailand' },
  { name: 'Timor-Leste' },
  { name: 'Togo' },
  { name: 'Tokelau' },
  { name: 'Tonga' },
  { name: 'Trinidad and Tobago' },
  { name: 'Tunisia' },
  { name: 'Turkey' },
  { name: 'Turkmenistan' },
  { name: 'Turks and Caicos Islands' },
  { name: 'Tuvalu' },
  { name: 'Uganda' },
  { name: 'Ukraine' },
  { name: 'United Arab Emirates' },
  { name: 'United Kingdom' },
  { name: 'United States' },
  { name: 'Uruguay' },
  { name: 'Uzbekistan' },
  { name: 'Vanuatu' },
  { name: 'Venezuela' },
  { name: 'Vietnam' },
  { name: 'Wallis and Futuna' },
  { name: 'Western Sahara' },
  { name: 'Yemen' },
  { name: 'Zambia' },
  { name: 'Zimbabwe' }
]

// Showing a list of predictions
// 1. Find out what the user typed
const typeahead = document.querySelector('.typeahead')
const input = typeahead.querySelector('input')
const ul = typeahead.querySelector('ul')

input.addEventListener('input', evt => {
  // Get what the user typed
  const input = evt.target
  const inputValue = input.value.trim().toLowerCase()
  // console.log(inputValue)

  // Hides list if user typed nothing
  // (or empties input field)
  if (!inputValue) return ul.setAttribute('hidden', true)

  // 2. Filter countries according to what they typed
  const matches = countries.filter(country => {
    const name = country.name.toLowerCase()
    return name.startsWith(inputValue)
  })
  // console.log(matches)

  // 3. Make HTML elements for each prediction
  // Create an array of <li> elements by running matches with a map function
  const listItems = matches.map(country => {
    // Bolds search terms
    return `<li>${boldSearchTerms(country.name, inputValue)}</li>`
    // extract the country's name from each country object (from the countries array of objects)
  })
    .join('') // use join to create the innerHTML for <ul>
  // console.log(listItems)

  // 4. Show the list
  // To show the list, we set the <ul>'s innerHTML to listItems.
  ul.innerHTML = listItems
  ul.removeAttribute('hidden') // then display the list by removing the hidden attribute
})

// Selecting a prediction
// If the user clicks a prediction, we want to replace the input value with the prediction.
ul.addEventListener('click', evt => {
  if (!evt.target.matches('li')) return // To do this, we listen for a click event on the <ul> element. (Event delegation pattern).
  // We want to get the name of the country in the <li>. We can get the name with textContent.
  const li = evt.target
  const countryName = li.textContent
  // console.log(countryName)

  // Then, we replace the input field’s value with the country’s name.
  input.value = countryName

  // The list of predictions is redundant now since the user has made a choice so we’ll hide the list.
  ul.setAttribute('hidden', true)
})

// Hiding list of predictions
document.addEventListener('click', evt => {
  if (!evt.target.closest('.typeahead')) {
    ul.setAttribute('hidden', true)
  }
})

const boldSearchTerms = (string, searchTerms) => {
  const length = searchTerms.length
  const toBold = string.substring(0, length)
  const restOfString = string.substring(length)
  return `<strong>${toBold}</strong>${restOfString}`
}

// Date & Time

const today = new Date()
const day = today.getDate()
const month = today.getMonth() + 1
const year = today.getFullYear()
const monthsInAYear = [
  { shortname: 'Jan', longname: 'January' },
  { shortname: 'Feb', longname: 'February' },
  { shortname: 'Mar', longname: 'March' },
  { shortname: 'Apr', longname: 'April' },
  { shortname: 'May', longname: 'May' },
  { shortname: 'Jun', longname: 'June' },
  { shortname: 'Jul', longname: 'July' },
  { shortname: 'Aug', longname: 'August' },
  { shortname: 'Sep', longname: 'September' },
  { shortname: 'Oct', longname: 'October' },
  { shortname: 'Nov', longname: 'November' },
  { shortname: 'Dec', longname: 'December' }
]
const longMonth = monthsInAYear[today.getMonth()].longname // January
const shortMonth = monthsInAYear[today.getMonth()].shortname // Jan
const daysInAWeek = [
  { shortname: 'Sun', longname: 'Sunday' },
  { shortname: 'Mon', longname: 'Monday' },
  { shortname: 'Tue', longname: 'Tuesday' },
  { shortname: 'Wed', longname: 'Wednesday' },
  { shortname: 'Thu', longname: 'Thursday' },
  { shortname: 'Fri', longname: 'Friday' },
  { shortname: 'Sat', longname: 'Saturday' }
]
const shortDay = daysInAWeek[today.getDay()].shortname // Wed
const longDay = daysInAWeek[today.getDay()].longname // Wednesday
const dateSuffix = {
  1: 'st',
  2: 'nd',
  3: 'rd',
  4: 'th',
  5: 'th',
  6: 'th',
  7: 'th',
  8: 'th',
  9: 'th',
  10: 'th',
  11: 'th',
  12: 'th',
  13: 'th',
  14: 'th',
  15: 'th',
  16: 'th',
  17: 'th',
  18: 'th',
  19: 'th',
  20: 'th',
  21: 'st',
  22: 'nd',
  23: 'rd',
  24: 'th',
  25: 'th',
  26: 'th',
  27: 'th',
  28: 'th',
  29: 'th',
  30: 'th',
  31: 'st'
}
daySuffix = dateSuffix[day]

const dateString1 = `${day}/${month}/${year}`
const dateString2 = `${month}/${day}/${year}`
const dateString3 = `${day} ${shortMonth}, ${year}`
const dateString4 = `${day} ${shortMonth}, ${shortDay}`
const dateString5 = `${longDay}, ${day} ${longMonth}, ${year}`
const dateString6 = `${day}${daySuffix} ${longMonth}, ${year}`
console.log(dateString1)
console.log(dateString2)
console.log(dateString3)
console.log(dateString4)
console.log(dateString5)
console.log(dateString6)

const time = new Date()
const hours = time.getHours()
const minutes = time.getMinutes()
const seconds = time.getSeconds()
const milliseconds = time.getMilliseconds()
const timeNow = `${hours}:${minutes}:${seconds}.${milliseconds}`
console.log(timeNow)
const timeOfDay = {
  1: 'am',
  2: 'am',
  3: 'am',
  4: 'am',
  5: 'am',
  6: 'am',
  7: 'am',
  8: 'am',
  9: 'am',
  10: 'am',
  11: 'am',
  12: 'am',
  13: 'pm',
  14: 'pm',
  15: 'pm',
  16: 'pm',
  17: 'pm',
  18: 'pm',
  19: 'pm',
  20: 'pm',
  21: 'pm',
  22: 'pm',
  23: 'pm',
  24: 'pm'
}
const hourSuffix = timeOfDay[hours]
const timeNow2 = `${hours}:${minutes}${hourSuffix}`
console.log(timeNow2)

const date = new Date('2019-06-23T08:00')
console.log(date)
date.setMinutes(59)
console.log(date)
date.setHours(22)
console.log(date)
date.setDate(15)

// Exercise
// Use toLocaleString to create the following date formats:
const newDate = new Date(2019, 0, 3)

// 1. Thu, 03/01/2019
const option1 = {
  weekday: 'short',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}
console.log(newDate.toLocaleString('en-GB', option1))
// 2. January 2019
const option2 = {
  month: 'long',
  year: 'numeric'
}
console.log(newDate.toLocaleString('en-GB', option2))
// 3. 3 January 2019
const option3 = {
  day: 'numeric',
  month: 'long',
  year: 'numeric'
}
console.log(newDate.toLocaleString('en-GB', option3))
// 4. Jan 3 2019
const option4 = {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
}
console.log(newDate.toLocaleString('en-US', option4))
// 5. 2019 - 03 - 02
const option5 = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
}
console.log(newDate.toLocaleString('en-GB', option5))

// DATEPICKER

// ========================
// Variables
// ========================
const dpDate = new Date(2019, 1, 13)
const dpForm = document.querySelector('.dp')
const dpInput = dpForm.querySelector('input')

// ========================
// Utility functions
// ========================
/**
 * Converts datetime into a Date object
 * @param {String} datetime - datetime attribute from <time> element
 */
const dateTimeToDate = datetime => {
  // const [dpYear, dpMonth, dpDay] = datetime.split('-').map(num => parseInt(num))
  const [dpYear, dpMonth, dpDay = 1] = datetime.split('-')
    .map(num => parseInt(num))
  // console.log(dpYear) // 2019
  // console.log(dpMonth) // 02
  // console.log(dpDay) // 05

  // return day
  //   ? new Date(dpYear, dpMonth - 1, dpDay)
  //   : new Date(dpYear, dpMonth - 1)
  return new Date(dpYear, dpMonth - 1, dpDay)
}
// dateTimeToDate('2019-02-05')

// console.log(dateTimeToDate('2019-02')) // Invalid Date
// console.log(dateTimeToDate('2019-02-03')) // February 3rd, 2019

/**
 * Creates a number string with two digits.
 * @param {Number} number
 */
const toTwoDigitString = number => {
  return number.toString().padStart(2, '0')
}

/**
 * Creates the innerHTML for the date grid.
 * @param {Date} dpDate - Date object
 * @returns {String}
 */
const createDateGridHTML = dpDate => {
  // return 'HTML string that contains all date buttons'
  const dateGrid = document.createElement('div')
  const dpMonth = dpDate.getMonth()
  const dpYear = dpDate.getFullYear()
  const dpDay = dpDate.getDate()

  // First day of the month - to get it, use setDate and set the date to 1.
  // Then use getDay to know which day it is
  const firstDayOfMonth = new Date(dpDate.setDate(1)).getDay()

  // Number of days in a month
  const lastDayInMonth = new Date(dpYear, dpMonth + 1, 0)
  const daysInMonth = lastDayInMonth.getDate()
  const dpMonthNumber = (dpMonth + 1).toString().padStart(2, '0')

  // Building the date grid
  // We can use the daysInMonth value to create one button for each day of the month using a for loop
  for (let day = 1; day <= daysInMonth; day++) {
    const button = document.createElement('button')
    button.setAttribute('type', 'button')

    if (day === 1) button.style.setProperty('--firstDayOfMonth', firstDayOfMonth + 1)

    const dateTimeDay = toTwoDigitString(day)

    button.innerHTML = `<time datetime="${dpYear}-${dpMonthNumber}-${dateTimeDay}">${day}</time>`

    dateGrid.appendChild(button)
  }
  return dateGrid.innerHTML
}

/**
 * Create <time> for the year-month-indicator
 * @param {Date} dpDate - Date object
 */
const createYearMonthIndicatorTimeElement = dpDate => {
  const monthsInAYear = [
    { shortname: 'Jan', longname: 'January' },
    { shortname: 'Feb', longname: 'February' },
    { shortname: 'Mar', longname: 'March' },
    { shortname: 'Apr', longname: 'April' },
    { shortname: 'May', longname: 'May' },
    { shortname: 'Jun', longname: 'June' },
    { shortname: 'Jul', longname: 'July' },
    { shortname: 'Aug', longname: 'August' },
    { shortname: 'Sep', longname: 'September' },
    { shortname: 'Oct', longname: 'October' },
    { shortname: 'Nov', longname: 'November' },
    { shortname: 'Dec', longname: 'December' }
  ]
  // const longMonth = monthsInAYear[dpDate.getMonth()].longname // January
  // const shortMonth = monthsInAYear[dpDate.getMonth()].shortname // Jan
  // console.log (longMonth + ' - ' shortMonth)

  // The year-month indicator
  // Get February from the date. We can get February if we create an array of months (see reference above 'monthsInAYear' )
  const dpMonth = dpDate.getMonth()
  const dpMonthName = monthsInAYear[dpMonth]
  // console.log(dpMonthName.longname)

  // We want to get a 4-digit year. We can use getFullYear.
  const dpYear = dpDate.getFullYear()

  // Once we know year and monthName, we can create the HTML.
  // To get the correct month value, we can add 1 to month, then convert to String and use a string method called 'padStart' to make the string length '2' in order to add up to # of characters before the initial value
  // const dpMonthNumber = (dpMonth + 1).toString().padStart(2, '0')
  const dpMonthNumber = toTwoDigitString(dpMonth + 1)

  // Update Text content and date time attribute
  return `
    <time datetime="${dpYear}-${dpMonthNumber}"> ${dpMonthName.longname} ${dpYear}</time>
  `
}

/**
 * Creates the datepicker
 * @param {HTMLElement} dpInput - the input element
 * @param {Date} dpDate - Date object
 */
const createDatePicker = (dpInput, dpDate) => {
  const datepicker = document.createElement('div')
  datepicker.classList.add('datepicker')

  const previousNextMonthButtons = `
    <div class="datepicker__buttons">
      <button type="button" class="datepicker__previous">
          <svg viewBox="0 0 20 20">
              <path fill="currentColor" d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z" />
          </svg>
      </button>
      <button type="button" class="datepicker__next">
          <svg viewBox="0 0 20 20">
              <path fill="currentColor" d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
          </svg>
      </button>
    </div>
  `
  // Building the calendar
  const calendar = `
    <!--The month/year indicator-->
    <div class="datepicker__calendar">
      <div class="datepicker__year-month">
        ${createYearMonthIndicatorTimeElement(dpDate)}
      </div>
      <div class="datepicker__day-of-week">
          <div>Su</div>
          <div>Mo</div>
          <div>Tu</div>
          <div>We</div>
          <div>Th</div>
          <div>Fr</div>
          <div>Sa</div>
      </div>
      <div class="datepicker__date-grid">
        ${createDateGridHTML(dpDate)}
      </div>
    </div>
  `

  datepicker.innerHTML = `
    ${previousNextMonthButtons}
    ${calendar}
  `
  // Hides the Date Picker by default
  datepicker.setAttribute('hidden', true)

  // Positioning the Date Picker
  /**
   *
  * Vertical Rhythm
  * If you research into design, you may have come across a term called Vertical Rhythm. It’s a way to make your website look clean and professional.
  *
  * The idea is you create whitespace that are consistent with your typography. And you use this multiple across your site. This uses the rule of repetition to create a sense of harmony and familiarity.
  *
  * Read more about Vertical Rhythm in this article: https://zellwk.com/blog/why-vertical-rhythms/ (and I even wrote a course about Typography - https://mastering-responsive-typography.com/ that covers what you need to know in detail).
  *
  * In this case, the font-size of this page is 20px. If we want to follow Vertical Rhythm, we can get and use this size from the page.
  *
  * We’ll do this with getComputedStyle.
  */
  const styles = getComputedStyle(document.body)
  const fontSize = parseFloat(styles['font-size'])
  console.log(fontSize) // 20px => 20

  const dpInputRect = dpInput.getBoundingClientRect()
  datepicker.style.left = `${dpInputRect.left}px`
  // datepicker.style.top = `${dpInputRect.bottom + 20}px`
  datepicker.style.top = `${dpInputRect.bottom + fontSize}px`

  const previousNextButtons = datepicker.querySelector('.datepicker__buttons')
  const dategrid = datepicker.querySelector('.datepicker__date-grid')

  // ========================
  // Functions
  // ========================
  /**
     * Gets a Date object from the Year Month indicator
     * @returns {Date}
     */
  const getDateFromYearMonthIndicator = _ => {
    // Find out the currently selected month and return
    const time = datepicker.querySelector('.datepicker__year-month').firstElementChild
    const datetime = time.getAttribute('datetime')
    // console.log(datetime) // returns 2019-02
    // currentDate = new Date(datetime)
    // console.log(currentDate) // returns Thu Jan 31 2019 19:00:00 GMT-0500 (Eastern Standard Time)
    // const currentDate = dateTimeToDate(datetime)
    return dateTimeToDate(datetime)
  }

  // ========================
  // Event listeners
  // ========================

  // Changing the year-month indicator
  previousNextButtons.addEventListener('click', evt => {
    if (!evt.target.matches('button')) return
    const currentDate = getDateFromYearMonthIndicator()

    const dpYear = currentDate.getFullYear()
    const dpMonth = currentDate.getMonth()

    // Finds the previous of next month
    const targetDate = evt.target.matches('.datepicker__previous')
      ? new Date(dpYear, dpMonth - 1)
      : new Date(dpYear, dpMonth + 1)

    // Update the date-grid
    // const dategrid = datepicker.querySelector('.datepicker__date-grid')
    const yearMonthIndicator = datepicker.querySelector('.datepicker__year-month')
    yearMonthIndicator.innerHTML = createYearMonthIndicatorTimeElement(targetDate)
    dategrid.innerHTML = createDateGridHTML(targetDate)
  })

  dategrid.addEventListener('click', evt => {
    // Highlighting the selected date
    if (!evt.target.matches('button')) return // using the event delegation pattern to listen for only when a button is clicked
    const button = evt.target
    const buttons = [...button.parentElement.children]

    // Showing the highlighted class on the clicked button and removing class from all others
    buttons.forEach(button => button.classList.remove('is-selected'))
    button.classList.add('is-selected')

    // Figuring out what date is selected
    const time = button.firstElementChild
    const datetime = time.getAttribute('datetime')
    const selectedDate = dateTimeToDate(datetime)
    // console.log(selectedDate) // Returns Wed Feb 27 2019 00:00:00 GMT-0500 (Eastern Standard Time)

    // Formatting the input field to print to MM/DD/YYYY
    const year = selectedDate.getFullYear()
    const month = toTwoDigitString(selectedDate.getMonth() + 1)
    const day = toTwoDigitString(selectedDate.getDate())
    const formatted = `${month}/${day}/${year}`
    // console.log(formatted) // // 02/27/2019

    // Displaying the formatted date
    dpInput.value = formatted
  })

  // Shows the Datepicker
  dpInput.addEventListener('click', evt => {
    datepicker.removeAttribute('hidden')
  })

  // Hides the Datepicker
  document.addEventListener('click', evt => {
    if (evt.target.closest('.datepicker')) return
    if (evt.target.closest('input') === dpInput) return
    datepicker.setAttribute('hidden', true)
  })

  return datepicker
}

// ========================
// Execution
// ========================

// Add the datepicker into the DOM
// dpForm.appendChild(createDatePicker(dpInput, dpDate))
document.body.appendChild(createDatePicker(dpInput, dpDate))
