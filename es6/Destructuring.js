let a, b, rest;
[a,b] = [10,20];

console.log(a);
console.log(b);

[a,b] = [b,a];
console.log(a);
console.log(b);

[a,b,...rest] = [10,20,30,40,50];
console.log(rest);

var x = [1,2,3,4,5];
var [y,z] = x;
console.log(y);
console.log(z);

var c,d;
[c=5, d=7] = [1];
console.log(c);
console.log(d);

function f(){
    return [100,200];
}
var e, f;
[e, f] = f();
console.log(e);
console.log(f);

function fa(){
    return [100,200,300];
}

var [g, ,h] = fa();
console.log(g);
console.log(h);

//정규 표현식과 일치하는 값 해체하기
function parseProtocol(url){
    var parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);

    if(!parsedURL) return false;
    console.log("parseURL: "+parsedURL);

    var [, protocol, fullhost, fullpath] = parsedURL;
    console.log("protocol: "+protocol);
    console.log("fullhost: "+fullhost);
    console.log("fullpath: "+fullpath);
    return protocol;

}
console.log(parseProtocol('https://developer.mozilla.org/en-US/Web/JavaScript'));

//객체 구조 분해
var o = {p: 42, q: true};
var {p, q} = o;
console.log(p+" "+q);

var {p: foo, q: bar} = o;
console.log(foo);
console.log(bar);

//중첩된 객체 및 배열의 구조 분해
var metadata = {
    title: "Scratchpad",
    translations: [
        {
            locale: "de",
            lcalization_tags: [ ],
            last_edit: "2014-04-14T08:43:37",
            url: "/de/docs/Tools/Scratchpad",
            title: "JavaScript-Umgebung"
        }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

console.log(metadata.title);
console.log(metadata.translations.map(value =>
            value.last_edit));

var {
    title: englishTitle,
    translations: [
            {
                title: localeTitle
            }
        ]
} = metadata;

console.log(englishTitle);
console.log(localeTitle);


//for of 반복문과 구조 분해
var people = [
    {
        name: "Mike Smith",
        family: {
            mother: "Jane Smith",
            father: "Harry Smith",
            sister: "Samantha Smith"
        },
        age: 35
    },
    {
        name: "Tom Jones",
        family: {
            mother: "Norah Jones",
            father: "Richard Jones",
            brother: "Howard Jones"
        },
        age: 25
    }
];

for(var {name: n, family: {father: father}} of people){
    console.log("Name: "+n+", Father: "+father);
}

//함수 매개변수로 전달된 객체에서 필드 해체하기
function userId({id}){
    return id;
}

function whois({displayName: displayName, fullName: {firstName: name}}){
    console.log(displayName + " is "+ name);
}

var user = {
    id: 42,
    displayName: "jdoe",
    fullName: {
        firstName: "John",
        lastName: "Doe"
    }
};

console.log("userId: "+ userId(user));
whois(user);

let key = "z";
let { [key]: foo2 } = { z: "bar" }
console.log(foo2);

const foo3 = { 'fizz-buzz': true };
const { 'fizz-buzz': fizzBuzz } = foo3;
console.log(fizzBuzz);