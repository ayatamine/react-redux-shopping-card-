import React, { Component } from 'react'
import {connect} from 'react-redux';
import {getByTag} from '../actions/index';

 class Tags extends Component {
  check_category(e){
       
    var tag = e.target.getAttribute("tag");
  /// test if the name of category is not null if the case then we take the name from li element
   if(tag !== null){
         e.target.parentNode.childNodes.forEach(item => item.querySelector("i").classList.remove("select-cat"));
         e.target.querySelector("i").classList.add("select-cat");
    } else{
         // remove any selected element "icon" by display attr 
         e.target.parentNode.parentNode.childNodes.forEach(item => item.querySelector("i").classList.remove("select-cat"));
         e.target.classList.add("select-cat"); // change the color and display of selected "icon" of the category 
         tag = e.target.parentNode.getAttribute("tag"); // then get the attribute of the parent "li"
    }

    
    //  call the action that get the specified products of choosen category
    this.props.getByTag(tag)
    
  }
  render() {
    return ( 
    
        <div className="tags">
                    <h3 className="left-side-title">TAGS</h3>
                    <hr style={{width: '90% ', float: 'left'}}/>
                    <ul className="categoy-list" onClick={this.check_category.bind(this)}>
                        <li tag="black"><i className="fa fa-check"></i>Black</li>
                        <li tag="blue"><i className="fa fa-check"></i>Blue</li>
                        <li tag="gray"><i className="fa fa-check"></i>Gray</li>
                        <li tag="red"><i className="fa fa-check"></i>Red</li>
                        <li tag="gold"><i className="fa fa-check"></i>Gold</li>
                        <li tag="fiber"><i className="fa fa-check"></i>Fiber</li>
                    </ul>
        </div>
     
    )
  }
}

export default connect(null,{getByTag})(Tags);