import { testData, testResult1,testResult2, realData } from "./day01data.js";
import { Service } from "../services/service.js"
const service = new Service()

const myfunc1 = () => {
    const myData = service.getNumArrFromStr(testData)
    console.log('func1')
}

myfunc1()