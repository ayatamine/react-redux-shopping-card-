import React, { Component } from 'react';
import {connect} from 'react-redux';
import StarRatings from 'react-star-ratings';
import  {getCommandedProducts} from '../actions/index';
import  {removeCommandedProduct} from '../actions/index';

class SingleProduct extends Component {

 constructor(){
     super();
     this.state={
         product :{},
         total_price:0,
         input_value:1,
         rating:1,
         added_to_cart : false
     }
 }
    componentWillReceiveProps(props){
        console.log("in single pro the props are",props) ;
        let product =props.product;
        this.setState({product:product});   
        
        // document.querySelector("#command-quantity").value = 3;
    }
    
    decrement_total(){
        var command_quantity =document.querySelector("#command-quantity");
        if(command_quantity.value > 1){
           command_quantity.value--;
        }
        var total_price =(command_quantity.value) * (this.state.product.price);

        this.setState({input_value: command_quantity.value,total_price:total_price});
    }
    increment_total(){
        var command_quantity =document.querySelector("#command-quantity");
        command_quantity.value++;
        
        var total_price =(command_quantity.value) * (this.state.product.price);

        this.setState({input_value: command_quantity.value,total_price:total_price});
    }

    changeRating( newRating, name ) {
        this.setState({
          rating: newRating
        });
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
            //document.querySelector("#single-product-modal").style.display="none";
            break;
        case "Add to cart":
        
        this.props.getCommandedProducts(product.id,this.state.input_value);
        // animating the buy button 
        this.animate_buy_btn(element,"Adding to cart ...")
        setTimeout(function(){
            this.setState({added_to_cart : true})
        }.bind(this),1000);
        //document.querySelector("#single-product-modal").style.display="none";
            break;
        default : break;
    } 

    
    // e.target.classList.add("added-to-cart");
    }
    verify_cart_items(){
   
        let cartItems =JSON.parse(localStorage.getItem('cartItems')); 
        let product = cartItems.filter(item => +(item.product_id) === +(this.props.product.id));
        
        if(cartItems.length > 0){
            
          let ids=cartItems.map(item => item.product_id);
       
        
        this.setState({added_to_cart : false,total_price:(this.state.input_value) * (this.props.product.price)});

        if(ids.includes(+(this.props.product.id))){
            this.setState({added_to_cart : true,input_value:product[0].quantity});
        }
      }
     }
     
  render() {
    
     let product =this.state.product;

    return (

  

       <div className="simple-p-container simple-p-content" onMouseOver={this.verify_cart_items.bind(this)}>

       
       <div className="product-img">
        <div className="p-image">
          <img src={product.thumbs} alt={product.product_name} />  
        </div>   
        
           <div className="command-form">
                <h5>Command Quantity</h5>
                <button className="btn-command-quantity" onClick={this.decrement_total.bind(this)}><i className="fa fa-minus" aria-hidden="true"></i></button>
                <input type="text" id="command-quantity" placeholder="1" value={this.state.input_value} contentEditable={true} />
                <button className="btn-command-quantity" onClick={this.increment_total.bind(this)}><i className="fa fa-plus" aria-hidden="true"></i></button>
                <h4>Total Price : <span id="total-price">{this.state.total_price} $</span></h4>
                 <button 
                 id={this.state.added_to_cart ? "remove-product-btn" : "buy-btn"}
                 onClick={this.addTO_removeFrom_Cart.bind(this)}
                 >
                 {this.state.added_to_cart ?
                  "Remove from cart" 
                  :
                  "Add to cart"
                 }
                 </button>
           </div>
       </div>
      
        <div className="description">
            <h2 className="title"> {product.product_name}</h2>
            <div className="reviews">
            <StarRatings
                rating={this.state.rating}
                starRatedColor="blue"
                changeRating={this.changeRating.bind(this)}
                numberOfStars={6}
                name='rating'
                starDimension="20px"
                isSelectable ={false} 
            />
            
            </div>
            <h2 className="price">{product.price}$</h2>
            <div className="product-descripiton">
                Lorem, ipsum dolor sit amet consectetur 
                adipisicing elit. Dolores illum repellendus molestias
                quidem voluptates consequuntur, neque, eveniet autem 
                nostrum perspiciatis vero a, voluptatum
                esse tempora quas voluptatibus! Alias, eos itaque!
            </div>

            <div className="share-on">
                Share to :Facebook , Twitter Google+ 
            </div>
        </div>
       </div>
       
    )
  }
}
function mapStateToProps(state){
    return {
        product : state.singleProduct
    }
}
export default connect(mapStateToProps,{getCommandedProducts,removeCommandedProduct})(SingleProduct);


