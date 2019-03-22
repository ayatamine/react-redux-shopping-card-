import json_data from '../data/data.json';
import {GET_SINGLE_PRODUCT} from '../actions/index';

function singleProduct(state = json_data, action){
    switch (action.type) {
         case GET_SINGLE_PRODUCT :
               let product = json_data.filter(item => item.id === action.id);
               return product[0];
    
         default:
             return {}
    }
}

export default singleProduct;