let data = {
    name:"Abhik",
    age:16
}


// add and update 
// if not existing any property it will add otherwise it will be updated

data.age = 18;
data.company = "no";


console.log(data);


delete data.name;
delete data["age"];
console.log(data);
