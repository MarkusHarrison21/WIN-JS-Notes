// -- ARRAYS -- //
// Data storage for a list of items 
//  []
// All arrays start at 0

// let teachers = ['Melissa', 'Yusuf', 'Luara', 'Markus', 'Tre'];
// console.log(teachers[1]);
// console.log(teachers[0]);
// teachers[0] //Melissa

// how to access items in an array
// nameOfArray [# of item in the array that you want]
//  zero-based (all arrays start at 0)

// let makrus = ['pizza', 19, 'Charlotte', null, 'frogs']
// console.log[1];

// -- ARRAY FUNCTIONS -- //

// .length() is go to return the length of the array (how many items it has)
// let teachers = ['bob', 'bill', 'bone']
// .length() chained to the end of the name of the array you want
// console.log(teachers.length);
// let amountOfTeachers = teachers.length;
// console.log(amountOfTeachers);

// -- Push & Pop -- //

// push - addds to the end of the array
// pop - removes form the end of the list
// changes the original array
// let teachers = ['bob', 'bill', 'bone']
// teachers.push('Markus');
// console.log(teachers);
// teachers.pop();
// console.log(teachers);

// -- Shift & UNSHIFT -- //

// unshift - adds to the beginning of the array
// shift - removes to the beginning of the array
// let teachers = ['bob', 'bill', 'bone'];
// teachers.unshift('Markus');
// console.log(teachers);
// teachers.shift();
// console.log(teachers);

// you can define an empty array and add to it later
// let students = [];
// students.push('Markus');
// console.log(students); 

// // arbitrary items to an array
// let teachers = ['bob', 'bill', 'bone', 'bono'];

// teachers[4] = "Marcus";
// console.log(teachers);
// teachers[2] = "Lydia";
// console.log(teachers);

// // template literals
// console.log('my list of students are: ${teachers}');

// FINDING AN ITEM
// let grades = [99,90,89,50];
// let failing = grades.indexOf(50);
// console.log(failing);

// let teachers = ['bob', 'bill', 'bone', 'bono'];
// console.log(teachers.indexOf('bono'));

// // SLICE
// // creates a brand new array containing the items you've sliced (removed)
// accepts two parameters (starting and ending)
// let animals = ['frogs', 'bats', 'giraffes', 'gorillas', 'lions', 'ladybug', 'alligator', 'parrot'];
// let newAnimals = animals.slice(2,4);
// console.log(newAnimals);
// console.log(animals);

// let otherAnimals = (2, animals.length);
// console.log(otherAnimals)


// SPLICE
// changes exisitng array
// accepts 3 parameters (starting ppint, amount wanted to remove, new items)
// let animals = ['frogs',
//     'bats',
//     'giraffes',
//     'gorillas',
//     'lions',
//     'ladybug',
//     'alligator',
//     'parrot'
// ];

// animals.splice(2,3, 'hedgehog', 'sharks', 'camels');
// console.log(animals);

// ITERATING THROUGH AN ARRAY (LOOPING THROUGH AN ARRAY)

// FOR LOOPS
// let animals = ['frogs','bats','giraffes','gorillas','lions','ladybug','alligator','parrot'];

// // // for (starting point; until what point we're going to loop through data set; how to iterate (one-by-one))
// for(let i = 0; i <= animals.length -1 ; i++){
//     // exexute code to be applied applied to EACH item (each animal)
//     animals[0]; //frogs
//     animals[1]; //bats
//     console.log(`My favorite animal today is ${animals[i]}`);
// }

// let cities = ["Paris", 'Sydney', 'Charlotte', 'New York'];

// for(let i = 0; i < cities.length; i++){
//     console.log(`${cities[i]} has the best food`);
// }

// cities.forEach();

// // --- SORTING ARRAYS ---
// Sorts by first digit not by the whole number
// let scores = [100, 54, 300, 23, 90];

// scores.sort();
// console.log(scores);

// let nums = [3, 7, 2, 9, 0, 4];
// console.log(nums.sort());

// // // reverse
// console.log(scores.reverse());
// console.log(nums.reverse());

