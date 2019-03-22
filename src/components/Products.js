import React, { Component } from 'react'
import {connect } from 'react-redux';
import ProductItem from './ProductItem';
 class Products extends Component {
    constructor(){
        super();
        this.state={
            id:'',
            product_name:'',
            price:0,
            buy_count:0,
            category:'',
            mostly_color:'',
            thumbs:'',
            created_at:''
        }

    }
  
  render() {
    
    return (
      <div className="products">
          {
            this.props.products.length > 0 ?
              this.props.products.map((item ,index)=>{
                return(
                    <ProductItem key={index} product={item} />
                )
              }
                )
            :<img className="no-result-found" src="/nojobsfound.png" alt="no result found" /> 
          }
      </div>
    )
  }
}
function mapStateToProps(state){
    return {
        products:state.products
    }
}
export default connect(mapStateToProps, null)(Products);


