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
const button = document.querySelector('button')
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
