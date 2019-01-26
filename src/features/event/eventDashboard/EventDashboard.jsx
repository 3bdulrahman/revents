import React, { Component } from 'react'
import {Grid,Button} from 'semantic-ui-react'
import EventList from '../eventlist/eventList'
import EventForm from '../eventForm/eventForm'
import cuid from 'cuid';
const events = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]

 class Dashboard extends Component {
   constructor(props){
      super(props);
      this.state = {
         events:events,
         isOpen:false
      }
   }
  handelCreate = (newEvent)=>{
    newEvent.id = cuid();
    newEvent.hostPhotoURL='https://randomuser.me/api/portraits/men/22.jpg';
    const updateEvent = [...this.state.events,newEvent];
    this.setState({
       events:updateEvent,
       isOpen:false
    })
  }
  handelOpen = ()=>{
     this.setState({isOpen:true})
  }
  handelCancel = ()=>{
      this.setState({isOpen:false})
  }
  render() {
    return (
      <div>
         <Grid>
             <Grid.Column width={10}>
             <h1>Evenets</h1>
                    <EventList events={this.state.events} />
             </Grid.Column>
             <Grid.Column width={6}>
                <Button positive onClick={this.handelOpen} content='Create Event' />
                <br/>
                <br/>
                   {this.state.isOpen&& <EventForm create={this.handelCreate} cancel={this.handelCancel} />}
             </Grid.Column>
             <Grid.Column width={10}>
              
             </Grid.Column>
         </Grid>
      </div>
    )
  }
}
export default Dashboard;