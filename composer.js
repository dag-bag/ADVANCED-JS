// function composer(...fns) {
//   return function (...args) {
//     return fns.reduceRight((acc, fn, index) => {
//       return Array.isArray(acc) ? fn(...acc) : fn(acc);
//     }, args);
//   };
// }

// function add(...args) {
//   return args.reduce((a, b) => a + b, 0);
// }
// function cube(...args) {
//   return args.map((value) => {
//     return value ** 3;
//   });
// }

// const addandcube = composer(cube, add);
// console.log(addandcube(2));

const Ok = (value) => ({
  ok: true,
  map: (fn) => Ok(fn(value)),
  chain: (fn) => fn(value),
  getOrElse: () => value,
  getOrError: () => null,
});

const Err = (error) => ({
  ok: false,
  map: () => Err(error),
  chain: () => Err(error),
  getOrElse: (fallback) => fallback,
  getOrError: () => error,
});

const validateInput = ({ email, password }) => {
  if (!email || !password) return Err("Missing credentials");
  return Ok({ email, password });
};

const findUser = ({ email, password }) => {
  const fakeDB = [{ email: "admin@test.com", password: "1234", id: 1 }];
  const user = fakeDB.find((u) => u.email === email);
  return user ? Ok({ user, password }) : Err("User not found");
};

const checkPassword = ({ user, password }) => {
  return user.password === password ? Ok(user) : Err("Wrong password");
};

const createToken = (user) => {
  // fake token
  return Ok(`token-${user.id}`);
};

console.log(
  validateInput({ email: "virender", password: "sdf" }).chain(() => {
    return "hello";
  })
);
