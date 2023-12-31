const addToDb = id => {

    let shoppingCart = {};

    // get the shopping cart 
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        // console.log(storedCart);
        shoppingCart = JSON.parse(storedCart);
    }
    else{
        shoppingCart = {};
    }


    // add quantity
    const quantity = shoppingCart[id];
    // const quantity = localStorage.getItem(id);

    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // console.log('already exits');
        // const newQuantity = parseInt(quantity) + 1;
        // localStorage.setItem(id, newQuantity);
    }
    else{
        shoppingCart[id] = 1;
        // console.log('new item');
        // localStorage.setItem(id, 1);
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const removeFromDb = id => {
    console.log('inside fake db' , id);
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            // console.log('exists in the cart');
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart' , JSON.stringify(shoppingCart));
        }   
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}



export {addToDb, removeFromDb, deleteShoppingCart}