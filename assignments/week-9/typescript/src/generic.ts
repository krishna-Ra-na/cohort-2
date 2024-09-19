// problem it solve
function getFirstElement(arr: (string | number)[]) {
  return arr[0];
}

const el = getFirstElement([1, 2, 3]);
const el2 = getFirstElement([1, 2, "3"]);
const el3 = getFirstElement(["harkiratSingh", "ramanSingh"]);
// el.toUpperCase();
// el2.toUpperCase();
// el3.toUpperCase();
// can't use  to uppercase bec it does not Property 'toUpperCase' does not exist on type 'string | number'.
//   Property 'toUpperCase' does not exist on type 'number'

// *********************************************
// *********************************************
// *********************************************
// *********************************************
// solving problem like this using generics
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// ****************************************
// solotion to first problem
function getFirstElement2<T>(arr: T[]) {
  return arr[0];
}

const element = getFirstElement2<string>(["harkiratSingh", "ramanSingh"]);
console.log(element.toLowerCase());
