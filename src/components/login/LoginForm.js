import React from 'react'
import { Field, reduxForm } from 'redux-form';

import { BwmInput } from 'components/shared/form/BwmInput';
import { required, minLength4 } from 'components/shared/form/validators';

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting, submitCb, valid } = props;
  return (
    <form onSubmit={handleSubmit(submitCb)}>
      <Field
        name="email"
        type="email"
        label='Email'
        className="form-control"
        component={BwmInput}
        validate={[required, minLength4]}
      />
      <Field
        name="password"
        type="password"
        label='Password'
        className="form-control"
        component={BwmInput}
        validate={[required]}
      />
      <button className="btn btn-bwm btn-form" type="submit" disabled={pristine || submitting}>
        Submit
      </button>
    </form>
  )
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm)