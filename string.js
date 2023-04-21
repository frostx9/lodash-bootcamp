const _ = require("lodash")

// To Upper Case
const upper = _.toUpper("hello world")
console.log(upper) // HELLO WORLD

// To Lower Case

const lower = _.toLower("hello world")
console.log(lower) // hello world

// To Upper Case Based On Upper latter
const upper1 = _.upperCase("iLike+Programing")
console.log(upper1) //I LIKE PROGRAMING


// To Lower Case Based On Upper latter
const lower1 = _.lowerCase("**I**LIKE**PROGRAMING")
console.log(lower1) //i like programing

// To Upper First On Every String first latter
const upper2 = _.upperFirst("i like programing")
console.log(upper2) // I like programing

// To Lower First On Every String first latter
const lower2 = _.lowerFirst("I Like Programing")
console.log(lower2) // i Like Programing