import {testOperations, realOperations, realStack, testStack} from "./day05data.js"

console.log('day05')

const stackInput = realStack
	.split('\n')
	.map(row => row
		.replace(/\s{3}/g, ' ')
		.split(' '))

const buildStack = (rawStack) => {
	let stack = []
	for (let i = rawStack.length-1; i >= 0; i--) {
		stack[i] = []
		for (let j = 0; j < rawStack[i].length-1; j++) {
			if(rawStack[j][i])stack[i].unshift(rawStack[j][i])
		}
	}
	return stack
}

const moveOne = (from, to, stack) => {
	const crate = stack[from].pop()
	stack[to].push(crate)
}

const moveMultiple = (quantity, from, to, stack) =>  {
	const crate = []
	for (let i = 0; i < quantity; i++) {
		crate.unshift(stack[from].pop())
	}
	stack[to] = [...stack[to], ...crate]
}

const cleanOperations = (operations) => {
	return operations.split('\n')
		.map(op => op
			.replace('move ', '')
			.replace('from ', '')
			.replace('to ', '')
			.split(' ')
		)
}

const operateCrateMover9000 = (operations) => {
	let stack = buildStack(stackInput)
	const opArr = cleanOperations(operations)

	opArr.forEach(oneOp => {
		for (let i = 0; i < oneOp[0]; i++) {
			moveOne(oneOp[1]-1, oneOp[2]-1, stack)
		}
	})
	console.log(stack)
}

const operateCrateMover9001 = (operations) => {
	let stack = buildStack(stackInput)
	const opArr = cleanOperations(operations)

	opArr.forEach(oneOp => {
		moveMultiple(oneOp[0],oneOp[1]-1,oneOp[2]-1, stack)
	})
	console.log(stack)
}

operateCrateMover9000(realOperations)
operateCrateMover9001(realOperations)