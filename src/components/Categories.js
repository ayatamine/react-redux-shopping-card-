import React, { Component } from 'react'
import {getByCategory} from '../actions/index';
import {connect}  from 'react-redux';

class Categories extends Component {
   
   check_category(e){
       
       var category = e.target.getAttribute("cat");
     /// test if the name of category is not null if the case then we take the name from li element
      if(category !== null){
            e.target.parentNode.childNodes.forEach(item => item.querySelector("i").classList.remove("select-cat"));
            e.target.querySelector("i").classList.add("select-cat");
       } else{
            // remove any selected element "icon" by display attr 
            e.target.parentNode.parentNode.childNodes.forEach(item => item.querySelector("i").classList.remove("select-cat"));
            e.target.classList.add("select-cat"); // change the color and display of selected "icon" of the category 
            category = e.target.parentNode.getAttribute("cat"); // then get the attribute of the parent "li"
       }

        // call the action that get the specified products of choosen category
        this.props.getByCategory(category);
       
       
   }

  render() {
    
    return (
 
        <div className="categories">
                    <h3 className="left-side-title">CATEGORIES </h3>
                    <hr style={{width: '90% ', float: 'left'}}/>
                    <ul className="categoy-list" onClick={this.check_category.bind(this)}>
                        <li  cat="All"><i className="fa fa-check" ></i>All</li>
                        <li  cat="Featured"><i className="fa fa-check"></i>Featured</li>
                        <li  cat="Camera"><i className="fa fa-check"></i>Camera</li>
                        <li  cat="Best Reviews"><i className="fa fa-check" ></i>Best Reviews</li>
                        <li  cat="Tools Appliances"><i className="fa fa-check"></i>Tools Appliances</li>
                    </ul>
        </div>
   
    )
  }
}

export default connect(null,{getByCategory})(Categories);

