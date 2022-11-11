// QUESTION #1
const DisplayCustomMessage = (n) => {
  const is_even = n % 2 === 0;

  return is_even ? "Hello" : "World";
};

DisplayCustomMessage(3);

// What will be the output?

/*********************
 *   A. Hello
 *   B. World
 *   C. Hello World
 *   D. HelloWorld
 ********************/

let value = "";
for (let x = 1; x <= 10; x++) {
  value += x;
}

console.log(value);
