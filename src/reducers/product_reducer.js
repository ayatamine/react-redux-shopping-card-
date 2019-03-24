import json_data from '../data/data.json';

import {BEST_SELLING, TITLE_ASCENDING,TITLE_DESCENDING,
    PRICE_ASCENDING,PRICE_DESCENDING,CREATED_ASCENDING,
    CREATED_DESCENDING,
    GET_BY_CATEGORY,
    GET_BY_TAG,
    ADD_PRODUCT} from '../actions/index';



function products(state=json_data, action){
     switch (action.type) {
         case BEST_SELLING:
             return filterAscDesc("buy_count",'desc');
        case TITLE_ASCENDING:
             return filterAscDesc("product_name",'asc');
        case TITLE_DESCENDING:
             return filterAscDesc("product_name",'desc');
        case PRICE_ASCENDING:
             return filterAscDesc("price",'asc');
        case PRICE_DESCENDING:
             return filterAscDesc("price",'desc');
        case CREATED_ASCENDING:
             return filterAscDesc("created_at",'asc');
        case CREATED_DESCENDING:
             return filterAscDesc("created_at",'desc');
        case GET_BY_CATEGORY :
             if(action.category ==="All") return json_data;
             let products = json_data.filter(item => item.category === action.category);
             return products;
        case GET_BY_TAG :
              products = json_data.filter(item => item.mostly_color === action.tag);
             return products;   
        case ADD_PRODUCT:
              products =[...json_data,action.product];
              return products
         default:
             return state;
     }
}




function filterAscDesc(property,order_type){
    let property_table = json_data.map(item => item[property]);
    console.dir(property_table);
    // sort by default
    property_table = property_table.sort();
    if(property === "price"){
        property_table = property_table.sort((a, b) => { return a-b ;});
    }
    //// if the sort is desc
    if(order_type === 'desc'){
        property_table.reverse();
    }
    ////  get the result that match our sort type
    let new_products=[];var i=0;
    while(i < property_table.length){
        json_data.forEach(item => {
          if((item[property] === property_table[i]) && (!new_products.includes(item))){
              new_products.push(item);
          }
      }
      
     )
     i++;
    }
    return new_products;
}



export default products;