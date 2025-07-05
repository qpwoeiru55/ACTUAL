/**
 * Casting
 * 
 * ts에서 casting을 하면 js에서는 적용이 안됨
 */

const codefactory = "code factory";
let testNumber = 3;

console.log(codefactory.toUpperCase());
console.log(testNumber.toUpperCase());


let sampleNumber: any = 5;
//console.log(sampleNumber.toUpperCase());

let stringVar = sampleNumber as String;

console.log(typeof (sampleNumber as String));


let number = 5;
console.log((number as any).toUpperCase());
