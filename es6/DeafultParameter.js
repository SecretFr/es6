function multiply(a, b=3){
    return a*b;
}
//expect 5*2 = 10
console.log(multiply(5,2));
//expect 5*3 = 15
console.log(multiply(5));
//expect 5*3 = 15
console.log(multiply(5, undefined));

function test(num = 1){
    console.log(typeof num)
}

//number
test();
test(undefined);

//string
test('');
//object
test(null);

function append(value, array=[]){
    array.push(value);
    console.log(array);
    return array;
}

append(1);
append(2);

function callSomething(thing = something()){
    return thing
}
let numberOfTimesCalled = 0
function something(){
    numberOfTimesCalled += 1
    return numberOfTimesCalled
}

console.log(callSomething());
console.log(callSomething());