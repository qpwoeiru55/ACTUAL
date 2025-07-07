/**
 * defining function
 */


function pritnName(name){
    console.log(name);
    
}

function pritnName2(name: string){
    console.log(name);    
}

function returnTwoCouples(person1: string, person2: string){
return `${person1}과 ${person2}은 사귀고 있습니다.`
}

console.log(returnTwoCouples('아이유','코팩'));
returnTwoCouples(0,1);


/**
 * optional parameter
 */

function multiplyOrReturn(x: number, y? :number){
    if(y){
        return x * y;
    }else{
        return x;
    }
}

console.log(multiplyOrReturn(10,20));
console.log(multiplyOrReturn(20));


function multiplyOrReturn2(x: number, y: number = 20){
    return x*y;
}


console.log(multiplyOrReturn2(10,30));
console.log(multiplyOrReturn2(10));


/**
 * 나머지 매개변수
 */


function getInfiParameters(...args: string[]){
    return args.map((x) => `너무좋아 ${x}`)
}

console.log(getInfiParameters('ddd','222','3333'));
console.log(getInfiParameters(1,2,3));


/**
 * return Type
 */

function addTwoNumbers(x: number, y: number){
    return x + y;
}

console.log(addTwoNumbers(10,20));

function randomNumber(){
    return Math.random() > 0.5 ? 10 : '랜덤';    
}

randomNumber();


function subtractNumbers(x: number, y:number) : number{
    return x - y;
}

const subtractNumbers2 = (x: number, y:number) : number =>{
    return x - y;
}

/**
 * 특수 반환 타입
 */

function doNotReturn(): void{
    console.log("읎다");  
}

function throwError(): never{
    while(true){

    }
}

function throwError2(): never{
    throw Error();
}
