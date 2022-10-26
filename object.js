//object
let person = {
    name1: 'Brian',
    age: 20
};

// dot notation
person.age = 34;
person['name1'] = 'aginga'

// bracket notation

let selection = 'name1';
person[selection] = 'Mary';
//console.log(person);

let kenya = {
    capital: 'Nairobi',
    location: 'Africa',


}
kenya.location = 'EAST AFRICA';
//console.log(kenya);

const details = [
    ['age', 40],
    ['city', 'Nairobi'],
    ['zip', 00100]
];

const age = details[0].join(':');
//console.log(age);

//const newlyConc = age.concat(city) + ' '.concat(zip);
//console.log(newlyConc);

// object retuns string
// unary operator --/ ++
// all types welcome


const fitBigData = {
    totalSteps: 30233,
    totalMilea: 211.7,
    avg: 5755,
    workOut: '5 of 7',
    goodSleep: '2:1'
};
fitBigData.heartStillBeating = true;
//console.log(fitBigData);

fitBigData.totalSteps += 1000;
//console.log(fitBigData);

const student = {
    firstName: 'Brian',
    lastName: 'Aginga',
    strength: ['Basketball', 'Python dev'],
    exams:{
        midterm: 92,
        final: 88
    } 


};

//console.log(student.strength[2]= 'kenya');
//console.log(`The total is ${student.exams.midterm + student.exams.final}`);
//console.log(student.strength);
//console.log(student);

let book = {

    author: 'Magret Ogolla',
    publish: 2010,
    studiedYear: [2011, 2012, 2013],
    cast:{
        male: 23,
        female: 13
    }
};

book.studiedYear[3] = 2014;
console.log(`The total cast are ${book.cast.female + book.cast.male}`);
console.log(book);








