import React, { Component } from 'react'
import {Segment,Form,Button} from 'semantic-ui-react';

const empty = {
  title:'',
  date:'',
  city:'',
  venue:'',
  hostedBy:''
};
export default class eventForm extends Component {
  state = {
        event:empty
  }
  handelChange = (e)=>{
       const {event} = this.state;
       event[e.target.name] = e.target.value;
       this.setState({event:event})
  }
  hnadelSubmit =(e)=>{
         e.preventDefault();
         if(this.state.id){
            this.props.update(this.setState.event)
         }
         else{
          this.props.create(this.state.event)
         }
}
componentDidMount(){
    if(this.props.itemSelect!==null){
       this.setState({
        event:this.props.itemSelect
       })
    }
}

componentWillReceiveProps(nextProps){
   if(nextProps.itemSelect !== this.state.event){
       this.setState({
           event:nextProps.itemSelect || empty
       })
   }
}
  render() {
    const {cancel,itemSelect} = this.props;
   
    return (
      <div>
               <Segment>
                 <Form onSubmit={this.hnadelSubmit}>
                   <Form.Field>
                     <label>Event Title</label>
                     <input name="title" value={this.state.event.title} onChange={this.handelChange} placeholder="First Name" />
                   </Form.Field>
                   <Form.Field>
                     <label>Event Date</label>
                     <input name="date" value={this.state.event.date} onChange={this.handelChange} type="date" placeholder="Event Date" />
                   </Form.Field>
                   <Form.Field>
                     <label>City</label>
                     <input name="city" value={this.state.event.city} onChange={this.handelChange} placeholder="City event is taking place" />
                   </Form.Field>
                   <Form.Field>
                     <label>Venue</label>
                     <input name="venue" value={this.state.event.venue} onChange={this.handelChange} placeholder="Enter the Venue of the event" />
                   </Form.Field>
                   <Form.Field>
                     <label>Hosted By</label>
                     <input name="hostedBy" value={this.state.event.hostedBy} onChange={this.handelChange} placeholder="Enter the name of person hosting" />
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
