export default class Alumno {
    constructor(username, DNI, edad) {
    this.Username = username;
    this.DNI = DNI;
    this.Edad = edad;
    

    }
    toString () {
        return this.Username + this.Edad + " " + this.DNI;
    }
    getUsername() {
    return this.Username;
    }
    getDNI() {
    return this.DNI;
    }
    getEdad(){
    return this.Edad;
    }

}

