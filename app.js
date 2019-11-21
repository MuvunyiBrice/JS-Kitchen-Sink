let name = "brice";

// Number of provinces
const provinces = 4;

let sum = 5 + 4;

let veggies = ["Carrots", "Brocos", "Lettuce", "Cannabis"];

let objects = [
  {
    name: "Logan",
    age: 125
  },
  {
    name: "Lou",
    age: 12
  },
  {
    name: "Megan",
    age: 21
  },
  {
    name: "Clint",
    age: 38
  }
];

const sayHello = () => alert("Hello, World!");
sayHello();

const checkAge = (name, age) => {
  if (age < 21) {
    alert(`Sorry ${name}, you aren't old enough to view this page!`);
  }
};

checkAge("Roger", 21);
checkAge("Chris", 27);
checkAge("Lis", 18);
checkAge("Jay", 17);

veggies.forEach(element => {
  console.log(element);
});

objects.forEach(element => {
  checkAge(element.name, element.age);
});

const getLength = word => word.length;

let wordLength = getLength("Hello, World!");

wordLength % 2 == 0
  ? console.log("The world is nice and even!")
  : console.log("The world is an odd place!");
