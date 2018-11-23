import React from 'react';
import Appointment from './Appointment';
import PropTypes from 'prop-types';

export const AppointmentsList = ({appointments}) => 
  <div>
    {appointments.map(function(appointment) {
      return (
        <Appointment appointment={appointment} key={appointment.id} />
      )
    })}
  </div>

AppointmentsList.defaultProps = {
  appointments: []
}

AppointmentsList.propTypes = {
  appointments: PropTypes.array.isRequired
}