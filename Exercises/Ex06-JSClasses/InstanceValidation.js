class CheckingAccount{
    get clientId() {
        return this._clientId;
    }
    
    get email() {
        return this._email;
    }
    
    get firstName() {
        return this._firstName;
    }
    
    get lastName() {
        return this._lastName;
    }
    set clientId(value) {
        let pattern = /^\d{6}$/;
        
        if (!pattern.test(value)) {
            throw TypeError("Client ID must be a 6-digit number");
        }
        
        this._clientId = value;
    }
    
    set email(value) {
        let pattern = /^[a-zA-Z\d]+@[a-zA-Z.]+$/;
    
        if (!pattern.test(value)) {
            throw TypeError("Invalid e-mail");
        }
        
        this._email = value;
    }
    
    set firstName(value) {
        this.nameValidation(value, "First");
        this._firstName = value;
    }
    
    set lastName(value) {
        this.nameValidation(value, "Last");
        this._lastName = value;
    }
    
    constructor(clientId, email, firstName, lastName){
    
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    nameValidation(name, nameType){
        if (name.length < 3 || name.length > 20){
            throw TypeError(`${nameType} name must be between 3 and 20 characters long`)
        }
        
        let pattern = /^[a-zA-Z]+$/;
        
        if (!pattern.test(name)){
            throw TypeError(`${nameType} name must contain only Latin characters`)
        }
    }
}

let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')