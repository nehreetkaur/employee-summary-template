// TODO: Write code to define and export the Employee class

class Employee{
constructor(name,id,email){
    this.name;
    this.id;
    this.email;
    this.phonenum;
}

getName(){
    return this.name;
}

getId(){
    return this.id;
}


getEmail(){
    return this.email;
}
     

getRole(){
    return "Employee"
}
};

module.exports=Employee;


