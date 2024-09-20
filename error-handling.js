// 1.
function sum(array) {
  try {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  } catch (error) {
    if (error instanceof TypeError) {
      return "Please provide an array"
    }
  }
}

function sayName(name) {
  if (typeof name === "string") {
    console.log(name);
  } else {
    throw new Error("Invalid name! Must be a string!");
  }
}

let res = sum(null);
console.log(res);

// 2.
// tests
try {
  sayName("Alex");
} catch (error) {
  console.error(error.message);
}

try {
  sayName(1);
} catch (error) {
  console.error(error.message);
}
// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

try {
  greet(null);
} catch (error) {
  console.error("Hello World!");
}
