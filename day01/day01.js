import { testData, testResult1,testResult2, realData } from "./day01data.js"

const mySumArr = realData
    .split('\n\n')
    .map(arr => arr.split('\n')
        .map(Number)
        .reduce((a,b)=>a+b)
    ).sort((a,b)=>b-a)

const res1 = mySumArr[0]
const res2 = mySumArr[0] + mySumArr[1] + mySumArr[2]

console.log(res1);
console.log(res2);