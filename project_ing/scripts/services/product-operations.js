//contains the logic for fetching, adding , sorting, searching, deletion, updation
/* it talks to the network layer to bring th e json and converts json into objects and vice versa */ 

//window.addEventListener(
  //  'load', bindevents
//)
//function bindevents(){
   // document.getElementById('click me').addEventListener(
    //'click',   
    //()=>{
   //     alert('hello');
   // })


   import Product from '../models/product.js';
   import makeNetworkCall from './api-client.js';
   
   const productOperations = {
       products:[], // Key:value
       
       getProductsInCart(){
           const productInBasket = this.products.filter(product=>product.isAddedInCart);
           return productInBasket;
       },
   
       async loadProducts(){
           const pizzas = await makeNetworkCall();
           const pizzaArray = pizzas['Vegetarian'];
           const productsArray = pizzaArray.map(pizza=>{
               const currentPizza = new Product(pizza.id, pizza.name,
                    pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
                   return currentPizza;
                   })
                   console.log('********Product Array ', productsArray);
                   this.products = productsArray;
                   return productsArray;  // Wrap in Promise
               },
       
        sortProducts(){
   
       },
       search(pizzaId){
        const product = this.products.
        find(currentProduct=>currentProduct.id==pizzaId);
        console.log('Product Found ', product);
        product.isAddedInCart = true;
        console.log('Array ', this.products);
    }
   }
   export default productOperations;




















/*
import makeNetworkCall from './api-client.js';
import Products from '../models/product.js'; 

const productOperations={
    pizzas:[],
    carts:[],

    addToCart(product){
        this.carts.push(product);
    },
    removeFromCart(product){
        this.carts=this.carts.filter(pizza=>pizza.id!=product.id)
    },

    async loadProducts(){
        const pizzas=await makeNetworkCall();
        const pizzaArray=pizzas['Vegetarian'];
        const productsArray= pizzaArray.map(pizza=>{
            const currentPizza= new Products(pizza.id, pizza.name, pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url)
            return currentPizza;
        })
        console.log(productsArray);
        return productsArray;
    },
    sortProducts(){

    },
   
    searchProducts(id){
        console.log(this.pizzas);

        console.log('searching pizza ' , this.pizza.length);
        const searched=this.pizzas.filter(pizza=>pizza['id']);
        return searched;
    }
    
    
    search(pizzaId){
        const product = this.products.
        find(currentProduct=>currentProduct.id==pizzaId);
        console.log('Product Found ', product);
        product.isAddedInCart = true;
        console.log('Array ', this.products);
    },
    getProductsInCart(){
        const productInBasket = this.products.filter(product=>product.isAddedInCart);
        return productInBasket;
    },

}


export default productOperations;

*/