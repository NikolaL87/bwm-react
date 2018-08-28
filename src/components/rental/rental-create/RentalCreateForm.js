import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { BwmInput } from 'components/shared/form/BwmInput';

const RentalCreateForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid } = props;
  return (
    <form onSubmit={handleSubmit(submitCb)}>
      <Field
        name="title"
        type="text"
        label='Title'
        className="form-control"
        component={BwmInput}
      />
      <Field
        name="city"
        type="text"
        label='City'
        className="form-control"
        component={BwmInput}
      />
      <Field
        name="street"
        type="text"
        label='Street'
        className="form-control"
        component={BwmInput}
      />
      <Field
        name="bedrooms"
        type="text"
        label='Bedrooms'
        className="form-control"
        component={BwmInput}
      />
      <Field
        name="dailyRate"
        type="text"
        label='Daily Rate'
        className="form-control"
        component={BwmInput}
      />
      <button className="btn btn-bwm btn-form" type="submit" disabled={pristine || submitting}>
        Create Rental
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'RentalCreateForm'
})(RentalCreateForm);