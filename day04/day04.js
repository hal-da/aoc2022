import { testData, testResult1,testResult2, realData } from "./day04data.js"

console.log('day04');
const processedData = realData
	.split('\n')
	.map(pairs => pairs.split(',')
		.map(p => p.split('-')
			.map(Number))
	)

const fullOverlaps = elvesPairs => {
	let fullOverlaps = 0
	elvesPairs.forEach(pair => {
		if((pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1])
			|| (pair[1][0] >= pair[0][0] && pair[1][1] <= pair[0][1])) fullOverlaps++
		})
		return fullOverlaps
	}

const overlaps = elvesPairs => {
	let overlaps = 0
	elvesPairs.forEach(pair =>{
		if((pair[0][1] >= pair[1][0]) && pair[0][0]<= pair[1][1]) overlaps++
	})
	return overlaps
}
console.log(fullOverlaps(processedData))
console.log(overlaps(processedData))