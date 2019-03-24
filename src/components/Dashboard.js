import React, { Component } from 'react';
import {connect} from 'react-redux';
import { addProduct } from '../actions/index';

import {TabPane,Tabs,Tab,ButtonToolbar,OverlayTrigger,Tooltip} from 'react-bootstrap';
import {FileUpload} from 'primereact/fileupload';

import {TabView,TabPanel} from 'primereact/tabview';

import {InputText} from 'primereact/inputtext';
import {Dropdown} from 'primereact/dropdown';
import {ListBox} from 'primereact/listbox';
import {Button} from 'primereact/button';
import {Panel} from 'primereact/panel';

class Dashboard extends Component {
  constructor(){
    super();
    this.state={
        activeIndex:0,
        id:'',
        product_name:'',
        price:'',
        buy_count:0,
        category :'',
        mostly_color:'',
        thumbs:'1.jpg',
        created_at:new Date().toLocaleDateString()
    };
    
  }
  componentDidUpdate(){
      console.log(this.state);
  }
  submitForm(e){
      
     e.preventDefault();
     // set the id and creation date 
     let id = this.props.products.length + 1;
     this.setState({id:id});
     let newProduct = this.state;

     this.props.addProduct(newProduct);
     

  }
  
  render() {
    const categories = [ 
        {label: 'Camera', value: 'Camera'}, {label: 'Tools Appliances', value: 'Tools Appliances'}, {label: 'Featured', value: 'Featured'}
        ];
    const colors = [ 
        {label: 'Black', value: 'black'}, {label: 'Blue', value: 'blue'},
         {label: 'white', value: 'white'},{label: 'Red', value: 'red'},
         {label: 'Gold', value: 'gold'},{label: 'Green', value: 'green'},
        ];
    return (
       
        <TabView id="1" activeIndex={this.state.activeIndex} onTabChange={(e) => this.setState({activeIndex: e.index})}>
            <TabPanel header="Product List">
                
               {this.props.products.map(item =>{
                   return ( 
                    <Panel 
                      header={item.product_name} 
                      toggleable={true}
                      collapsed={true}
                      id="product-list-panel"
                      >
                      Product Name :<strong>{item.product_name}</strong> {' '}{' '}
                      Price :<strong>{item.price}</strong> {' '}
                      Purchase Count :<strong>{item.buy_count}</strong> {' '}
                      Category :<strong>{item.category}</strong> {' '}
                      Color :<strong>{item.mostly_color}</strong> {' '}
                      Created at :<strong>{item.created_at}</strong> {' '}
                    </Panel>
                    )
                
                })
                }
            </TabPanel>
            <TabPanel header="Add Product">
                
                <form id="add-new-product-form">
                  <h3>Add a new product</h3>  
                  <br/>
                  <span className="p-float-label">
                      <InputText id="Product_name" value={this.state.product_name} onChange={(e) => this.setState({product_name: e.target.value})} />
                      <label htmlFor="Product_name">Product name</label>
                  </span>
                  <br/>
                  <span className="p-float-label">
                      <InputText id="price" value={this.state.price} onChange={(e) => this.setState({price: e.target.value})} />
                      <label htmlFor="price">price</label>
                  </span>
                  <br/>
                  <Dropdown value={this.state.category} style = {{width:'172px'}} options={categories} onChange={(e) => {this.setState({category: e.value})}} placeholder="Select a category"/>
                  <br/>
                  <Dropdown value={this.state.mostly_color} style = {{width:'172px'}} options={colors} onChange={(e) => {this.setState({mostly_color: e.value})}} placeholder="   Select a color"/>
                  <br/>
                  <Button label="ADD" className="p-button-raised p-button-success" onClick={(e)=> this.submitForm(e)} />
                </form>
                
            </TabPanel>
            <TabPanel header="Header III">
                Content III

            </TabPanel>
        </TabView>

     
    )
  }
}
function mapStateToProps(state){
   return {
       products : state.products
   }
}
export default connect (mapStateToProps,{addProduct})(Dashboard);