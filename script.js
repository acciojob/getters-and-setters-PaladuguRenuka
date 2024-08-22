//complete this code
class Person {
	constructor(name, age){
		this.name = "Renuka"
		this.age = 25
	}
	get(){
		return this.name
	}
	set(value){
		this.age = value
	}
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this.name} is teaching`)
	}
}
//const student = new Student('Alice', 20);
//student.study(); // Output: Alice is studying

//const teacher = new Teacher('Bob', 45);
//teacher.teach(); // Output: Bob is teaching

// Demonstrating the setter for age
//student.age = 21;
//console.log(student.age);

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
