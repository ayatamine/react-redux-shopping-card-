import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import {setCurrency} from '../actions/index'
import {filterBy} from '../actions/index';
 class Filter extends Component {
  constructor(){
    super();
    this.state={
      current_currency:'USD',
      current_sort:'',
      signes:[{"USD":"$"},{"EUR":"€"},{"CAD":"$"}, {"AUD":"$"},{ "GBP":"£"},{"BDT":"Tk"}],
      current_signe:'$'
    }
    
  }
  change_currency(e){
    //console.log(e.target.textContent) ;   
    var currency=e.target.textContent.substr(0,3);
   
    let signe=this.state.signes.filter(item => item[currency]);
  
    this.props.setCurrency(currency,signe);
    this.setState({
      current_currency:currency,
      current_signe:signe
    })
    console.log(this.props)
  }
  filterby(e){
    var type = e.target.value;
    this.props.filterBy(type);
    console.log(this.state);
    
  }
  
  render() {
    return (
        
        <div className="filter">
            <div className="display-position">
            <div className="dropdown_acc">
                  <div className="dropdown_hover">{this.state.current_currency} <i className="fa fa-chevron-down"></i></div>
                  <div className="dropdown_menu" id="currency_drop_menu">
                        <ul>
                                <li ref="currency__item" onClick={this.change_currency.bind(this)} ><a style={{cursor: "pointer"}}>USD - US Dollar</a></li>
                                <li  ref="currency__item" onClick={this.change_currency.bind(this)}><a style={{cursor: "pointer"}} >EUR - Euro</a></li>
                                <li ref="currency__item" onClick={this.change_currency.bind(this)}><a style={{cursor: "pointer"}}>GBP - British Pound</a></li>
                                <li  ref="currency__item" onClick={this.change_currency.bind(this)}><a style={{cursor: "pointer"}}>INR - Indian Rupee</a></li>
                                <li  ref="currency__item" onClick={this.change_currency.bind(this)}><a style={{cursor: "pointer"}}>BDT - Bangladesh Taka</a></li>
                                <li  ref="currency__item" onClick={this.change_currency.bind(this)}><a style={{cursor: "pointer"}}>JPY - Japan Yen</a></li>
                                <li  ref="currency__item" onClick={this.change_currency.bind(this)}><a style={{cursor: "pointer"}}>CAD - Canada Dollar</a></li>
                                <li  ref="currency__item" onClick={this.change_currency.bind(this)}><a style={{cursor: "pointer"}}>AUD - Australian Dollar</a></li>            
                        </ul>
                  </div>
                  
              </div>
            </div>
            <div className="product-count">Showing 1-{this.props.nb_products} product</div>
            <div className="sort-by">
                    <label>Sort by</label> 
                    <select name="SortBy" id="SortBy"  onChange={this.filterby.bind(this)}>
                            <option value="manual">Featured</option>
                            <option value="best_selling">Best Selling</option>
                            <option value="title-ascending">Alphabetically, A-Z</option>
                            <option value="title-descending">Alphabetically, Z-A</option>
                            <option value="price-ascending">Price, low to high</option>
                            <option value="price-descending">Price, high to low</option>
                            <option value="created-descending">Date, new to old</option>
                            <option value="created-ascending">Date, old to new</option>
                    </select>
            </div>
        </div>
 
    )
  }
}
function mapStateToProps(state){
  return {
    current_currency:state.Currency
  }
}
export default connect(mapStateToProps, {setCurrency,filterBy})(Filter);