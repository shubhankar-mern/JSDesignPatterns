const Logger = require('./logger');
const Shopper = require('./shopper');
const Store = require('./store');


const logger = new Logger().getInstance()

logger.log("Indexjs has started")


const shopper1 = new Shopper("Shubhankar",699)
const shopper2 = new Shopper("Atul",399)

const store1 = new Store("Walmart",[{"pizza": 500, "tomatoes": 500}])
const store2 = new Store("Tesco",[{"pizza": 500, "tomatoes": 500}])






logger.log("Indexjs has ended")



console.log("<========================TOTAL LOGS================================>")

let logObject= {
    totalLogCount : logger.getCount(),
    totalMessages : [...logger.logs]
}

console.log("logObject : ",logObject)