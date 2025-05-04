function composer(...fns) {
  return function (...args) {
    return fns.reduceRight((acc, fn, index) => {
      return index === fns.length - 1 ? fn(...acc) : fn(acc);
    }, args);
  };
}

function add(...args) {
  return args.reduce((a, b) => a + b, 0);
}
function cube(value) {
  return value ** 3;
}

const addandcube = composer(cube, add);
console.log(addandcube(1, 2, 3));
