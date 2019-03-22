
import {combineReducers} from 'redux';
import products from './product_reducer';
import Currency from './cCurrencyReducer';
import singleProduct from './single_product_reducer';
import cartItems from './cartItems_reducer';

const rootReducer =combineReducers({
    products,Currency,singleProduct,cartItems
});

export default rootReducer;
