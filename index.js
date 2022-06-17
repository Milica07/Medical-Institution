// Medical Institution - specification

class Doctor {
    constructor(firstName, lastName, specialization, patient){
        let date = new Date(); 

        new.target === Doctor ? 
        console.log('[' 
        + (date.getDay() + 1) + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() 
        + ' ' + date.getHours() + ':' + date.getMinutes() + ']', 
        ' Created doctor ' + '"' + firstName + '"\n') 
        : null;

        this.firstName = firstName;
        this.lastName = lastName;
        this.specialization = specialization;
        this.patient = patient;
    }

    scheduleAnExamination(patient, date, typeOfExamination){
        let examination;

        if (typeOfExamination === "pressure"){
            examination = {upper: 0, lower: 0, pulse: 0};
        } else { 
            examination = {value: 0, timeLastMeal: ''};
        }

        return {date: '[' 
        + (date.getDay() + 1) + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() 
        + ' ' + date.getHours() + ':' + date.getMinutes() + ']', 

        patient: patient, 
        typeOfExamination: typeOfExamination, 
        examination: examination
        }
    }
}

class Patient{
    constructor(firstName, lastName, JMBG, healthCardNumber){
        let date = new Date();

        new.target === Patient ? 
        console.log('[' 
        + (date.getDay() + 1) + '.' + (date.getMonth() + 1) + '.' + date.getFullYear() 
        + ' ' + date.getHours() + ':' + date.getMinutes() + ']', 
        ' Created patient ' + '"' + firstName + '"\n') 
        : null;

        this.firstName = firstName;
        this.lastName = lastName;
        this.JMBG = JMBG;
        this.healthCardNumber = healthCardNumber;
        this.chosenDoctor = null;
    }

    chooseDoctor(doctor){
        let date = new Date();

        this.chosenDoctor = doctor;

        console.log('[' 
        + (date.getDay() + 1) + '.' + (date.getMonth() + 1) + '.' 
        + date.getFullYear() + ' ' + date.getHours() + ':' 
        + date.getMinutes() + ']', 
        ' Patient "' + this.firstName 
        + '", chooses a doctor "' + doctor.firstName + '"\n');
    }

    performExamination(examination){
        let date = new Date();
        
        examination.examination = examination.typeOfExamination === 'pressure' ? 
        'upper:120, lower:80, pulse:88' 
        : 'value:6, timeLastMeal:"08:30"';
        
        console.log('[' 
        + (date.getDay() + 1) + '.' + (date.getMonth() + 1) + '.' 
        + date.getFullYear() + ' ' + date.getHours() + ':' 
        + date.getMinutes() + ']', ' Examination performed -> ' + examination.typeOfExamination 
        + ', value: ' + examination.examination + '\n');
    }
}

var john = new Doctor("John", "Doe", "General practitioner", []);
var jane = new Patient("Jane", "Doe", "0302980785412", 907);

jane.chooseDoctor(john);

var examination1 = john.scheduleAnExamination(jane, new Date(), "pressure");
var examination2 = john.scheduleAnExamination(jane, new Date(), "blood sugar");

jane.performExamination(examination1);
jane.performExamination(examination2);