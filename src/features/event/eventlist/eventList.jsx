import React, { Component } from 'react'
import Eventlistitem from '../eventlist/eventlistitem'

 class EventList  extends Component {
  render() {
    const {events,edit,del} = this.props;
    return (
      <div>
           {events.map(event => <Eventlistitem edit={edit} del={del} key={event.id} data={event} />)}
           <br/>
         

      </div>
    )
  }
}

export default EventList;
