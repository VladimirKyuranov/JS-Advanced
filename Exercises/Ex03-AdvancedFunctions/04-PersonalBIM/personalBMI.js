function chart(name, age, weight, height) {
    let person = {
        name,
        personalInfo: {
            age,
            weight,
            height
        }
    };
    
    let bmi = Math.round(weight / Math.pow(height / 100, 2));
    
    let status = "obese";
    if (bmi < 18.5) {
        status = "underweight";
    } else if (bmi < 25) {
        status = "normal";
    } else if (bmi < 30) {
        status = "overweight";
    }
    
    person.BMI = bmi;
    person.status = status;
    
    if (status === "obese"){
        person.recommendation = "admission required";
    }
    
    return person;
}

chart("Honey Boo Boo", 9, 57, 137);