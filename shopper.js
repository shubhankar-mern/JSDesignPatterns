const Logger = require('./logger')
const logger = new Logger().getInstance();


class Shopper{
    constructor(name,money=0){
        this.name = name
        this.money = money
        logger.log(`A new Shopper by name ${name} has been registered`)
    }

}

module.exports = Shopper;