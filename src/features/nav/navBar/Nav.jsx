import React, { Component } from 'react'
import {Menu,Button,Container} from 'semantic-ui-react';
import {NavLink,Link,withRouter} from 'react-router-dom';
import SignedIn from '../navBar/SignedIn'
import SignedOut from './SignedOut'
 class Nav extends Component {
  state = {
       auth:false
  }
  login =()=>{
      this.setState({
          auth:true
      })
  }
  logout =()=>{
    this.setState({
        auth:false
    })
    this.props.history.push('/')
}
  render() {
    return (
            <Menu inverted fixed="top">
              <Container>
                <Menu.Item as={Link} to='/' header>
                  <img src="./../../../app/assets/logo.png" alt="logo" />
                  Re-vents
                </Menu.Item>
                {this.state.auth&&
                <Menu.Item as={NavLink} to='/events' name="Events" />}
                {this.state.auth&&<Menu.Item as={NavLink} to='/people' name="People" />}
                {this.state.auth&&<Menu.Item>
                  <Button floated="left" positive inverted content="Create Event" />
                </Menu.Item>}
                {this.state.auth?(
                <SignedIn logout={this.logout} />):
                (
                <SignedOut login={this.login} />
                )}
              </Container>
            </Menu>
    )
  }
}

export default withRouter(Nav);
