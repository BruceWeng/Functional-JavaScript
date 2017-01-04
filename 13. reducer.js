// Write a function reducer with objects obj1, obj2 and returns an object with obj1 and obj2 designated properties.
// var person = {name: 'John', age: 26};
// var info = {job: 'Software Engineer', company: 'Google'};
// reducer(person, info) // {name: 'John', age: 26, job: 'Software Engineer'}
require("babel-core").transform("code", {
  plugins: ["transform-object-rest-spread"]
});

function print(input) {
  console.log(input);
}

function reducer(obj1, obj2) {
  const {job} = obj2;
  return {
    ...obj1,
    job,
  };
}

var person = {name: 'John', age: 26};
var info = {job: 'Software Engineer', company: 'Google'};
print(reducer(person, info)); // {name: 'John', age: 26, job: 'Software Engineer', company: 'Google'}
