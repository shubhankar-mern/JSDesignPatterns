var Shopper = require('./shopper')
var Employee =  require('./Employee')


var userFactory = (name,money=0,type="",employer) =>{
    if(type==="employee"){
        return new Employee(name,money,employer);
    }
    if(type===""){
        return new Shopper(name,money);
    }


}


module.exports = userFactory;