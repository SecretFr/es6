var a = 5;
var b = 10;

//Multi-line strings
console.log("--------Standard String---------");
console.log("line 1\n"+"line 2");
console.log("Fifteen is " + (a + b) + " and\nnot " + (2 * a + b) + ".");
console.log("--------------------------------");

console.log();

//Template literals strings
console.log("-------Template Literals--------");

console.log(`line 1
line 2`);
console.log(`Fifteen is ${a+b} and
not ${2*a+b}.`);

var person = 'Yang'
var age = 20;

function myTag(strings, personExp, ageExp){
    var str0 = strings[0];
    var str1 = strings[1];

    var ageStr;
    if(ageExp > 99){
        ageStr = 'centenarian';
    }
    else{
        ageStr = 'youngster';
    }

    return str0 + personExp + str1 + ageStr;
}

var output = myTag`that ${person} is a ${age}`;
console.log(output);

console.log("--------------------------------");

