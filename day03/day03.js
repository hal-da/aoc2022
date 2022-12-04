import { testData, testResult1,testResult2, realData } from "./day03data.js"

const findDoublette = (str)=> {
    for(let i=0; i< str.length/2; i++){
        for(let j = str.length/2; j< str.length; j++){
            if(str[i]===str[j]) return str[i]
        }
    }
    return -1
}

const findOneInThree = (str)=> {
    if(str.length < 3) return null
    const arrs = str
        .trim()
        .split('\n')
        .sort((a,b)=> a.length - b.length)

    for(let i =0; i<arrs[0].length;i++){
        if(arrs[1].includes(arrs[0][i]) && arrs[2].includes(arrs[0][i])) return arrs[0][i]
    }
    return -1
}

const convertToPriorityInt = (char)=> {
    if(!char)return 0
    let v = char.charCodeAt(0)-96
    return v > 0 ? v : v+58
}

const firstPuzzle = realData
    .split('\n')
    .map(str => convertToPriorityInt(findDoublette(str)))
    .reduce((sum,el)=> sum + el)

const secondPuzzle  = realData
    .split(/(.+\n.+\n.+)/)
    .map(arr => convertToPriorityInt(findOneInThree(arr)))
    .reduce((sum,el)=> sum + el)

console.log(firstPuzzle);
console.log(secondPuzzle);