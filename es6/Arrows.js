var evens=[2,4,6,8];
var fives = [];

//Expression bodies
var odds = evens.map(v => v+1);
var nums = evens.map((v, i) => v+i);
var pairs = evens.map(v => ({even: v, odd: v+1}));

console.log("map odds : "+odds);
console.log("v + i: "+nums);

//Statement bodies
pairs.forEach(v => {
   console.log(v);
});

//Statement bodies
nums.forEach(v => {
    if(v%5 === 0){
        fives.push(v);
    }
});
console.log(fives);

//Lexical this
var bob = {
    _name: "Bob",
    _friends: ["John, Brian"],
    printFriends(){
        this._friends.forEach(f =>
            console.log(this._name + " knows " + f));
    }
}
console.log(bob.printFriends());