import React, { Component } from 'react'
import {FormControl, Form ,Button,Label} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

export default class login extends Component {
  constructor(){
    super();
      this.state={username:"ayatamine",password:"123456",loggedIn:false,redirect:false};
  }

  handleLogin(e){
     let username = document.querySelector("#username").value;
     let password =document.querySelector("#password").value;
     if((this.state.username ===username) && (this.state.password === password)){
         this.setState({loggedIn:true});
        setTimeout(function(){ 
          
          this.setState({redirect:true}); }.bind(this)
          ,3000) // header.location.pathname.startWith('/Dashboard')
        }
        else{ document.querySelector('.failed-login').classList.add('displayed') ;}
        

  }
  handleFocus(){
    
      document.querySelector('.failed-login').classList.remove('displayed')

  }
  renderRedirect(){
    if(this.state.redirect){
         
        return (
         <div>
         
           <Redirect to="/Dashboard" strict />
        
         </div>
         )
    }
    
  }
  renderPoint(){
    var i=0;
    
    var st =setInterval(function(){
      var wait_point = document.querySelector('#wait-point');
    if(wait_point){
        wait_point.append(' .');
     }
       i++; 
           

    },800);
  setTimeout(function() { clearInterval(st) ;st=0;} ,2500);
  }

  render() {
    return (
  
            <div>
            { (!this.state.loggedIn)  ? 
            <Form className="login-form">
              <Label>Please Log in to acces the dashboard</Label>
              <Label><strong>Username</strong> or <strong>Email</strong></Label>
              {'  '}
              <FormControl type="text" id="username" onFocus={this.handleFocus.bind(this)}/>
            
              <Label><strong>Password</strong></Label>
              {'  '}
              <FormControl type="password" id="password"  onFocus={this.handleFocus.bind(this)}/>
              <br/>
              <Label className="failed-login ">username or password uncorrect</Label>
              <br/>
              <Button className="btn btn-primary " id="submit-login" onClick={this.handleLogin.bind(this)}>Login</Button>
            </Form>
                                 :
            <div id="redirect-page">
            <h3 id="wait-point">redirecting to your dashboard 
            {this.renderPoint()}
            </h3>
            <img src="redirect.png" />
            {this.renderRedirect()}
            </div>
            }
            </div>
     
    )
  }
}
