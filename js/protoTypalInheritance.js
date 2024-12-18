const obj = {
  name: "mridul",
  address: "New delhi",
  age: 26,
};

class CreateObject {
  constructor(name = "Mridul", address = "New Delhi", age = 26) {
    this.name = name;
    this.address = address;
    this.age = age;
  }
  getFullName() {
    console.log("full name", this.name);
    console.log(this);
  }
}
const obj1 = new CreateObject();
const obj2 = new CreateObject("Naman");
// console.log(obj1);
console.log(obj2.getFullName());

// Wrapper classes
let fname = "Mridul Khurana";
// fname.charAt(1);

// here fname.__proto__ == String class *wrapper classes*
// const fname = new String("Mridul")  === fname.__proto__ = String.prototype
// everything in js inherits from object
