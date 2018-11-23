import React from 'react';
import AppointmentForm from './AppointmentForm';
import { AppointmentsList } from './AppointmentsList';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import $ from 'jquery';
import CSSTransitionGroup from 'react-transition-group/CSSTransition';

export default class Appointments extends React.Component {
  static propTypes = {
    appointments: PropTypes.array.isRequired
  }

  static defaultProps = {
    appointments: []
  }

  constructor (props, railsContext) {
    super(props)
    this.state = {
      appointments: this.props.appointments
    }
  }

  addNewAppointment = (appointment) => {
    const appointments = update(this.state.appointments, { $push: [appointment]});
    this.setState({
      appointments: appointments.sort(function(a,b){
        return new Date(a.appt_time) - new Date(b.appt_time);
      })
    });
  }

  componentDidMount () {
    if(this.props.match && sessionStorage.user) {
      $.ajax({
        type: "GET",
        url: 'http://localhost:3001/appointments',
        dataType: "JSON",
        headers: JSON.parse(sessionStorage.getItem('user'))
      }).done((data) => {
        this.setState({appointments: data})
      })
    }
  }

  render () {
    return (
      <div>
        <CSSTransitionGroup
          transitionName="home"
          transitionAppear={true}
          transitionTimeout={500} >
          <AppointmentForm handleNewAppointment={this.addNewAppointment} />
          <AppointmentsList appointments={this.state.appointments} />
        </CSSTransitionGroup>
      </div>
    )
  }
}