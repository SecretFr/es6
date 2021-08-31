function sum(x,y,z){
    return x+y+z;
}

const numbers = [1,2,3];
//expect 6
console.log(sum(...numbers));
//배열의 엘리먼트를 함수의 인자로 사용하고자 할때
//Function.prototype.apply()를 이용한 예전방식
console.log(sum.apply(null, numbers));

var dateField = [1970,0,1];
var d = new Date(...dateField);
console.log(d)

var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
console.log(lyrics);

var a = [[1],[2],[3]];
var b = [...a];
console.log(a);

console.log(b.shift().shift());
console.log(b.shift().shift());

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }

console.log(clonedObj);
console.log(mergedObj);

var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

var mergedObj = merge ( obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

console.log(mergedObj);

var mergedObj = merge ( {}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }

console.log(mergedObj);