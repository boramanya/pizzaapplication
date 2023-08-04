//pizza object- id, name, desc, price, rating, image 

class Product{
    constructor(id,name,desc,price, url){
        //this- keyword  of current object 
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.price=price;
        this.url=url;
        this.isAddedToCart= false;
    }
}
export default Product;