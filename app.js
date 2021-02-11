// function favMovie(movie = 'Avengers Endgame' , name = 'Austin'){
//     console.log(`My name is ${name}, and my favorite movie is ${movie}`);
// }
// favMovie();


// Arrow Functions

// let favMovie = (movie = 'Avengers Endgame' , name = 'Austin') => console.log(`My name is ${name}, and my favorite movie is ${movie}`);
// favMovie();

// let fullName = 'Austin Mann'
// let fullNameSplit = fullName.split(' ');
// let getFirstName = (str) => {
//     console.log(str[0]);
// };

// let getFirstNameConcise = (str) => console.log(str[0]);
// getFirstName(fullNameSplit);
// getFirstNameConcise(fullNameSplit);

// let doMath = (a,b) => ({
//     exp: a^b,
//     pro: a*b
// });
// let val1 = doMath(2,4).exp;
// let val2 = doMath(2,4).pro;

// console.log(`The exponent of two numbers will be ${val1}, and the product is ${val2}.`);



// Spread Syntax

let myfunc = (name,location,favFood) => console.log (`my name is ${name} , I'm from ${location} and my fav food is ${favFood} !`);

let arr = ['Austin','Trussville','Steak'];
myfunc(...arr);

let myName = 'Austin';
let mySecondFunc = (str) => {
    let strArray = [...str];
    for(let i=0;i<strArray.length;i++)
    {
        console.log(strArray[i]);
    }
};
mySecondFunc(myName);
