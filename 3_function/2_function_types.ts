/**
 * function type
 */

type Mapper = (x: string) => string;

const runner = () =>{
    return ['a','b','c'].map((x) => `리스트 ${x}`);
}

const runner2 = (callback: Mapper) =>{
    return ['안유진', '장원영', '레이'].map(callback,);
}

console.log(runner());
console.log(runner2((x) => `아이브 멤버: ${x}`));





type MultiplyTwoNumbers = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumbers = (x, y)=>{
    return x+y;
}


/**
 * interface로 함수
 */

interface IMultiplyTwoNUmbers{
    (x: number, y: number) : number;
}

const iMultiplyTwoNUmbers: IMultiplyTwoNUmbers = (x,y) =>{
    return x * y;
}
console.log(iMultiplyTwoNUmbers(2,5));

