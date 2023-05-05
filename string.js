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



// Give Space on Both Side of a string
const pad = _.pad("abc", 9, "-")
console.log("Pad", pad)



// Give Space on Begining Side of a string
const padB = _.padStart("abc", 5, "-")
console.log(padB);



// Give Space on End Side of a string
const padE = _.padEnd("abc", 5, "-")
console.log(padE);



// Remove Space and other char From String . Both Side. Second Option for telling which specaial cahr tobe removed
const trim = _.trim("--++%^trim", "-+%^")
console.log(trim)
//---- Chaing Trim With Other
const trimC = _.map([" hello ", " world"], _.trim)
console.log(trimC);



// Remove Space From other char String . Begin Side
const trimS = _.trimStart("++++hello", "+")
console.log(trimS)



// Remove Space From other char String . End Side
const trimE = _.trimEnd("++hello+", "+")
console.log(trimE)



//Camel Case . To make programing camelCase. Remove Space
const camel = _.camelCase("hello world")
console.log("Camel ->", camel);



//Snake Case. It give undersocre in space and change capital later to small later
const snake = _.snakeCase("Hello World")
console.log("Snake ->", snake);



//Kabeb Case. It give hi-fen in space and change capital later to small later
const Kabeb = _.kebabCase("Hello World")
console.log("Kabeb ->", Kabeb);



// Deburr. Remove. It removes diacritical marks
const deubb = _.deburr("Déjà vu")
console.log("Deubb ->", deubb); // Ans - Deja vu


//Escape - To Convert Html Equivalants
const escape = _.escape("this is <h1> a string </h1>")
console.log("Escape ->", escape) // Ans - this is &lt;h1&gt; a string &lt;/h1&gt