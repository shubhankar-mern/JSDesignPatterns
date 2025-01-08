const Logger = require('./logger');

const logger = new Logger().getInstance();

class Store{
    constructor(name,inventory=[]){
        this.name = name;
        this.inventory = inventory;
        logger.log(`A new Store is formed with name ${name} `);
    }
    

}

module.exports = Store;