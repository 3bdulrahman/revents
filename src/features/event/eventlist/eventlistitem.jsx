import React, { Component } from 'react'
import {Segment ,Item,Button,Icon,List} from 'semantic-ui-react';
import Eventlistatendee from '../eventlist/eventlistatendeee';
class Eventlistitem extends Component {
  render() {
    const {data,edit,del} = this.props;
    return (
      <div>

              <Segment.Group>
                 <Segment>
                   <Item.Group>
                     <Item>
                     
                       <Item.Image size="tiny" circular src={data.hostPhotoURL} />
                       <Item.Content>
                         <Item.Header as="a">{data.title}</Item.Header>
                         <Item.Description>
                           Hosted by <a>{data.hostedBy}</a>
                         </Item.Description>
                       </Item.Content>
                     </Item>
                   </Item.Group>
                 </Segment>
                 <Segment>
                   <span>
                     <Icon name="clock" /> {data.date} |
                     <Icon name="marker" /> {data.venue}
                   </span>
                 </Segment>
                 <Segment secondary>
                   <List horizontal>
                    {data.attendees&&data.attendees.map(attendee=> <Eventlistatendee key={attendee.id} attendee={attendee} /> )}
                   </List>
                 </Segment>
                 <Segment clearing>
                 <span>{data.description}</span>
                   <Button as="a" onClick={edit(data)} color="teal" floated="right" content="View" />
                   <Button as="a" onClick={del(data.id)} color="red" floated="right" content="delete" />
                 </Segment>
               </Segment.Group>
               <br />
      </div>
    )
  }
}

export default Eventlistitem;
