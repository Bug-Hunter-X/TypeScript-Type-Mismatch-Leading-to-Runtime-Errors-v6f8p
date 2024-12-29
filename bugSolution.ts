function add(a: number, b: number): number {
  return a + b;
}

function isNumber(x: any): x is number {
  return typeof x === 'number';
}

function addSafe(a: any, b: any): number {
  if(isNumber(a) && isNumber(b)){
    return a + b;
  }
  else{
    throw new Error("Invalid input: Both parameters must be numbers");
  }
}

let result1 = addSafe(10, 5); // Correct
console.log(result1); // Output: 15

try {
  let result2 = addSafe("hello", 5); // Type guard throws an error
  console.log(result2);
} catch (e) {
  console.error(e); // Output: Error: Invalid input: Both parameters must be numbers
}

//Alternatively using Type Assertion (less safe):
let result3 = add((<number>"10"),5) // This will compile and run but may lead to unexpected results if the type assertion is incorrect.
console.log(result3); //Output: NaN