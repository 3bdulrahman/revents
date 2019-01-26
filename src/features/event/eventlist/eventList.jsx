import React, { Component } from 'react'
import Eventlistitem from '../eventlist/eventlistitem'

 class EventList  extends Component {
  render() {
    const {events} = this.props;
    return (
      <div>
           {events.map(event => <Eventlistitem key={event.id} data={event} />)}
           <br/>
         

      </div>
    )
  }
}

export default EventList;
