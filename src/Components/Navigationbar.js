import React, { Component,Fragment } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    // NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button } from 'reactstrap'

export default class Navigationbar extends Component {
    constructor(props) {
        super(props);    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false                    
        };
      }

      toggle() {         
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

      // changeText=()=>{    
      //   this.setState({newText:{
      //     showText:!this.state.showText
      //   }}, function(){
      //     console.log(this.state.text);
      //     this.props.AddText(this.state.text);
      //   }         
      //   );
      // }
 
    

  render() {
    // console.log(this.props.Rec.stakeholder_name)
    return (
      <Fragment>
         <Navbar color="light" light expand="md">
          <NavbarBrand href="/">{this.props.Rec.stakeholder_name===undefined?'ReactStrap':this.props.Rec.stakeholder_name}</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Button data-name='Faris' onClick={(this.props.funcText)}>{this.props.TestValue==='How'?'About Us':this.props.TestValue}</Button>
              </NavItem>
              <NavItem>
                <Button data-name='Helmy' onClick={(this.props.funcVal)}>GitHub</Button>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <p className={this.state.showText?"":"d-none"} >Show Text</p>
            </Nav>
          </Collapse>
        </Navbar>
      </Fragment>
    )
  }
}
