import { testData, testResult1,testResult2, realData } from "./day02data.js"


const gamePlan1 = {
    A:{
        X:4,
        Y:8,
        Z:3
    },
    B:{
        X:1,
        Y:5,
        Z:9
    },
    C:{
        X:7,
        Y:2,
        Z:6
    }
}

const gamePlan2 = {
    A:{
        X:3,
        Y:4,
        Z:8
    },
    B:{
        X:1,
        Y:5,
        Z:9
    },
    C:{
        X:2,
        Y:6,
        Z:7
    }
}


const game = (game, gamePlan) => {
    let sum = 0
    game
        .split('\n')
        .forEach(gameStr => {
            let g = gameStr.split(' ')
            sum += gamePlan[g[0]][g[1]]
        })
        console.log(sum);
}

console.log('day02');
game(realData, gamePlan1)
game(realData, gamePlan2)