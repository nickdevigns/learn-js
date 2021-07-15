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
  if (evt.target.closest('.modal')) {
    evt.stopPropagation() // Stop event from bubbling - prevent the modal from closing when clicking inside modal
  } else {
    body.classList.remove('modal-is-open') // Close Modal
  }

  // // Easier way to write the code above
  // if (!evt.target.closest('.modal')) {
  //   body.classList.remove('modal-is-open')
  // }
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
// First argument (0): Start at index 0.
// Second argument (2): Delete 2 items.
console.log(pets) // ['Shelby']
pets.splice(1, 0, 'Finley', 'Sammy') // Adds Finley and Sammy after the first pet, Shelby
// First argument (1): Start at index 1.
// Second argument (0): Delete 0 items.
// Third and fourth argument: Items we want to add.
console.log(pets) // ['Shelby','Finley','Sammy']
pets.splice(pets.length - 2, 2) // Removes Finley and Sammy from the end of the array
// First argument (pets.length - 2): Modifies the array at index pets.length - 2, which is 3 - 2 = 1. So we remove items from second item onwards.
// Second argument (2): Delete 2 items.
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

// Add Charles Darwin and Walt Disney to the end of the list.
const peopleCP1 = people.slice() // copy previous Array
// people.push('Charles Darwin', 'Walt Disney')
peopleCP1.splice(peopleCP1.length, 0, 'Charles Darwin', 'Walt Disney')
console.log(peopleCP1)

// Add Pablo Picasso and Ludwig van Beethoven after Mahatma Gandhi. Use splice.
const peopleCP2 = peopleCP1.slice() // copy previous Array
const gandhiIndex = peopleCP2.indexOf('Mahatma Gandhi')
console.log(gandhiIndex)
peopleCP2.splice(gandhiIndex + 1, 0, 'Pablo Picasso', 'Ludwig van Beethoven')
console.log(peopleCP2)

// Remove Benjamin Franklin and Thomas Edison
const peopleCP3 = peopleCP2.slice() // copy previous Array
peopleCP3.splice(2, 2)
console.log(peopleCP3)

// Remove Napoleon Bonaparte and Abraham Lincoln
const peopleCP4 = peopleCP3.slice() // copy previous Array
peopleCP4.splice(peopleCP4.length - 4, 2)
console.log(peopleCP4)

// Remove Mahatma Gandhi with splice
const peopleCP5 = peopleCP4.slice() // copy previous Array
const gandhiIDX = peopleCP5.indexOf('Mahatma Gandhi')
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

  // Create a new array (multipliedBy5Numbers). Multiply all numbers by 5 and put them into the new array.
  multipliedBy5Numbers.push(num * 5)
}

console.log(newNumbers)
console.log(multipliedBy5Numbers)

