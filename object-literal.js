var person = {
  name: "mahyar",
  age: 25,
  country: "Iran",
  address: {
    city: {
      first: "arak",
      second: "tehran",
    },
    street: "malek",
    alley: "jannat",
    postalCode: 255,
    telephone: ["09121695863", "0938582694", "091256445"],
  },
  sayHi() {
    console.log("helllo......");
  },
  running: function () {
    console.log("runnning ........");
  },
};

// person.sayHi();
// person.running();

person["running"]()
person["sayHi"]()

// console.log(person[a]);
// console.log(person.a);
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["address"]["city"]["first"]);
// console.log(person.address.street);
// console.log(person["country"]);
// console.log(person["name 1"]);

// console.log(person);
// console.log(person.name 1);
// console.log(person.name);
// console.log(person.country);
// console.log(person.address.city.first);
// console.log(person.address.alley);
// console.log(person.address.street);
// console.log(person.address.telephone.length);
