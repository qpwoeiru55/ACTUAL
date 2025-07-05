/**
 * 
 * Types
 */
let helloText: string = 'hello';
// helloText = true;

/**
 * 7개 타입
 */

const stringVar : string = 'String';
const numberVar : number = 3;
const bigIntvar : bigint = BigInt(999999);
const booleanVar : boolean = true;
const symbolVar : symbol = Symbol(1);
const nullVar : null = null;
const undefinedVar : undefined = undefined;



/**
 * TS에만 any, unknown, never
 */

let anyVar : any 
anyVar = 100;
anyVar = "100";
anyVar = true;

let testNumber: number = anyVar;
let testString: string = anyVar;
let testBolean: boolean = anyVar;



let unknownType: unknown;
unknownType = 100;
unknownType = "100";
unknownType = true;

let testNumber2: number = unknownType;
let testString2: string = unknownType;
let testBolean2: boolean = unknownType;
let unknownType2: unknown = unknownType;
let anyType2: any = unknownType;



let neverTpye: never = null;
let neverTpye: never = "100";
let neverTpye: never = 222;



/**
 * 리스트
 */
const koreanGirlGroup: string[] = ['아이브','블핑', 12];
const booleanList: boolean[] = [true, false];




