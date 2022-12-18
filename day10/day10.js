import  {testData, realData} from './day10data.js'

let cycle = 1, value = 1, interestingCycles = [20, 60, 100, 140, 180, 220], results = [], pixelRow = [], pixels = [], myMod = 40

const operations = {
	noop:()=> {
		moveCycle()
	},
	addx:(v)=> {
		moveCycle()
		moveCycle()
		value += (v * 1)
	}
}

const moveCycle = () => {
	// part 1
	if(interestingCycles.includes(cycle)) results.push(value*cycle)

	cycle++
	// part2
	const pixel = (value - pixelRow.length+1 <= 2  && value - pixelRow.length+1 >= 0) ? '#' : '.'
	pixelRow.push(pixel)

	if(cycle % myMod === 1 ) {
		pixels.push(pixelRow.join(''))
		pixelRow = []
	}
}

realData
	.split('\n')
	.map(row => row.split(' '))
	.forEach(instruction => operations[instruction[0]](instruction[1]))

// part 1
console.log(results.reduce((a,b)=> a+b))

// part 2
console.table(pixels)