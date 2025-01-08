var PersonBuilder = require('./PersonBuilder')

// Employees
// var sue = new Person('Sue', true, true, 60);
// var bill = new Person('Bill', true, false, 20);
// var phil = new Person('Phil', true, false);


var sue = new PersonBuilder('Sue').makeEmployee().makeManager().fullTime(60).build();
var bill = new PersonBuilder('Bill').makeEmployee().fullTime(20).build();
var phil = new PersonBuilder('Phil').makeEmployee().build();

// // Shoppers
var charles = new PersonBuilder('Charles').creditAccount(500).shopList(['jeans', 'sunglasses']).build();  
var tabbitha = new PersonBuilder('Tabbitha').creditAccount(1000).build();

 console.log(sue.toString())
 console.log(bill.toString())
 console.log(phil.toString())
 console.log(charles.toString())
 console.log(tabbitha.toString())