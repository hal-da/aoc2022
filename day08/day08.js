import {day08, testData, realData} from "./day08data.js";
console.log(day08)

const treeGrid = realData
	.split('\n')
	.map(trees => trees.split(''))

const l = treeGrid.length
const visibleTrees =  Array(l).fill(l).map(() => Array(l));

// part 1

const fromLeft = () => {
	for (let i = 1; i < treeGrid.length-1; i++) {
		let highestTree = treeGrid[i][0]
		visibleTrees[i][0] = highestTree
		for (let j = 1; j < treeGrid.length-1; j++) {
			if(treeGrid[i][j] > highestTree) {
				highestTree = treeGrid[i][j]
				visibleTrees[i][j] = treeGrid[i][j]
			} else visibleTrees[i][j] = 'X'
		}
	}
}

const fromRight = () => {
	for (let i = 1; i < treeGrid.length-1; i++) {
		let highestTree = treeGrid[i][treeGrid.length-1]
		visibleTrees[i][treeGrid.length-1] = highestTree
		for (let j = treeGrid.length-2; j > 0; j--) {
			if(treeGrid[i][j] > highestTree) {
				highestTree = treeGrid[i][j]
				visibleTrees[i][j] = treeGrid[i][j]
			}
		}
	}
}

const fromTop = () => {
	for (let j = 1; j < treeGrid.length - 1; j++) {
		let highestTree = treeGrid[0][j]
		visibleTrees[0][j] = highestTree
		for (let i = 1; i < treeGrid.length - 1; i++) {
			if(treeGrid[i][j] > highestTree) {
				highestTree = treeGrid[i][j]
				visibleTrees[i][j] = treeGrid[i][j]
			}
		}
	}
}

const fromBottom = () => {
	for (let j = 1; j < treeGrid.length-1; j++) {
		let highestTree  = treeGrid[treeGrid.length-1][j]
		visibleTrees[treeGrid.length-1][j] = highestTree
		for (let i = treeGrid.length-2; i > 0; i--) {
			if(treeGrid[i][j] > highestTree) {
				highestTree = treeGrid[i][j]
				visibleTrees[i][j] = treeGrid[i][j]
			}
		}
	}
}
export const corners = ()=>{
	const l = treeGrid.length-1
	visibleTrees[0][0] = treeGrid[0][0]
	visibleTrees[0][l] = treeGrid[0][l]
	visibleTrees[l][0] = treeGrid[l][0]
	visibleTrees[l][l] = treeGrid[l][l]
}

const visibleTreesCounter = () => {
	fromLeft()
	fromRight()
	fromTop()
	fromBottom()
	corners()

	let treeCounter = 0
	visibleTrees.forEach(col => {
		col.forEach(tree => {
			if(tree !== 'X') {
				treeCounter++
			}
		})
	})
	return treeCounter
}

// scenic score - part 2

const calcScenicScore = () =>{
	let highestScenicScore = 0
	for (let i = 1; i < treeGrid.length-1; i++) {
		for (let j = 1; j < treeGrid[i].length - 1; j++) {
			const scenicMultiplier = []
			//go left
			for (let k = j-1; k >= 0; k--) {
				if(treeGrid[i][k] >= treeGrid[i][j] || k === 0) {
					scenicMultiplier.push(j-k)
					break
				}
			}
			// go right
			for (let k = j + 1; k < treeGrid.length; k++) {
					// console.log('rechts davon',treeGrid[i][k] )
					// console.log(k, 'k')
				if(treeGrid[i][k] >= treeGrid[i][j] || k === treeGrid[i].length-1) {
					scenicMultiplier.push(k-j)
					break
				}
			}
			// go up
			for (let k = i-1; k >= 0; k--) {
				// console.log(treeGrid[k][j])
				if(treeGrid[k][j] >= treeGrid[i][j] || k=== 0){
					scenicMultiplier.push(i-k)
					break
				}
			}
			// // go down
			for (let k = i+1; k < treeGrid[i].length; k++) {
				if(treeGrid[k][j] >= treeGrid[i][j] || k === treeGrid[i].length-1){
					scenicMultiplier.push(k-i)
					break
				}
			}
			const scenicSum = scenicMultiplier.reduce((a,b)=> a*b)
			if(scenicSum > highestScenicScore ) highestScenicScore= scenicSum
		}
	}
	return(highestScenicScore)
}
console.log('part 1: ', visibleTreesCounter())
console.log('part 2: ', calcScenicScore())