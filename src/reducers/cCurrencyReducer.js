import {CHANGE_CURRENCY} from '../actions/index';
import {CALCULATE_CURRENCY} from '../actions/index';
import currencies_data from '../data/currencies.json';

function Currency(state =currencies_data,action){
    switch (action.type) {
        case CHANGE_CURRENCY:
            
            state.map(item => console.log(item));
           // let signe =[state.signes];console.log("sss"+signe)//.filter(item => item[action.current_currency]);
           // let rate =state.rates.filter(item => item[action.current_currency])
            let current_currency =[...state,{current_currency:action.current_currency,signe:action.signe}]
            return current_currency;
        default:
            return ["$",1,"USD"];
    }
}
/*
function currenciesDetail(state=currencies_data, action){
    switch (action.type) {
        case CALCULATE_CURRENCY:
               return
            break;
    
        default:
            
    }
     
}

const CurrencyDetails =combineReducers({
    Currency,currenciesDetail
});
*/
export default Currency;