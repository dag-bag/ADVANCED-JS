// // function bank() {
// //   let amount = 10;
// //   function getAmount() {
// //     return amount;
// //   }
// //   function setAmount() {
// //     amount++;
// //   }
// //   console.dir(getAmount);
// //   console.dir(setAmount);
// //   //   return {
// //   //     getAmount,
// //   //     setAmount,
// //   //   };
// // }
// // bank();
// // // const { getAmount, setAmount } = bank();
// // // getAmount();
// // // setAmount();
// // // setAmount();
// // // getAmount();

// // // console.dir(getAmount);
// // // console.dir(setAmount);

// function state() {
//   let text = `HEllo`;
//   return function (name) {
//     console.log(name + text);
//   };
// }

// const printName = state();
// printName("arif");
// printName("sneha");
// const printName2 = state();
// printName("virender");

// // let name = "virender";
// // let text = `hello${name}`;
// // console.log(text);

// // name = "aererwe";
// // console.log(text);

// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counterA = createCounter();
// console.log(counterA());
// console.log(counterA());

// const counterB = createCounter();
// console.log(counterB());
// function bank() {
//   let amount = 10;
//   function getAmount() {
//     console.log(amount);
//   }
//   function setAmount() {}
//   console.dir(getAmount);
//   console.dir(setAmount);
//   //   return {
//   //     getAmount,
//   //     setAmount,
//   //   };
// }
// bank();

// function engine() {
//   let oilInLit = 5;
//   let message = `${oilInLit} Litre Left`;
//   function getOil() {
//     console.log(message);
//     return message;
//   }
//   function drive() {
//     oilInLit = oilInLit - 1;
//   }
//   return {
//     getOil,
//     drive,
//   };
// }
// const { drive, getOil } = engine();
// drive();
// drive();
// getOil();

// function bank() {
//   let amount = 10;
//   function getAmount() {
//     return amount;
//   }
//   function setAmount() {
//     amount++;
//   }
//   //   console.dir(getAmount);
//   //   console.dir(setAmount);
//   return {
//     getAmount,
//     setAmount,
//   };
// }
// // bank();
// const { getAmount, setAmount } = bank();
// console.log(getAmount());
// setAmount();
// setAmount();
// console.log(getAmount());
// function engine() {
//   let oilInLit = 5;
//   //   let message = `${oilInLit} Litre Left`;
//   function getOil() {
//     // console.log(message);
//     // return message;
//     return oilInLit;
//   }
//   function drive() {
//     oilInLit = oilInLit - 1;
//   }
//   console.log(oilInLit);
//   return {
//     getOil,
//     drive,
//   };
// }
// const { drive, getOil } = engine();
// drive();
// drive();
// getOil();

function bank() {
  let amount = 10;
  function getAmount() {
    return amount;
  }
  function setAmount() {
    amount++;
  }
  //   console.dir(getAmount);
  //   console.dir(setAmount);

  return {
    getAmount,
    setAmount,
    amount,
  };
}
// bank();
const { getAmount, setAmount, amount } = bank();
console.log(getAmount());
setAmount();
setAmount();
console.log(getAmount());
console.log(amount);
