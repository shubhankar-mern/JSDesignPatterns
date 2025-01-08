var userFactory = require('./userFactory');

// var alex = Shopper('Alex Banks', 100);
// var eve = Employee('Eve Porcello', 100,'employee', 'This and That');

var alex = userFactory('Alex Banks', 100);
var eve = userFactory('Eve Porcello', 100,'employee', 'This and That');

eve.payDay(100);
eve.payDay(100);
eve.payDay(250);
eve.payDay(500);

console.log( alex.toString() )
console.log( eve.toString() )
