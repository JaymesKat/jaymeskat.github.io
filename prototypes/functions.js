// Exercise 1:
// Define a filter function on the String object. The function accepts an array of strings that
// specifies a list of banned words. The function returns the string after removing all the
// banned words.
// Example:
// console.log("This house is not nice!".filter('not'));
// Output: "This house is nice!"
console.log("Exercise 1: String filter");
String.prototype.filter = function(words) {
    if(typeof words == Array) {
        for(let word of words){
            console.log(word);
            this.replace(word, "");
        }
        return this;
    }
    return this.replace(words, ""); 
}
console.log("This house is not nice!".filter(['not']));
console.log("\n");
// Exercise 2:
// Write a BubbleSort algorithm on the Array object. Bubble sort is a simple sorting algorithm
// that works by repeatedly stepping through the list to be sorted,
// Example:[6,4,0, 3,-2,1].bubbleSort();
// Output : [-2, 0, 1, 3, 4, 6]
console.log("Exercise 2: BubbleSort");
Array.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length; i++) {
		for (let j = 0; j < this.length; j++) {
			if (this[j] > this[j + 1]) {
				let temp = this[j];
				this[j] = this[j + 1];
				this[j + 1] = temp;
			}
		}
	}
	return this;
}
console.log([6,4,0, 3,-2,1].bubbleSort());
console.log("\n");

// Exercise 3:
// Create an object called Teacher derived from a Person function constructor, and implement
// a method called teach that receives a string called subject, and prints out: [teacher's name]
// is now teaching [subject]. Create a Teacher object and call its teach method.
// Also do the same thing using Object.create. When using Object.create you will need a
// factory function instead of a function constructor in order to pass parameters such as
// ‘name’ to be set in the prototype.
console.log("Exercise 3: Teacher prototype");
let Teacher = function Person(name) {
    this.name = name;
}
Teacher.prototype.teach = function (subject) {
    return this.name+" is now teaching "+subject;
}

let Person = function (name) {
    this.name = name;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.teach = function (subject) {
    return this.name+" is now teaching "+subject;
}
let teacher = new Teacher("Dr. Smith");
console.log(teacher.teach("Web Programming"));
console.log("\n");

// Exercise 4:
// Write code that will create person, student, and professor objects.
// • Person objects have
// o name and age fields
// o a greeting method that prints out: “Greetings, my name is [name] and I am
// [age] years old.”
// o a salute method that prints out: “Good morning!, and in case I dont see you,
// good afternoon, good evening and good night!”
console.log("Exercise 4: Use Function Constructor");
Person = function(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function() {
        console.log("Greetings, my name is "+this.name+" and I am "+this.age+" years old.");
    }
    this.salute = function() {
        console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
    }
}

// • Student objects inherit name, age, and salute from person. They also have a field
// ‘major’ and have their own greeting method. Their greeting is “Hey, my name is
// [name] and I am studying [major]. The greeting should be output to the console.
let Student = function(name, age, major) {
    Person.call(this, name, age);
    this.major = major;
    this.greeting = function() {
        console.log("Hey, my name is "+this.name+" and I am studying "+this.major);
    };
}

// • Professor objects inherit name, age, and salute from person. They also have a field
// ‘department’ and have their own greeting method. Their salutation is “Good day,
// my name is [name] and I am in the [department] department.” Output it to the
// console.
// • Create a professor object and a student object. Call both the greeting and salutation
// methods on each.
// • Do this exercise once using the object prototype approach for inheritance and then
// using the function constructor approach.
let Professor = function(name, age, department) {
    Person.call(this, name, age);
    this.department = department;
    this.greeting = function() {
        console.log("Hey, my name is "+this.name+" and I am in the "+this.department+" department");
    };
}

const student = new Student("James", "30", "MCSC");
student.greeting();
student.salute();

const professor = new Professor("Paul", "55", "CS");
professor.greeting();
professor.salute();
console.log("\n");

console.log("Exercise 4: Use Function Constructor");
Student.prototype = Object.create(Person.prototype, {
    major: {
        writable: true
    }
});
Student.prototype.greeting = function() {
    console.log("Hey, my name is "+this.name+" and I am in the "+this.department+" department");
};
Professor.prototype = Object.create(Person.prototype, { department: { writable: true}});
Professor.prototype.greeting = function() {
    console.log("Hey, my name is "+this.name+" and I am in the "+this.department+" department");
};

const student1 = new Student("Jim", "20", "MSD");
student1.greeting();
student1.salute();
const professor2 = new Professor("Paul", "55", "CS");
professor2.greeting();
professor2.salute();
console.log("\n");