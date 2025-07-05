/**
 * Enum
 */


/**
 * DONE 
 * ERROR
 * LOADING
 * INITIAL
 */

function runWork(){
    let state = 'INITIAL';
    try{
        state = 'LOADING';
        state = 'DONE';
    }catch(e){
        state = 'ERROR';
    }finally{
        return state;
    }
}

console.log(runWork() === 'DONE');


const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';


function runWork2(){
    let state = initialState;
    try{
        state = loadingState;
        state = doneState;
    }catch(e){
        state = errorState;
    }finally{
        return state;
    }
}

console.log(runWork2() === doneState);


enum State{
    DONE = 'DONE',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    INITIAL = 'INITIAL'    
}


function runWork3(){
    let state = State.INITIAL;
    try{
        state = State.LOADING;
        state = State.DONE;
    }catch(e){
        state = State.ERROR;
    }finally{
        return state;
    }
}

console.log(runWork3() === State.DONE);
console.log(runWork3());

