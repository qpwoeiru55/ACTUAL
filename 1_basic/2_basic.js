"use strict";
/**
 *
 * Types
 */
let helloText = 'hello';
// helloText = true;
/**
 * 7개 타입
 */
const stringVar = 'String';
const numberVar = 3;
const bigIntvar = BigInt(999999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 any, unknown, never
 */
let anyVar;
anyVar = 100;
anyVar = "100";
anyVar = true;
let testNumber = anyVar;
let testString = anyVar;
let testBolean = anyVar;
let unknownType;
unknownType = 100;
unknownType = "100";
unknownType = true;
let testNumber2 = unknownType;
let testString2 = unknownType;
let testBolean2 = unknownType;
let unknownType2 = unknownType;
let anyType2 = unknownType;
let neverTpye = null;
let neverTpye = "100";
let neverTpye = 222;
/**
 * 리스트
 */
const koreanGirlGroup = ['아이브', '블핑', 12];
const booleanList = [true, false];
