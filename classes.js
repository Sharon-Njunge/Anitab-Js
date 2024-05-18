// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     greet(){
//         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
//     }
// }

// const adam = new Person('Adam', 30);
// console.log({adam});

// adam.greet()

// class Student extends Person{
//     constructor(name, age, school){
//         super(name, age)
//         this.school = school
//     }
//     profession(){
//         console.log(`I am ${this.name} at ${this.school}`);
//     }
// }

// const student = new Student('Amanda', 19, 'AkiraChix');
// console.log({student});
// student.profession();

class Schedule{
    constructor(appointmentDate){
        this.doctorsDetails = []
        this.patientDetails = []
        this.appointmentDate = appointmentDate
    }

    addPatient(name, age, contact, preference, condition){
        const details = {
            name:name,
            age:age,
            contact:contact,
            preference:preference,
            condition:condition
        }
        this.patientDetails.push(details)
    }

    addDoctor(name, skill, availability){
        const detailsDoctor = {
            name:name,
            skill:skill,
            availability:availability
        
        }
        this.doctorsDetails.push(detailsDoctor)
    }
}
    this.doctorsDetails.detailsDoctor.forEach(detailDoctor=>{
        if(detailsDoctor.availability = true){
            console.log(`${patientDetails.name} + ${doctorsDetails.name} + ${appointmentDate}`);
        }
        else{
            console.log(`Doctor is not available`);
        }
    })

    const patient = new Schedule();
    console.log({patient});

    patient.addPatient("Sharon", 33, "0722345678", "coming with my husband", "diabetes")
    console.log({patient});

    patient.addDoctor("Brian", "surgeon", true);
    console.log({patient});
