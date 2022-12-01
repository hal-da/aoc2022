import { testData, testResult1,testResult2, realData } from "./day01data.js"

const mySumArr = [];

realData
    .split('\n\n')
    .map(obj => obj.split('\n')
        .map(Number)
    ).forEach(arr =>  mySumArr.push(arr.reduce((a,b)=>a+b)))

const sorted =  mySumArr.sort((a,b)=>a-b)
console.log(sorted.at(-1));
console.log(sorted.at(-1) + sorted.at(-2) + sorted.at(-3));