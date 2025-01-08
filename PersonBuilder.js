var Person = require('./Person');
// name, isEmployee=false, isManager=false, hours=40, money=0, shoppingList=[]
class PersonBuilder{

    constructor(name){
        this.name = name
        return this;
    }

    makeEmployee(){
        this.isEmployee = true
        this.hours = 40
        return this;
    }
    makeManager(){
        this.isManager = true
        return this;
    }
    fullTime(hours=40){
       this.hours = hours
       return this
    }
    creditAccount(money=0){
      this.money = money
      return this
    }
    shopList(list=[]){
      this.shoppingList = list
      return this 
    }
    build(){
        return new Person(this)
    }



}



module.exports = PersonBuilder;