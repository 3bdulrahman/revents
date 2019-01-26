/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Dashboard from '../../features/event/eventDashboard/EventDashboard';
import Nav from '../../features/nav/navBar/Nav'
class App extends Component {
  render() {
    return (
      <div>
         <Nav></Nav>
        <Container className="main">
        
           <Dashboard />
        </Container>
          
            
      </div>
    );
  }
}

export default App;