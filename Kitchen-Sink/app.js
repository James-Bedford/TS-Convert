/* First js lab
 */
let name = `James`;
const usStates = 51;
let sum = 5 + 4;
console.log(name, usStates, sum); //code returns the above variables

function sayHello() {
  return alert(`Hello World`);
}

sayHello();

function checkAge(name, age) {
  if (age < 21) {
    //return alert(`Sorry ${name}, you aren't old enough to view this page!`);
    return console.log(
      `Sorry ${name}, you arent' you aren't old enough to view this page!`
    );
  } else {
    //return alert(`Welcome ${name}!`);
    return console.log(`Welcome ${name}!`);
  }
}

/*
checkAge(`Charles`, 21);
checkAge(`Abby`, 27);
checkAge(`James`, 18);
checkAge(`John`, 17);
*/
let favouriteVeg = [`Potatoes`, `Cauliflower`, `Brocoli`, `Sprouts`, `Beans`];

for (let i = 0; i < favouriteVeg.length; i++) {
  console.log(favouriteVeg[i]);
}

let pet = { name: ``, breed: `` };
pet = {
  name: `Molly`,
  breed: `Dashund`,
};

console.log(pet);

let person = [
  { name: `James`, age: 21 },
  { name: `Sarah`, age: 18 },
  { name: `John`, age: 17 },
  { name: `Molly`, age: 21 },
  { name: `David`, age: 25 },
];

//checkAge(person.name,person.age)
for (let i in person) {
  checkAge(person[i].name, person[i].age);
}

function getLength(a) {
  let foo = a.length;
  if (foo % 2 === 0) {
    console.log(`The world is nice and even!`);
  } else {
    console.log(`The world is an odd place!`);
  }
}

getLength(`Hello World`);
