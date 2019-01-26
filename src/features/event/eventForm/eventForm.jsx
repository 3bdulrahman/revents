import React, { Component } from 'react'
import {Segment,Form,Button} from 'semantic-ui-react'
export default class eventForm extends Component {
  state = {
        event:{
             title:'',
             date:'',
             city:'',
             venue:'',
             hostedBy:''
        }
  }
  handelChange = (e)=>{
       const {event} = this.state;
       event[e.target.name] = e.target.value;
       this.setState({event:event})
  }
  hnadelSubmit =(e)=>{
         e.preventDefault();
        this.props.create(this.state.event)
}
  render() {
    const {cancel} = this.props;
   
    return (
      <div>
               <Segment>
                 <Form onSubmit={this.hnadelSubmit}>
                   <Form.Field>
                     <label>Event Title</label>
                     <input name="title" onChange={this.handelChange} placeholder="First Name" />
                   </Form.Field>
                   <Form.Field>
                     <label>Event Date</label>
                     <input name="date" onChange={this.handelChange} type="date" placeholder="Event Date" />
                   </Form.Field>
                   <Form.Field>
                     <label>City</label>
                     <input name="city" onChange={this.handelChange} placeholder="City event is taking place" />
                   </Form.Field>
                   <Form.Field>
                     <label>Venue</label>
                     <input name="venue" onChange={this.handelChange} placeholder="Enter the Venue of the event" />
                   </Form.Field>
                   <Form.Field>
                     <label>Hosted By</label>
                     <input name="hostedBy" onChange={this.handelChange} placeholder="Enter the name of person hosting" />
                   </Form.Field>
                   <Button positive type="submit">
                     Submit
                   </Button>
                   <Button onClick={cancel} type="button">Cancel</Button>
                 </Form>
               </Segment>
      </div>
    )
  }
}
