import React from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransition'

export const AppointmentsList = ({appointments}) => 
  <div>
    <CSSTransitionGroup
      transitionName="appointment"
      transitionEnterTimeOut={500}>
      {appointments.map(function(appointment) {
        return (
          <Appointment appointment={appointment} key={appointment.id} />
        )
      })}
    </CSSTransitionGroup>
  </div>

AppointmentsList.defaultProps = {
  appointments: []
}

AppointmentsList.propTypes = {
  appointments: PropTypes.array.isRequired
}