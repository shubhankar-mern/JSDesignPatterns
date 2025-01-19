var CatalogItem = require('./CatalogItem');
var CatalogGroup = require('./CatalogGroup');

var boots = new CatalogItem("Leather Boots", 79.99);
var sneakers = new CatalogItem("Kicks", 39.99);
var flipFlops = new CatalogItem("California work boots", 19.99);

var group_shoes = new CatalogGroup("Shoes and Such", [boots, sneakers, flipFlops]);

var group_food = new CatalogGroup("Food and Such", [new CatalogItem("Burger", 9.99),new CatalogItem("Pizza", 5.99)]);


var MainCatalog = new CatalogGroup("All Items", [group_shoes, group_food]);
// console.log( 'boots total: ', `$${boots.total}` );
// console.log( 'shoes total: ', `$${group_shoes.total}`);

// boots.print();
// sneakers.print();

//group_shoes.print();
//group_food.print();
MainCatalog.print()