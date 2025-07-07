/**
 * 
 * Intersection
 * 
 * And
 */


interface Human {
    name: string;
    age: number;
}


interface Contacts {
    phone: number;
    address: string;
}

type HumanAndConTacts = Human & Contacts;

let humanAndConTacts: HumanAndConTacts ={
    name: '코팩',
    age: 23,
    phone: 111,
    address: 'ddddd'
}

type NumberAndString = number & string;
//never타입으로 됨

let numberAndString: NumberAndString = NumberAndString;