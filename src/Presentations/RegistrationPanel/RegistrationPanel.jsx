import React from 'react';

import { required } from '../../lib/FieldValidations.js';

import Button from '@material-ui/core/Button';
import Form from '../Forms/Form.jsx';
import FormActions from '../Forms/FormActions.jsx';
import FormFields from '../Forms/FormFields.jsx';
import TextField from '../FormControls/TextField.jsx';

const RegistrationPanel = (props) => (
  <div className='registration-panel'>
    <Form name='registrationForm' title='Create your Account' onSubmit={() => {console.log("SUBMITTED")}}>
      <FormFields>
        <TextField label='First name' name='firstname' required validations={[ required ]} />
        <TextField label='Last name' name='lastname' required validations={[ required ]} />
        <TextField label='Username' name='username' type='password' required validations={[ required ]} />
        <TextField label='Password' name='password' type='password' required validations={[ required ]} />
        <TextField label='Confirm Password' name='confirmPassword' type='password' required validations={[ required ]} />
      </FormFields>
      <FormActions>
        <Button type='submit' color='primary' variant='contained'>
          Create Account
        </Button>
      </FormActions>
    </Form>
  </div>
);

export default RegistrationPanel;