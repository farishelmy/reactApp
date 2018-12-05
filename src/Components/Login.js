import React, { Component,Fragment } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


export default class Login extends Component {
    constructor(){
    super()
    this.state = {
        username:'',
        pwd:'',

        }
    }

    // TxtChange=(e)=>{
    // const inputName = e.target.getAttribute('name')
    // const inputVal =  e.target.value

    // console.log(inputName)    
    //   this.setState({
    //       [inputName]:inputVal
    //   })  
    // // console.log(inputVal)
    // }

    // login=(e)=>{
    // e.preventDefault()   
    // const {username:usr,pwd}=this.state
    // const loginObj={
    //     username: usr,
    //     password: pwd,
    //     repository_id:'repo3',
    //     language_id:'en_US'
    // }
    // const url = 'http://localhost:8000/api/auth/login?param='+JSON.stringify(loginObj)
    // fetch (url)
    // .then(res=>res.json())
    // .then(res=>{
    //     console.log(res)
    //     this.props.loginVal(true,res)        
    // const stakehObj = {
    //   action: 'ITEM_LIST',
    //   bio_access_id: res.results.bio_access_id
    // }
    // const stakehurl = 'http://192.168.0.110:8000/bio/stakeholder?param='+JSON.stringify(stakehObj)
    // fetch(stakehurl).then(res=>res.json())
    // .then(res=>{console.log(res)})
    // })
    // console.log(loginObj)
    // }
    
  render() {

   const {username,pwd}=this.state

    return (
        
      <Fragment>
         <Form inline onSubmit={this.login}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">   
          <Label for="examplePassword" className="mr-sm-2">Username</Label>        
          <Input type="text" name="username" id="exampleEmail" placeholder="something@idk.cool" value={username} onChange={this.TxtChange} />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Input type="password" name="pwd" value={pwd} placeholder='Shut Up!' onChange={this.TxtChange}/>          
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
      </Fragment>
    )
  }
}
