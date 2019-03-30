var a = {
  n: 1
};
var b = a;
a.x = a = {
  n: 2
};
console.log(a.x); //undefined
console.log(b);


let c = {
  c1: 1
}

let d = c.c1 = {}


console.log(d)
console.log(c.c1)

