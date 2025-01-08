class Logger {
    constructor(){
        this.logs = []
    }
    getCount(){
        return this.logs.length;
    }
    log(message){
        this.timestamp = new Date()
        this.message = message
        this.logs.push({timestamp: this.timestamp, messsage: this.message});
    }
}

class Singleton {
    constructor(){
        if(!Singleton.instance){
            Singleton.instance = new Logger()
        }
    }
    getInstance(){
        return Singleton.instance
    }
}


module.exports = Singleton;


// module.exports = Logger;
