// // class Person {
// //   static age = 16;
// //   name = "virender";
// //   cast = "Kumar";
// //   value;
// //   constructor(value) {
// //     this.value = value;
// //   }
// //   talking(who) {
// //     return who + " Talking";
// //   }
// // }
// // Person.prototype.walk = function () {
// //   return "i can walk";
// // };
// // const me = new Person("Virender");
// // me.fly = function () {
// //   return "i can fly";
// // };
// // // me.talking("me");
// // // const you = new Person();
// // // you.talking("you");
// // // me.age = 10;
// // // console.log(me);
// // console.log(me.__proto__);
// // console.log(Person.prototype);

// class Person {
//   walk() {
//     return "I can walk.";
//   }
// }
// class SuperHuman extends Person {
//   fly() {
//     return "i can fly";
//   }
// }
// const me = new SuperHuman();

// me.__proto__.fight = function () {
//   return "I Can Fight";
// };
// const you = new SuperHuman();
// console.log(you.fight());
// Object.setPrototypeOf.name = "virender";
// function name() {
//   console.log(this.name);
// }
// name();
// console.dir(name);

// const xhr = new XMLHttpRequest();

// // Fake JSON API
// const url = "https://jsonplaceholder.typicode.com/posts/1";

// xhr.open("GET", url, true);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4) {
//     // 4 = DONE
//     if (xhr.status === 200) {
//       const response = JSON.parse(xhr.responseText);
//       console.log("Fake JSON data:", response);
//     } else {
//       console.error("Failed to fetch data");
//     }
//   }
// };

// xhr.send();

const Outer = () => {
  console.log("I'm Outer");
};
const Mid = () => {
  console.log("I'm Mid");
};
const Inner = (e) => {
  e.stopPropagation();
  console.log("I'm Inner");
};
// const name2 = () => {};

// console.log(a);
