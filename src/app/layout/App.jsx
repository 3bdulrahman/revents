/* eslint-disable jsx-a11y/href-no-hash */
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Dashboard from '../../features/event/eventDashboard/EventDashboard';
import {Route,Switch} from 'react-router-dom';
import Nav from '../../features/nav/navBar/Nav'
import EventDetailedPage from '../../features/event/EventDetailed/EventDetailedPage'
import PepoleDashboard from '../../features/user/PepoleDashboard/PepoleDashboard'
import userDetails from '../../features/user/userDetails/userDetails'
import settingDashboard from '../../features/user/setting/settingDashboard'
import eventForm from '../../features/event/eventForm/eventForm'
import HomePage from '../../features/home/HomePage'
class App extends Component {
  render() {
    return (
      <div>
         <Switch>
         <Route path='/' exact component={HomePage} />
         </Switch>
         <Route path="/(.+)"  render={()=>(
              <div>
              <Nav />
             <Container className="main">
                <Switch>
                <Route path='/events' component={Dashboard} />
               <Route path='/event/:id'  component={EventDetailedPage} />
               <Route path='/people' component={PepoleDashboard}/>
               <Route path='/profile/:id' component={userDetails} />
               <Route path='/setting' component={settingDashboard} />
               <Route path='/createEvent' component={eventForm} />
                </Switch>
             </Container>
                 
           </div>
         )} />
          

      </div>
     
    );
  }
}

export default App;