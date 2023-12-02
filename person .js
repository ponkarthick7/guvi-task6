class Person {
    constructor(name = 'selva', age = 22,qualification= 'computer scinece',place= 'madurai') {
        this.name = name;
        this.age = age;
        this.qualification = qualification;
        this.place = place;
    }
}

let person1 = new Person();
let person2 = new Person();

person2.name ="kalai";

 person2.age = 20;
 person2.qualification = 'agri';
 
console.log(person1);
console.log(person2);



