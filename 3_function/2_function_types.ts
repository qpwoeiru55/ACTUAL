/**
 * function type
 */

type Mapper = (x: string) => string;

const runner = () =>{
    return ['a','b','c'].map((x) => '리스트 ${x}');
}

const runner2 = (callback: Mapper) =>{
    return ['a','b','c'].map(callback);
}

console.log(runner());
console.log(runner2((x) => '리스트 ${x}'));
