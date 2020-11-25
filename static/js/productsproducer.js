var all_products = document.getElementsByName("produser-product");
var s = "";
for (var i = 0; i < all_products.length; i++) {
	s += all_products[i].value + "\n";
}
console.log(s);