import React from 'react'
import Headerpage from './header'
import Info from './info'
import Chat from './chat'
import Sidebar from './sidebar'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux'
const mapToState = (state,Ownprops)=>{
   let id = Ownprops.match.params.id;
   let event = {}
   if(state.events && state.events.length>0){
      event = state.events.filter(event => event.id === id)[0]
   }
   return {
      event
   }
}
const EventDetailedPage = ({event}) => {
  return (
    <Grid>
       <Grid.Column width={10}>
               <Headerpage event={event} />
               <Info event={event} />
               <Chat />
               
       </Grid.Column>
       <Grid.Column width={6}>
          <Sidebar attendees={event.attendees} />
       </Grid.Column>
    </Grid>
  )
}

export default connect(mapToState)(EventDetailedPage)
