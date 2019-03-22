import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../styles/index.css';
import '../styles/font-awesome.min.css';

import Products from './Products';
import Filter from './Filter';
import Categories from './Categories';
import Tags from './Tags';
import Header from './Header';
import SingleProduct from './SingleProduct';
import AdminLogin from './AdminLogin'
import Dashboard from './Dashboard';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import {Modal,ModalHeader,ModalBody,ModalFooter} from 'react-bootstrap';


class App extends Component {
 
  closeModal(){
    document.querySelector(".modal").style.display='none';
    
  }
  componentDidMount(){
       document.querySelector(".modal").style.display= "none";
       document.querySelectorAll(".fa-close").forEach(item => item.addEventListener("click",function(){
       document.querySelector(".modal").style.display= "none" }))
  }
  render() {
    let product_count=this.props.products.length;

    return (
      <div>
          <Modal.Dialog id="single-product-modal">
             <Modal.Header>
              <i className="fa fa-close" ></i>
             </Modal.Header>

             <Modal.Body>
                
                 <SingleProduct />
             </Modal.Body>

             
           </Modal.Dialog> 
           <Router>
                      <div>
                           <Route  path="/admin" exact render={
                              ()=>{
                                return (<AdminLogin />);
                              }
                            } />
                           <Route  path="/Dashboard" exact render={
                              ()=>{
                                return (<Dashboard />);
                              }
                            } />
                           <Route  path="/" exact render={
                              ()=>{
                                return (
                                  <div className="container">
            
                                  <Header />
                                  <div className="left-side">
                                     <Categories />
                                     <Tags />
                                  </div>
                                  <Filter nb_products={product_count} />
                                  <div className="content">
                                     <Products />
                                  </div>
                                  </div> 
                                );
                              }
                            } />
                      </div>

        </Router>
           
    </div>
    )
  }
}
function mapStateToProps(state){
  return {
    products :state.products }
}
export default connect(mapStateToProps,null)(App);