import React, { Component } from 'react'; 
//import './App.css';
import Navbar from './Components/Navigationbar';
import Login from './Components/Login';
import Main from './Components/Main';


class App extends Component {
  constructor(){
    super()
    this.state={
      text:'First Load',
      value:'How',
      isAuth:false,
      UserRec:[]
    }
  }

  changeText=(text)=>{
        this.setState({
      text: !this.state.text
    });
    console.log(this.state.text);
  }

  funcText=(e)=>{
  const btnName= e.target.getAttribute('data-name')
  this.setState({text:btnName})
  console.log(btnName)
  }

  funcVal=(e)=>{
    const btn1= e.target.getAttribute('data-name')
    this.setState({text:btn1})
    console.log(btn1)
    }

    funcTest=(e)=>{
      const btn2= e.target.getAttribute('data-name')
      this.setState({value:btn2})
      console.log(btn2)
      } 

    checkAuthorize=(AuthVal,UsrRec)=>{
      console.log(AuthVal)
      this.setState({
        isAuth:AuthVal,
        UserRec:UsrRec
      })
     

    }  

  render() {
    return (
      <div>
        {/* <Navbar Rec={this.state.UserRec} funcText={this.funcText} funcVal={this.funcVal} TestValue={this.state.value}></Navbar>
         {this.state.isAuth?<Main TextValue={this.state.text} funcTest={this.funcTest}/>:<Login loginVal={this.checkAuthorize} ></Login>} */}
 
       
         
      </div>
    );
  }
}

export default App;
