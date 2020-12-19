// TODO: Write code to define and export the Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
      var a= this.name;
      console.log(a);

        // if ( typeof ==="Number"){
        //     alert("Invalid input,it should be string");
        // }

    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }


    getEmail() {
        return this.email;
    }


    getRole() {
        return "Employee"
    }
};

module.exports = Employee;