// sorts alphabetically
// let plants = ['trees', 'grass', 'coral', 'fern'];
// console.log(plants.sort());
// console.log(plants.reverse());

// ------------ END OF SORTING ARRAYS ------------

// -- ** FUNCTION BREAK ** --

// function - is a js keyword - hey I'm abt to define a function
// nameOfYourFunction - hey when I ref this function I'm gonna call it by its given name -- dev defines the name of function in camelCase
// Parameters - defined by () -- items/var/things anything that is required for the function to run.
// let donationMade = prompt('how much do are you donating? ');
// let amountSoFar = Number(1000);

// function nameOfFUnction(donationMade){
//     let sum = Number(donationMade + amountSoFar);
//     // any code you want to be executed
//     console.log(`so far we have ${donationMade + amountSoFar}`);

// }

// // run the function
// // calling the name of the function (providing the parameters needed)

// nameOfFUnction(donationMade, amountSoFar, sum);

// -- ** END FUNCTION BREAK ** --

// // -------- ****** OBJECTS ****** -----------

// way to store a lot of info with 'labels'
// defined with curly bracket {}
// Labels are called PROPERTIES
// actual data being stored is being stored as a value within each property

// let course = {
//     person: 'Markus',
//     ta: ['melissa', 'yusuf'],
//     length: 4,
//     students: 36,
//     subject: "javascript"
// }

// accessing items in object
// nameOfObject.nameOfProperty
// dot notation
// bracket notation requires "" inside the []
// let me = course.person;
// console.log(me);

// console.log(course.students);
// console.log(course["students"]); //works the same as the one above
// console.log(course.subject);
// console.log(course["subject"]);

// // reassigning values
// // use dot / bracket notation to reassign
// let zoo = {
//     reptile: 'crocodile', 
//     amphibian: 'frogs',
//     mammals: 'dolphins',
//     rodents: 'gophers'
// }

// zoo.amphibian = 'newt';
// zoo.mammals = 'sheeps';

// // adding a key:value pair to the object
// zoo.marsupials = "koala";

// console.log(zoo);

// // -------- ****** END OF OBJECTS ****** -----------

// // ADVANCED OBJECTS
// let zoo = {
//     reptile: ['crocodile', 'snakes', "lizards", "horned frogs"], // 1
//     sections: ['safari', 'aquarim', 'aviary'], // 2
//     management: {
//         ceo: 'tom',
//         vp: 'liz',
//         zookeepers: ['jake', "david", "rose", "alexis"]
//     }, // 3
//     numAnimals: 5000,
//     open: true,
// }

// console.log(zoo.reptile[1]);
// console.log(zoo.sections[2]);
// console.log(zoo.management.vp);
// console.log(zoo.management.zookeepers[2]);

// zoo.new = "new item";
// console.log (zoo);
// zoo.reptile.push('another');
// console.log(zoo.reptile);

// pointing to a new spot in  memory
// zoo.ceo = ['tom', 'lisa'];
// console.log(zoo);

//changing the value of that var
// var tomato = 'red';
// tomato = 'green'
// var fruit = ['tomato', 'banana', 'strawberry']

// // Value types
// / changing the values 
// let x = 1;
// let y = 1;
// x === y; //true

// let y = x; 	// x == 1, y == 1
// x === y; 	// true

// x = 2; 		// x == 2, y == 1
// x === y; 	// false

//Reference types
// let x = {name: 'Evan'}
// let y = {name: 'Evan'}
// x === y; //false;

// let y = x; 		//x and y are {name: 'Evan'}
// x === y;		//true


// Reference Types
// let x = {name: 'Evan'}
// let y = {name: 'Evan'}
// x===y; // false;

// let y=x; // x amd y are {name;Evan}
// x === y; // true

// x.name = 'Noah';
// y.name; //'Noah'

// typeof -- is a js keyword that provides the data type of value/var
// console.log(typeof 7);

// let animals = ['dog', 'cat', 'mouse'];
// console.log(typeof animals); //objects because it is an array

// let dogs = {
//     name: 'joe',
//     breed: 'great dane',
//     color: 'gray'
// }

// console.log(typeof dogs.breed);

// {
//     "name": "joe"
//     "breed": "great dane"
// }