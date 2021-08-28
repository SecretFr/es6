const Rectangle = class {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    area(){
        return this.height*this.width;
    }
};

console.log(new Rectangle(5, 8).area());

//익명 class식
var Foo = class {
    constructor() {
    }
    bar(){
        return "Hello Jaewon!";
    }
};

var instance = new Foo();
console.log(instance.bar());
//잘못된 사용
console.log(Foo.name);

//Named class 식
var FooName = class NamedFoo {
    constructor(name) {
        this.name = name;
    }
    whoIsThere(){
        return this.name;
    }
}

var bar = new FooName("test");
console.log(bar.whoIsThere());
//reference error
// console.log(NamedFoo.name);
console.log(new FooName("jaewon"));
console.log(bar.name);

//named 함수 표현식
var math = {
    'factit': function factorial(n){
        console.log(n);
        if(n<=1)
            return 1;
        return n * factorial(n-1);
    }
};

math.factit(3)