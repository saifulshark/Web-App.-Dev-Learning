class Product{
    constructor(name, price){
        this.name=name;
        this.price=price;
    }
    displayProducts(){
        console.log(`The product name is ${this.name} and price is ${this.price}`);
    }
    totalSumofCalculate(salesTax){
        return this.price+(this.price*salesTax);
    }
}
const salesTax=5/100;
const product1=new Product("Laptop",500);
const product2=new Product("Mobile",200);
const product3=new Product("Tablet",100);
const product4=new Product("SmartWatch",50);

product1.displayProducts();
product2.displayProducts();
product3.displayProducts();
product4.displayProducts();

const totalPrice=product1.totalSumofCalculate(salesTax);
console.log(`The total price of ${product1.name} after GST is ${totalPrice}`);
