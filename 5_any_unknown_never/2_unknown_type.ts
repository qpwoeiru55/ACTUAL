/**
 * Unknown Type
 */
let anyValue: any;

anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = [];
anyValue = {};
anyValue = null;
anyValue = undefined;

let unknownValue: unknown;

unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = [];
unknownValue = {};
unknownValue = null;
unknownValue = undefined;

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;
// let nullType: null = anyValue;
// let undefinedType: undefined = anyValue;

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;
// let nullType: null = unknownValue;
// let undefinedType: undefined = unknownValue;

anyValue.toUpperCase();
anyValue.name;
new anyValue();

// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

/////////////////////////////////////////////////////////////


function isString(target: unknown) : target is string{
    return typeof target === 'string';
}

let testVal: unknown;

if(isString(testVal)){
    testVal;
}

/////////////////////////////////////////////////////////////


/**
 * Union Type
 */
type uOrString = unknown | string;   // unknown
type uOrBoolean = unknown | boolean; // unknown
type uOrNumber = unknown | number;   // unknown
type uOrAny = unknown | any;         // any
type anyOrU = any | unknown;         // any

/**
 * Intersection Type
 */
type uAndString = unknown & string;   // string
type uAndBoolean = unknown & boolean; // boolean
type uAndNumber = unknown & number;   // number
type uAndAny = unknown & any;          // any
type anyAndU = any & unknown;          // any

/**
 * Operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2;
// number1 - number2;
// number1 * number2;
// number1 / number2;

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;