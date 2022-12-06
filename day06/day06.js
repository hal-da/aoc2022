import {day06, realData, testData} from "./day06data.js";
const myData = realData

const findSub = (subLength) => {
	for (let i = 0; i < myData.length; i++) {
		const sub = new Set(myData.substring(i,i+subLength))
		if(sub.size === subLength) return i + subLength
	}
}

console.log(findSub(4))
console.log(findSub(14))