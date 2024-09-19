function isLegal1(age: number) {
  if (age > 18) {
    return true;
  } else {
    return false;
  }
}

console.log(isLegal1(2));

function delayedCall(fn: () => void) {
  setTimeout(fn, 1000);
}

delayedCall(function () {
  console.log("hi there");
});

//

// function isLegal(user: {
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
// }) {
//   if (user.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// }
interface User {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
}
function isLegal(user: User) {
  if (user.age > 18) {
    return true;
  } else {
    return false;
  }
}
isLegal({
  firstName: "harkirat",
  lastName: "singh",
  email: "email@gmail.com",
  age: 21,
});
