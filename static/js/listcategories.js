var categories = document.getElementsByName("categories");
var products = document.getElementsByName("products");
var id_categ = [];

function check(){
	for (var i = 0; i < categories.length; i++) {
		if(categories[i].type == 'checkbox' && categories[i].checked == true){
			id_categ[i] = categories[i].value;
			product_show(categories[i].value);
		}
		else{
			id_categ[i] = 0;
			product_hidden(categories[i].value);
		}
	}
	show_all_products();
}

function product_show(categ){
	for (var j = 0; j < products.length; j++) {
		if(categorie_of_product(products[j].value) == categ){
		 	document.getElementById(products[j].value).style.display = "";
		}
	}
}

function product_hidden(categ){
	for (var j = 0; j < products.length; j++) {
		if(categorie_of_product(products[j].value) == categ){
			document.getElementById(products[j].value).style.display = "none";
		}
	}
}

function categorie_of_product(value){
	return value.split("-")[1];
}

function show_all_products(){
	var code = 0;
	for (var i = 0; i < id_categ.length; i++) {
		if(id_categ[i] != 0){
			product_show(id_categ[i]);
			code++;
		}
	}
	if(code==0){
		for (var j = 0; j < products.length; j++) {
		 	document.getElementById(products[j].value).style.display = "";	
		}
	}
}


var all_producer_products = document.getElementsByName("obj_producer_product");
var flag = false;

function show_producers(prod){
	if(prod.checked == true){
		document.getElementById("show_producer").click();
		for (var i = 0; i < all_producer_products.length; i++) {
			if(all_producer_products[i].getAttribute('value').split("-")[0] == prod.value.split("-")[0]){
				flag = true;
				proion = all_producer_products[i].getAttribute('value').split("-")[1];
				document.getElementById(all_producer_products[i].getAttribute('value')).style.display = "";
				document.getElementById('quantity-'+all_producer_products[i].getAttribute('value')).style.display = "";
				document.getElementById('price-'+all_producer_products[i].getAttribute('value')).style.display = "";
				document.getElementById('button_add_cart-'+all_producer_products[i].getAttribute('value')).style.display = "";
			}
			else{
				document.getElementById(all_producer_products[i].getAttribute('value')).style.display = "none";
				document.getElementById('quantity-'+all_producer_products[i].getAttribute('value')).style.display = "none";
				document.getElementById('price-'+all_producer_products[i].getAttribute('value')).style.display = "none";
				document.getElementById('button_add_cart-'+all_producer_products[i].getAttribute('value')).style.display = "none";
			}
		}
		texttitlepopup(proion);
		flag = false;
	}
}

function texttitlepopup(product){
	if(flag)
		document.getElementById("text-title-popup").innerHTML = "Πάγκοι για " + product;
	else
		document.getElementById("text-title-popup").innerHTML = "Δε είναι διαθέσημο το προιόν";
};


var total = parseFloat(document.getElementById('total').getAttribute('value'));

function add_product(prod){
	total = total + parseFloat(prod.getAttribute('value'));
	document.getElementById('total').innerHTML = 
	'<img src="https://img.icons8.com/material/30/000000/add-shopping-cart.png">'+total+'€';
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}