import React, { Component } from 'react'
import {Grid,Button} from 'semantic-ui-react'
import EventList from '../eventlist/eventList'
import EventForm from '../eventForm/eventForm'
import cuid from 'cuid';
const events = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
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
    date: '2018-03-28',
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
         isOpen:false,
         selectEvent:null
      }
   }
  handelEdite = (eventEdit)=>()=>{
     this.setState({
        selectEvent:eventEdit,
        isOpen:true
     })
  }
  handeDelete = (id)=>()=>{
      const eventsNew = this.state.events.filter(event=> event.id!==id);
      this.setState({
         events:eventsNew
      })

  }
  handelUpdate = (eventUpdate)=>{
      this.setState({
         events:this.state.events.map(event=>{
             if(eventUpdate.id === event.id){
               return Object.assign({},eventUpdate)
             }else{
                return event
             }
         })
      })
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
     this.setState({
       isOpen:true,
       selectEvent:null
      })
  }
  handelCancel = ()=>{
      this.setState({isOpen:false})
  }
  render() {
    return (
      <div>
         <Grid>
             <Grid.Column width={10}>
             <h1>Events</h1>
                    <EventList edit={this.handelEdite} del={this.handeDelete} events={this.state.events} />
             </Grid.Column>
             <Grid.Column width={6}>
                <Button positive onClick={this.handelOpen}  content='Create Event' />
                <br/>
                <br/>
                   {this.state.isOpen&& <EventForm  update={this.handelUpdate} itemSelect={this.state.selectEvent} create={this.handelCreate} cancel={this.handelCancel} />}
             </Grid.Column>
             <Grid.Column width={10}>
              
             </Grid.Column>
         </Grid>
      </div>
    )
  }
}
export default Dashboard;