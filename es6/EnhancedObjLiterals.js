var sales = "Samsung";

function carTypes(name){
    if(name == "Honda"){
        return name;
    }
    else {
        return "Sorry, we don't sell" + name + ".";
    }
}

var car ={
    myCar: "Saturn",
    getCar: carTypes("Honda"),
    special: sales
};

console.log(car.myCar);
console.log(car.getCar);
console.log(car.special);

var tmp = {
    manyCars: {
        a: "Saab",
        "b": "Jeep"
    },
    "7": "Mazda"
};

console.log(tmp.manyCars.a);
console.log(tmp.manyCars.b);
console.log(tmp["7"]);

//정규식
var re = /ab+c/
console.log(re);