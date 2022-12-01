import { testData, testResult1,testResult2, realData } from "./day01data.js"

const mySumArr = realData
    .split('\n\n')
    .map(arr => arr.split('\n')
        .map(Number)
        .reduce((a,b)=>a+b)
    ).sort((a,b)=>a-b)

console.log(mySumArr.at(-1));
console.log(mySumArr.at(-1) + mySumArr.at(-2) + mySumArr.at(-3));