// import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async() =>{
    const res = await fetch('products.json')
    const products = await res.json();

// const storedCart = getShoppingCart();
// const savedCart = [];



// for(const id in storedCart){
// const addProduct = products.find (pd => pd.id === id);
// if(addProduct){
//     const quantity = storedCart[id];
//     addProduct.quantity = quantity;
//     savedCart.push(addProduct);
// }
// }
    
  
    return products;

}

export default cartProductLoader;