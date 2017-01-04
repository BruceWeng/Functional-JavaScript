require("babel-core").transform("code", {
  plugins: ["transform-object-rest-spread"]
});

function Person(obj) {
  const {name, age, id} = obj;
  const sayName = function () {
    console.log(obj.name);
  }

  return Object.freeze({
    name,
    age,
    id,
    sayName
  })
}

function Student(obj) {
  const {school} = obj;
  const {id} = Person(obj);
  const sid = obj.school.concat(obj.id);
  const saySID = function () {
    console.log(sid);
  }

  return Object.freeze({
    sid,
    school,
    saySID
  });
}

function Employee(obj) {
  const {company} = obj;
  const {id} = Person(obj);
  const cid = obj.company.concat(obj.id);
  const sayCID = function () {
    console.log(cid);
  }

  return Object.freeze({
    cid,
    company,
    sayCID
  });
}

function Adult(obj) {
  return Object.freeze({
    ...obj
  });
}

const john = Person({name: 'john', age: 26, id: 1});
console.log(john);
john.sayName();

studentJohn = Student({...john, school:'Purdue'});
console.log(studentJohn);
studentJohn.saySID();

employeeJohn = Employee({...john, company:'Google'});
console.log(employeeJohn);
employeeJohn.sayCID();

adultJohn = Adult({...john, ...studentJohn, ...employeeJohn});
console.log(adultJohn);
adultJohn.sayName();
adultJohn.saySID();
adultJohn.sayCID();
