import React from 'react';
import PropTypes from 'prop-types';

export const FormErrors = ({formErrors}) => 
  <div>
    {Object.keys(formErrors).map((formErrorField) => {
      return (
        formErrors[formErrorField].map((error) => {
          return(
            <p>{formErrorField} {error}</p>
          )
        })
      )
    })}
  </div>

FormErrors.propTypes = {
  formErrors: PropTypes.object.isRequired
}