const people2 = [
  { firstName: 'Benjamin', lastName: 'Franklin', yearOfDeath: 1790 },
  { firstName: 'Thomas', lastName: 'Edison', yearOfDeath: 1931 },
  { firstName: 'Franklin', lastName: 'Roosevelt', yearOfDeath: 1945 },
  { firstName: 'Napolean', lastName: 'Bonaparte', yearOfDeath: 1821 },
  { firstName: 'Abraham', lastName: 'Lincoln', yearOfDeath: 1865 },
  { firstName: 'Mother', lastName: 'Theresa', yearOfDeath: 1962 },
  { firstName: 'Mahatma', lastName: 'Gandhi', yearOfDeath: 1948 },
  { firstName: 'Winston', lastName: 'Churchill', yearOfDeath: 1965 },
  { firstName: 'Charles', lastName: 'Darwin', yearOfDeath: 1882 },
  { firstName: 'Albert', lastName: 'Einstein', yearOfDeath: 1955 },
  { firstName: 'Pablo', lastName: 'Picasso', yearOfDeath: 1973 },
  { firstName: 'Ludwig', lastName: 'Beethoven', yearOfDeath: 1827 },
  { firstName: 'Walt', lastName: 'Disney', yearOfDeath: 1966 },
  { firstName: 'Henry', lastName: 'Ford', yearOfDeath: 1947 },
  { firstName: 'Steve', lastName: 'Jobs', yearOfDeath: 2012 }
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

// Find index of Charles Darwin in the array.
// array.forEach((currentValue, index, array) => {
// Your loop here
// })
let darwinIndex = -1
people2.forEach((person, index) => {
  if (person.lastName === 'Darwin') {
    darwinIndex = index
  }
})
console.log(darwinIndex)

const goodGuys = document.querySelectorAll('[data-type="hero"]')
Array.from(goodGuys).forEach(guy => guy.classList.add('yay'))

const villains = document.querySelectorAll('[data-type="villain"]')
Array.from(villains).forEach(villain => villain.classList.add('nay'))

const characterz = document.querySelectorAll('.characters')
Array.from(characterz).forEach(character => character.classList.add('star-wars'))

// Accordion
// // First accordion - could repeat for other 3 accordions but use a forEach loop instead
// const firstAccordion = document.querySelector('.accordion')
// const firstAccordionHeader = firstAccordion.querySelector('.accordion__header')
// firstAccordionHeader.addEventListener('click', evt => {
//   firstAccordion.classList.toggle('is-open')
// })

// const accordions = Array.from(document.querySelectorAll('.accordion'))
// accordions.forEach(accordion => {
//   // Find accordion header
//   const accordionHeader = accordion.querySelector('.accordion__header')
//   // Add event listener to the accordion header
//   accordionHeader.addEventListener('click', evt => {
//     // Open/close toggle for accordion (if close=>open=>close)
//     accordion.classList.toggle('is-open')
//   })
// })

// Alternative way to do the above function but with Event Delegation
const accordionContainer = document.querySelector('.accordion-container')
accordionContainer.addEventListener('click', evt => {
  // If the user clicked the accordion header or within, close the accordion
  const accordionHeader = evt.target.closest('.accordion__header')
  if (accordionHeader) {
    const accordion = accordionHeader.parentElement
    const accordionContent = accordionHeader.nextElementSibling
    const accordionInner = accordionContent.children[0]
    const foodPic = accordionInner.querySelector('svg')
    const foodText = accordionInner.querySelector('p')

    let height
    let top
    let opacity
    let left

    if (accordion.classList.contains('is-open')) {
      height = 0
      top = -50
      opacity = 0
      left = 150
    } else {
      height = accordionInner.getBoundingClientRect().height
      top = 0
      opacity = 1
      left = 0
    }

    accordion.classList.toggle('is-open') // add or remove the 'is-open' class to the parent element of the accordion header in order to open/close
    accordionContent.style.height = height + 'px'
    foodPic.style.top = top + 'px'
    foodPic.style.opacity = opacity
    foodText.style.left = left + 'px'

    // const tl = new TimelineMax({})
    // tl.from(accordion, 0.5, { ease: 'power4.out', opacity: 0 })
    // tl.from(foodPic, 0.5, { ease: 'Bounce.easeOut', y: -50 })
    // tl.from(foodText, 0.5, { ease: 'expo.out', x: 150 })
  }
})

const clickMeBtn = document.querySelector('.toggler')
// Create a tween that moves an object from 200px from left to right.
// Float animation using TweenMax.method(element, duration, vars)
TweenMax.to(clickMeBtn, 2, { x: 200 })
// Create a tween that moves an object from 200px from top to bottom and turn an object invisible.
TweenMax.to(clickMeBtn, 2, { y: 200, delay: 2, opacity: 0 })

//
//
//
//
//
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
//
//
//
//
//
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
const LORhobbitsList = LORcharacters.querySelector('.hobbits')
const LORhobbitChildren = LORhobbitsList.children
// Select the Merry(the hobbit)
const merry = LORhobbitChildren[2]
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

// Tabby
const tabby = document.querySelector('.tabby')

// Select all tabs
const tabs = Array.from(document.querySelectorAll('.tab'))
const tabContents = Array.from(tabby.querySelectorAll('.tab-content'))

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
  // 2. Find the associated tab content
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
const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = carousel.querySelector('.carousel__contents')
const dots = Array.from(carousel.querySelectorAll('.carousel__dot'))
const slides = Array.from(carousel.querySelectorAll('.carousel__slide'))
const dotsContainer = carousel.querySelector('.carousel__dots')

nextButton.addEventListener('click', evt => {
  const currentSlide = contents.querySelector('.is-selected')
  // console.log(currentSlide)
  const nextSlide = currentSlide.nextElementSibling
  // console.log(nextSlide)
  const destination = getComputedStyle(nextSlide).left
  // console.log(destination) //800
  // contents.style.left = '-' + destination // 800-800=0
  contents.style.transform = 'translateX(-' + destination + ')' // replaced the above to animate the left transition
  currentSlide.classList.remove('is-selected')
  nextSlide.classList.add('is-selected')
  previousButton.removeAttribute('hidden') // shows previous button

  // Check for 1 more slide after the next slide
  // If no more slides, we know the next slide is the last slide and we hide the next button by adding the hidden attribute.
  if (!nextSlide.nextElementSibling) {
    nextButton.setAttribute('hidden', true)
  }

  // Highlight dot
  const currentDot = dotsContainer.querySelector('.is-selected')
  const nextDot = currentDot.nextElementSibling
  currentDot.classList.remove('is-selected')
  nextDot.classList.add('is-selected')
})

previousButton.addEventListener('click', evt => {
  const currentSlide = contents.querySelector('.is-selected')
  const previousSlide = currentSlide.previousElementSibling
  // console.log(previousSlide)
  const destination = getComputedStyle(previousSlide).left
  // contents.style.left = '-' + destination
  contents.style.transform = 'translateX(-' + destination + ')' // replaced the above to animate the left transition
  currentSlide.classList.remove('is-selected')
  previousSlide.classList.add('is-selected')

  nextButton.removeAttribute('hidden') // shows next button

  // Check for 1 more slide before the previous slide
  // If no more slides, we know the previous slide is the first slide and we hide the previous button by adding the hidden attribute.
  if (!previousSlide.previousElementSibling) {
    previousButton.setAttribute('hidden', true)
  }

  // Highlight dot
  const currentDot = dotsContainer.querySelector('.is-selected')
  const previousDot = currentDot.previousElementSibling
  currentDot.classList.remove('is-selected')
  previousDot.classList.add('is-selected')
})

dotsContainer.addEventListener('click', evt => {
  const dot = evt.target.closest('button')
  if (dot) {
    dot.addEventListener('click', evt => {
      // console.log(dot)
      // When a dot gets clicked, we need to find the corresponding slide
      let clickedDotIndex
      // loop through dots and check which dot was clicked
      for (let i = 0; i < dots.length; i++) {
        if (dots[i] === dot) {
          clickedDotIndex = i
        }
      }
      // console.log(clickedDotIndex) // returns 0,1,2

      // Once we know clickedDotIndex, we can use it to find the slide to show.
      const slideToShow = slides[clickedDotIndex]
      // console.log(slideToShow)

      // Once we know the slide to show, we can get its left position with getComputedStyle.
      const destination = getComputedStyle(slideToShow).left
      // console.log(destination) // 0px, 800px, 1600px

      // And we can show the slide by changing .carousel__content's left position.
      // contents.style.left = '-' + destination
      contents.style.transform = 'translateX(-' + destination + ')' // replaced the above to animate the left transition

      // After changing the selected slide, we need to update the location of the is-selected class, so we need to remove the is-selected class from all slides and add the is-selected class to the selected slide
      slides.forEach(slide => { slide.classList.remove('is-selected') })
      slideToShow.classList.add('is-selected')

      // Update the active/inactive dot styles
      dots.forEach(d => { d.classList.remove('is-selected') })
      dot.classList.add('is-selected')

      // Show/hide buttons
      if (clickedDotIndex === 0) {
        previousButton.setAttribute('hidden', true)
        nextButton.removeAttribute('hidden')
      } else if (clickedDotIndex === dots.length - 1) {
        previousButton.removeAttribute('hidden')
        nextButton.setAttribute('hidden', true)
      } else {
        previousButton.removeAttribute('hidden')
        nextButton.removeAttribute('hidden')
      }
    })
  }
})

// Positioning the slides
const slideWidth = slides[0].getBoundingClientRect().width

// slides[0].style.left = slideWidth * 0 + 'px' // First slide's left should be 0px
// slides[1].style.left = slideWidth * 1 + 'px' // Second slide’s left should be slideWidth
// slides[2].style.left = slideWidth * 2 + 'px' // Third slide’s left should be slideWidth x 2

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px'
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
