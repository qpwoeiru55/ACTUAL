/**
 * type adn interface
 */


/**
 * tpye
 * ts의 타입에 이름을 지우는 역할
 */

type NewStringType = string;
type NewNumberType = number;
type MaleOrFemail = 'male' | 'female';

const stringVar: NewStringType = 'test';

type IdolType = {
    name : string;
    year?: number;
}

const yuJin: {
    name : string;
    year: number;
} = {
    name: '안유진',
    year: 2002,
}

const yuJin2: IdolType={
    name: '안유진',
    //year: 2002,
}


/**
 * Interface
 *   
 */
interface IdolInterface {
    name: string;
    year: number;
}

const yuJin3: IdolInterface={
    name: '안유진',
    year: 2002,
}

interface IdolIt{
    name: NewStringType;
    year: NewNumberType
}

const yuJin4: IdolIt={
    name: '안유진',
    year: 2002,
}

interface IdolOptional{
    name: string;
    year?: number;
}

const yuJin5: IdolOptional={
    name: '안유진',
}