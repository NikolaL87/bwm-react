import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { BwmInput } from 'components/shared/form/BwmInput';
import { BwmSelect } from 'components/shared/form/BwmSelect';
import { BwmTextArea } from '../../shared/form/BwmTextArea';

const RentalCreateForm = props => {
  const { handleSubmit, pristine, submitting, submitCb, valid, options } = props;
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
        name="description"
        type="text"
        label='Description'
        rows='6'
        className="form-control"
        component={BwmTextArea}
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
        options={options}
        name="category"
        label='Category'
        className="form-control"
        component={BwmSelect}
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