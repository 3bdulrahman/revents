import React from 'react'
import {Menu,Dropdown,Image} from 'semantic-ui-react'
import {Link} from 'react-router-dom';
const SignedIn = ({logout}) => {
  return (
   
          <Menu.Item position="right">
            <Image avatar spaced="right" src='https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png' />
            <Dropdown pointing="top left" text="Username">
              <Dropdown.Menu>
                <Dropdown.Item text="Create Event" icon="plus" />
                <Dropdown.Item text="My Events" icon="calendar" />
                <Dropdown.Item text="My Network" icon="users" />
                <Dropdown.Item text="My Profile" icon="user" />
                <Dropdown.Item as={Link} to='/setting' text="Settings" icon="settings" />
                <Dropdown.Item onClick={logout} text="Sign Out" icon="power" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
    
  )
}

export default SignedIn
