import React, { Component } from 'react'
import {Segment,Form,Button,Grid,Header} from 'semantic-ui-react';
import {connect} from 'react-redux'
import moment from 'moment'
import {reduxForm,Field} from 'redux-form'
import {createEvent,updateEvent} from '../eventActions'
import inputText from '../../../app/common/form/inputText'
import textArea from '../../../app/common/form/textArea'
import dateInput from '../../../app/common/form/dateInput'
import selectInput from '../../../app/common/form/selectInput'
import cuid from 'cuid'
import { combineValidators,composeValidators,isRequired,hasLengthGreaterThan} from 'revalidate'
const mapToState = (state,own)=>{
  let event = {};

   let id = own.match.params.id
   if(id && state.events.length>0){
       event = state.events.filter(event => event.id ===id)[0]
   }
   return {initialValues:event}
}
const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];
const actions = {
   createEvent,
   updateEvent
}
const validate =combineValidators({
   title:isRequired({message:'the value is required'}),
   city:isRequired({message:'the city is required'}),
   description:composeValidators(
    isRequired({message:'the value is required'}),
    hasLengthGreaterThan(4)({message:'must grater than 4 chars'})
   )(),
   category:isRequired({message:'the value is required'}),
   venue:isRequired({message:'the city is required'}),
   date:isRequired('date')
})
class eventForm extends Component {
  
  hnadelSubmit =values=>{
    values.date = moment(values.date).format()
         if(this.props.initialValues.id){
            this.props.updateEvent(values)
            this.props.history.push('/events')
         }
         else{
          let newEvent = {
            ...values,
            id:cuid(),
            hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
            hostedBy:'abdulrahman'

          }
          this.props.createEvent(newEvent)
          this.props.history.push('/events')
         }
}



  render() {
    const {invalid , submitting, pristine } = this.props
   
    return (
      <div>
           <Grid>
              <Grid.Column width={10}>
              <Segment>
                 <Form onSubmit={this.props.handleSubmit(this.hnadelSubmit)}>
                   <Header sub color='teal' content='Enter the Event Details' />
                   <Field name='title' type='text' component={inputText} placeholder='Enter the name' />
                   <Field name='category' options={category} type='text' component={selectInput} placeholder='Enter the Cateogry' />
                   <Field name='description' type='text' component={textArea} rows={10} placeholder='enter the Details about' />
                   <Field name='venue' type='text' component={inputText} placeholder='Enter the venue' />
                   <Header sub color='teal' content='Enter the Location Details' />
                   <Field name='city' type='text' component={inputText} placeholder='enter the city' />
                   <Field name='date' type='text'
                   dateFormat='YYYY-MM-DD HH:mm'
                   timeFormat = 'HH:mm'
                   showTimeSelect
                   component={dateInput} placeholder='the date' />
                  
                 
                  
                   
                   <Button disabled={invalid || submitting || pristine} positive type="submit">
                     Submit
                   </Button>
                   <Button onClick={this.props.history.goBack} type="button">Cancel</Button>
                 </Form>
               </Segment>
              </Grid.Column>
           </Grid>
              
      </div>
    )
  }
}

export default connect(mapToState,actions)(reduxForm({form:'eventForm',validate,enableReinitialize:true})(eventForm))
