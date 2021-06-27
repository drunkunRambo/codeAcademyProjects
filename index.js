//aiming for simple Subject–Verb–Object scentences
const subject =['she','he','the boy','the girl','the professor','the teacher','the carpenter','the engineer','andrew','john','ram','shayam'];
const verb = ['swim','wrote','is singing','plays','thinks','considers','appear','exits','brought','thought'];
const object = ['a fish','the rules','chochlate','a new car','the bus','my proposal','a big house','the wedding','ice cream'];
let randSubject = Math.floor(Math.random()*subject.length);
//console.log(randSubject);
let randVerb = Math.floor(Math.random()*verb.length);
let randObject = Math.floor(Math.random()*object.length);
console.log(`${subject[randSubject]} ${verb[randVerb]} ${object[randObject]}.`);