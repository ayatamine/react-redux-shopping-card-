
import json_data from '../data/data.json';
import {GET_COMMANDED_PRODUCTS} from '../actions/index';
import {REMOVE_COMMANDED_PRODUCTS} from '../actions/index';



function cartItems(state = [], action){
    
    const data = JSON.parse(localStorage.getItem('cartItems')); 
    switch (action.type) {
        case GET_COMMANDED_PRODUCTS:
                let new_item ={user_id:1,product_id:parseInt(action.id),quantity:parseInt(action.quantity)};
                if(data.length > 0){
                let ids= data.map(item => item.product_id);
                
                 state.length =0;
                 if(!ids.includes(new_item.product_id)){
                      state=[...data,new_item];
                 }else{
                     state=data;
                 }
                }
                 // set the localstorage to new items
                localStorage.removeItem("cartItems");
                localStorage.setItem("cartItems",JSON.stringify(state))

                 return getProducts(state);
        case REMOVE_COMMANDED_PRODUCTS:
               
                let filtered_product = data.filter(item => +(item.product_id) !== +(action.id));
                // set the localStorage to new items
                console.log(filtered_product)
                localStorage.removeItem("cartItems");
                localStorage.setItem("cartItems",JSON.stringify(filtered_product))
                return getProducts(filtered_product);
        default:
            return getProducts(data);
    }
}

export default cartItems;
 //let cart_items =[{user_id:1, product_id:1,quantity:1},{user_id:1, product_id:3,quantity:4}];
 //localStorage.setItem("cartItems",JSON.stringify(cart_items))


function getProducts(state){
    let commanded_products =[];
    var i=0;
    while(i< state.length ) {
        json_data.forEach(element => {
            if(element.id === ""+state[i].product_id+""){
                  element.quantity =state[i].quantity;
                  commanded_products.push(element);
            }
        });
        i++;
    }
    return commanded_products;
}