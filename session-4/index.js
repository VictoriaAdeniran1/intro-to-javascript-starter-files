let personA = {
    name: 'Victoria',
    age: 20,
    location: 'London',
    likes: 'listening to music'
};

let personB = {
    name: 'Chinyere',
    age: 62,
    location: 'London',
    likes: 'going to church'
};

let personC = {
    name: 'Henry',
    age: 22,
    location: 'London',
    likes: 'playing PS5'
};

let personD = {
    name: 'Dennis',
    age: 24,
    location: 'London',
    likes: 'playing football'
};

const biography = (person) => "Hi my name is " + person.name + ". I am " + person.age + " living in " + person.location + ". I like " + person.likes +"!" 

console.log(biography(personA));
console.log(biography(personB));
console.log(biography(personC));
console.log(biography(personD));