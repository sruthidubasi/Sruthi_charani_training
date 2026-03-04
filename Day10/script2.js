var products = [
  { productID: 101, name: "Laptop", price: 50000, qty: 3 },
  { productID: 102, name: "Mouse", price: 500, qty: 10 },
  { productID: 103, name: "Keyboard", price: 1500, qty: 4 },
  { productID: 104, name: "Monitor", price: 12000, qty: 7 }
];

for (var i = 0; i < products.length; i++) {

  var totalPrice = products[i].price * products[i].qty;

  console.log("Product ID:", products[i].productID);
  console.log("Product Name:", products[i].name);
  console.log("Price:", products[i].price);
  console.log("Quantity:", products[i].qty);
  console.log("Total Price:", totalPrice);

  if (products[i].qty < 5) {
    console.log("Stock Status: Low Stock ⚠");
  } else {
    console.log("Stock Status: Stock Available ✅");
  }

  console.log("---------------------------");
}