function sum(...theArg){
    return theArg.reduce((prev, cur) => {
        return prev+cur
    });
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4));

function myFun(a, b, ...manyMoreArgs){
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", 4, "five", 6);

function f(...[a,b,c]){
    return a+b+c;
}

console.log(f(1));
console.log(f(1,2,3));
console.log(f(1,2,3,4)); //4번째 파라미터는 해체되지 않음


//...theArgs가 배열이므로, length 프로퍼티를 사용해 엘리먼트의 수를 얻을 수 있다.
function fun1(...theArgs) {
    console.log(theArgs.length);
  }
  
  fun1();  // 0
  fun1(5); // 1
  fun1(5, 6, 7); // 3

function multiply(multiplier, ...theArgs){
    return theArgs.map((element) => {
        return multiplier * element;
    })
}

var arr = multiply(2,1,2,3);
console.log(arr);

function sortRestArgs(...theArgs){
    var sortedArgs = theArgs.sort((a,b)=>{
        return a-b;
    });
    return sortedArgs;
}

console.log(sortRestArgs(9, 5, 3, 7, 1, 2, 10, 11));

function sortArguments(){
    var args = Array.from(arguments);
    var sortedArgs = args.sort(function(a,b){
        return b-a;
    });
    return sortedArgs;
}

console.log(sortArguments(9, 5, 3, 7, 1, 2, 10));