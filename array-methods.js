/*
Use the forEach method to add the name of each planet
to a section element in your HTML with an id of "planets".
Use string templates to construct the DOM elements.
*/
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]


const planetEl = document.getElementById("planets")
const youEll = document.createElement("ul")

const myFunction = function (key) {
    let ellEye = document.createElement("li")
    ellEye.textContent = `${[key]}`
    youEll.appendChild(ellEye)
}
planetEl.appendChild(youEll)

planets.forEach(myFunction)

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const upperCaseArray = planets.map(function (planet) {
    let itsUpperCase = planet.charAt(0).toUpperCase() + planet.slice(1)
    return itsUpperCase
})

console.log(upperCaseArray)



/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const ePlanets = planets.filter(planet => planet.includes("e"))
const planetSentence = ePlanets.reduce(
    (currentList, next) => currentList + ", " + next
)

console.log(`By the way, ${planetSentence} are the planets that contain the letter e`)






// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const sentence = words.reduce(
    (currentSentence, next) => currentSentence + " " + next  
)
console.log(sentence)