const _ = require("lodash")

// To Upper Case
const upper = _.toUpper("hello world")
console.log(upper)  // HELLO WORLD

// To Lower Case

const lower = _.toLower("hello world")
console.log(lower)  // hello world


// To Upper Case Based On Upper latter. It make Space Based on Upper letter. Omit Specail Charecter
const upper1 = _.upperCase("iLike+Programing")
console.log(upper1)  //I LIKE PROGRAMING


// To Lower Case Based On Upper latter and devide . Omit Specail Charecter
const lower1 = _.lowerCase("**I**LIKE**PROGRAMING")
console.log(lower1)  //i like programing


// To Upper First On Every String first latter. if first character is not a letter so string doesn't change :-)
const upper2 = _.upperFirst("i like programing")
console.log("upper2", upper2)  // I like programing


// To Lower First On Every String first latter. if first character is not a letter so string doesn't change :-)
const lower2 = _.lowerFirst("I Like Programing")
console.log(lower2)  // i Like Programing


// Capitalize Only first Letter and make other captial latter to small(first latter) . if first character is not a letter so string doesn't change :-)
const capt1 = _.capitalize("hello World")
const capt2 = _.capitalize("-hello World")
console.log(capt1)  // Hello world
console.log(capt2)  // -hello world


// Each of the word is capital latter. It also devide latter based capital latter. Omit Specail Charecter
const start1 = _.startCase("i like--programing")
const start2 = _.startCase("-i likePrograming")
console.log(start1) // I Like Programing
console.log(start2) // I Like Programing