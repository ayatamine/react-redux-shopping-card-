import React, { Component } from 'react'
import {connect} from 'react-redux';
import  {removeCommandedProduct} from '../actions/index';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
class Header extends Component {
    
  removeFromCart(e){
     let id =e.target.parentNode.getAttribute('Id');
     this.props.removeCommandedProduct(id);
  }
  render() {
    return (
        
       <div className="header">
          
          <div className="logo"><img src="/ayat 1nfo.png" style={{height:'50px',width:'86px'}} alt="" /></div>
          <div className="search-product">
              <input type="text" name="search-input" />
              <button className="search_around">
                   <i className="fa fa-search"></i>
              </button>
             
          </div>
          <div className="account">
              <div className="dropdown_acc">
                  <div className="dropdown_hover">My Account <i className="fa fa-chevron-down"></i></div>
                  <div className="dropdown_menu">
                        <a href="#">Whishlist</a> 
                        <a href="/admin">Admin</a> 
                  </div>
                  
                  
              </div>
              <div className="separator">|</div>
              <div className="dropdown_acc">
              <div className="carts dropdown_hover">
                  <i className="fa fa-shopping-cart fa-lg"></i>
                  Carts
              </div>
              <div className="dropdown_menu" id="cart_drop_menu">
               {this.props.products.map(item =>{
                  return (
                        <div className="cart-item" key={item.id} Id={item.id} >
                            <div className="short-p-img"><img src={item.thumbs} /></div>
                            <div className="title-price">
                               <h5>{item.product_name}</h5>  
                               <h5>{item.price} $</h5>
                            </div>
                            <div className="total_demande">
                               <h5>{item.quantity} E</h5>
                               <h5 style={{"color":"#000"}}>{(item.quantity * item.price).toFixed(2)}$</h5>
                            </div>
                            <i className="fa fa-close" onClick={this.removeFromCart.bind(this)}></i>
                            
                        </div>
                  )

                  })
               }
                        
              </div>
              </div>
          </div>
        </div>
    )
  }
}
function mapStateToProps(state){
   return {
       products: state.cartItems
       }
}
export default connect(mapStateToProps,{removeCommandedProduct})(Header);