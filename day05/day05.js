import {testOperations, realOperations, realStack, testStack} from "./day05data.js"

console.log('day05')

const MOVER_TYPES = {
	9000:9000,
	9001:9001,
}

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

const moveMultiple = (quantity, from, to, stack, moverType) =>  {
	const length = stack[from].length
	const crate = moverType === MOVER_TYPES["9000"] ? stack[from].slice(-quantity).reverse() : stack[from].slice(-quantity)
	stack[from].length = length-quantity
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

const operate = (operations, moverType) => {
	let stack = buildStack(stackInput)
	const opArr = cleanOperations(operations)

	opArr.forEach(oneOp => {
		moveMultiple(oneOp[0],oneOp[1]-1,oneOp[2]-1, stack, moverType)
	})
	console.log(stack)

}

operate(realOperations, MOVER_TYPES["9000"])
operate(realOperations, MOVER_TYPES["9001"])