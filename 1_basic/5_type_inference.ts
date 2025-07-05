/**
 * 타입 추론
 * Inference
 */

let stringType = 'string';
let booleanType = true;
let numberType = 20;

booleanType=false;
booleanType='false';

const constStringType = 'const string'
const constBooleanTpye = true;

let jin = {
    name: '안유진',
    age: 2003
}


const jin2 = {
    name: '안유진',
    age: 2003
};
jin2.name = "코팩";
console.log(jin2);


const jin3 ={
  name: '안유진' as const ,
    age: 2003 as const,
};
jin3.name = "코팩";



/**
 * Array
 */

let numbers = [1,2,3,4,5];
let numbersAndString = [1,2,3,'4'];

numbers.push('6');
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[100];

//tuple
const twoNumbers = [1,3] as const;

twoNumbers[0] = 10;
twoNumbers.push(100);
const first = twoNumbers[0];
const first2 = twoNumbers[3];