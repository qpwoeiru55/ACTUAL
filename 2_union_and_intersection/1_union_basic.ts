/**
 *  
 * 유니언 타입을 병합할수 있는 방법중 하나
 * 
 */


type StringOrBooleanTpye = string | boolean;
let stringOrBooleanTpye: StringOrBooleanTpye = '아이브';
stringOrBooleanTpye = true;

type StrBoolNullType = string | boolean | null;

type StatsTypes = 'DONE' | 'LOADING' | 'ERROR';
let state: StatsTypes = 'DONE';
state = 'LOADING';


type StringListOrBooleanList = string[] | boolean[];

let stringListOrBooleanList: StringListOrBooleanList = [
    '아이유',
    '김고운',
    '박소담',
]
stringListOrBooleanList = [
    true,
    false,
]

stringListOrBooleanList = [
    true,
    '박소담',
]

type StrOrNumberList = (string | number)[];
let strOrNumberList: StrOrNumberList = [
    '아이유',
    '김고운',
    2,
]


/**
 * interface로 사용하는 union
 */

interface Animal {
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}
type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman={
    name: '최지호',
    age: 12,
    address: '대한민국',
}

console.log(animalOrHuman.address);
animalOrHuman={
    name: '오리',
    age: 12,
}

console.log(animalOrHuman.address);

let animalOrHuman2: {
    name: string;
    age: number;
} | {
    ame: string;
    age: number;
    address: string;
} = {
    name: '최지호',
    age: 12,
    address: '대한민국',
}

console.log(animalOrHuman2);


type Person = {
    name: string;
    age: number;
}

type Cat = {
    breed : string;
    country : string;
}

type PersonOrCat = Person | Cat;

const personOrCat: PersonOrCat ={
    name: '코팩',
    age: 32,
    breed: 'abcd',
    country: '영국'
}