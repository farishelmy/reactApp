import React, { Component } from 'react'
import { Jumbotron, Button } from 'reactstrap'
 

export default class Main extends Component {
  constructor(){
  super()
    this.state={
      showText:false       
    }
  }
  
toggleText=()=>{
  this.setState({
    showText:!this.state.showText    
  })
  // fetch('https://jsonplaceholder.typicode.com/users/')
  // .then(response => response.json())
  // .then(json => console.log(json))
}

  render() {
    return (
      <div>
         <Jumbotron>
        <h1 className="display-3">Hello {this.props.TextValue==='First Load'?"World":this.props.TextValue},</h1>
        <p>{this.props.TextValue}</p> 
        <p className="text-primary lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className={this.state.showText?"":"d-none"} >Show Text</p>
        <p className="lead">       
          <Button color="primary" data-name='Test' onClick={(this.props.funcTest)}>Learn More</Button>           
        </p>
      </Jumbotron>
      
      </div>
    )
  }
}
