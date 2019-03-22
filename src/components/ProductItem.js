import React, { Component } from 'react'
import {connect } from 'react-redux';
import {getSingleProduct} from '../actions/index'
import  {getCommandedProducts} from '../actions/index';
import  {removeCommandedProduct} from '../actions/index';

class ProductItem extends Component {
  constructor(){
    super();
    this.state = ({
          added_to_cart : false
    })
  }
  showProduct(e){
    console.log(e.target);
    document.querySelector("#single-product-modal").style.display="block";
    this.props.getSingleProduct(this.props.product.id);
     console.log(this.props.state)
 
 }
 animate_buy_btn(element,transition_text){
    element.innerText =transition_text;
    element.classList.add("adding_removing_transition");
 }
 addTO_removeFrom_Cart(e){
   let product=this.props.product;
   let element =e.target;
   console.log(element.textContent.length)

   switch (element.textContent) {
     case "Remove from cart":
          this.props.removeCommandedProduct(product.id);
          // animating the buy button 
          this.animate_buy_btn(element,"Removing from cart ...")
          setTimeout(function(){
            this.setState({added_to_cart : false})
          }.bind(this),1000);
          break;
     case "Add to cart":
       
      this.props.getCommandedProducts(product.id,1);
      // animating the buy button 
      this.animate_buy_btn(element,"Adding to cart ...")
      setTimeout(function(){
        this.setState({added_to_cart : true})
      }.bind(this),1000);
         break;
      default : break;
   } 

   
  // e.target.classList.add("added-to-cart");
 }

 verify_cart_items(){
   
    let cartItems =JSON.parse(localStorage.getItem('cartItems')); 
    //console.log(cartItems)
    if(cartItems.length > 0){
      let ids=cartItems.map(item => item.product_id);
      //console.log(ids)
    if(ids.includes(+(this.props.product.id))){
        this.setState({added_to_cart : true});
    }
  }
 }
  render() {
    let product=this.props.product;
    let signe =this.props.signe;
    
    
    
    return (
        
        <div className="single-product-item" onMouseOver={this.verify_cart_items.bind(this)}>
       
            
           
                <div className="p-tumbnail" onClick={this.showProduct.bind(this)}>
                <img src={product.thumbs} alt="th"/>
                </div>
                <div className="product-info">
                <h4 onClick={this.showProduct.bind(this)}> 
               
                {product.product_name}
                </h4>
                <h4>{product.price}{signe}</h4>
                <div 
                 className={this.state.added_to_cart ? " buy-btn added-to-cart" : "buy-btn"}
                 onClick={this.addTO_removeFrom_Cart.bind(this)}
                 title="if you want to buy more then one item click over the product"
                >
                {this.state.added_to_cart ?
                  "Remove from cart" 
                  :
                  "Add to cart"
                }
                
                
                </div>
                </div>
        </div>
   
    )
  }
}
function mapStateToProps(state){
  return {
      signe : state.signe,
      state:state
  }
}
export default connect(mapStateToProps,{getSingleProduct,getCommandedProducts,removeCommandedProduct})(ProductItem);


