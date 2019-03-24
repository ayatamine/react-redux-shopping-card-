export const CHANGE_CURRENCY = 'CHANGE_CURRENCY';
export const CALCULATE_CURRENCY = 'CALCULATE_CURRENCY';
// filter type  
export const BEST_SELLING = 'best_selling';
export const TITLE_ASCENDING = 'title-ascending';
export const TITLE_DESCENDING = 'title-descending';
export const PRICE_ASCENDING = 'price-ascending';
export const PRICE_DESCENDING = 'price-descending';
export const CREATED_ASCENDING = 'created-ascending';
export const CREATED_DESCENDING = 'created-descending';
/// get products by category
export const GET_BY_CATEGORY = "GET_BY_CATEGORY";
/// get products by tags
export const GET_BY_TAG = "GET_BY_TAG";

// show the single product in modal 
export const GET_SINGLE_PRODUCT = "GET_SINGLE_PRODUCT";

// get the product commanded by the user 
export const GET_COMMANDED_PRODUCTS ='GET_COMMANDED_PRODUCTS';
export const REMOVE_COMMANDED_PRODUCTS ='REMOVE_COMMANDED_PRODUCTS';
// add a new products
export const ADD_PRODUCT ='ADD_PRODUCT';


export function setCurrency(current_currency,signe){
    const action ={
        type:CHANGE_CURRENCY,
        current_currency,
        signe
    }
    return action;
}

export function filterBy(filterType){
    const action ={
        type  : filterType
    }
    return action ;
}

export function getByCategory(category){
    const action ={
              type: GET_BY_CATEGORY,
              category
    }
    return action ;
}
export function getByTag(tag){
    const action = {
        type : GET_BY_TAG,
        tag
    }
    return action;
}
export function getSingleProduct(id){
  const action ={
      type: GET_SINGLE_PRODUCT,
      id
  }
  return action;
}
export function getCommandedProducts(addedProductId,quantity){
    const action ={
        type:GET_COMMANDED_PRODUCTS,
        id:addedProductId,
        quantity
    }
    return action;
}
export function removeCommandedProduct(ProductId){
    const action ={
        type:REMOVE_COMMANDED_PRODUCTS,
        id:ProductId
    }
    return action;
}
export function addProduct(NewProduct){
   const action  ={
       type :ADD_PRODUCT,
       product :NewProduct
   }
   return action ;
}