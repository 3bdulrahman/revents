import React, { Component } from 'react'
import {Grid,Button} from 'semantic-ui-react'
import EventList from '../eventlist/eventList'
import EventForm from '../eventForm/eventForm'
import cuid from 'cuid';
import {connect} from 'react-redux'
import {deleteEvent} from '../eventActions'

 class Dashboard extends Component {


  handeDelete = (id)=>()=>{
       this.props.deleteEvent(id)
 
  }

 

  render() {
    const {events} = this.props;
    console.log(events);
    return (
      <div>
         <Grid>
             <Grid.Column width={10}>
             <h1>Events</h1>
                   {this.props.events?(<EventList edit={this.handelEdite} del={this.handeDelete} events={events} />):(
                  <h1>load the data</h1>
                   )}
             </Grid.Column>
             <Grid.Column width={6}>
               
             </Grid.Column>
             <Grid.Column width={10}>
              
             </Grid.Column>
         </Grid>
      </div>
    )
  }
}
const maptoState = (state,getState)=>{
   return{
      events:state.events
   }
}
const mapToDispatch = {
    deleteEvent
}

export default connect(maptoState,mapToDispatch)(Dashboard);