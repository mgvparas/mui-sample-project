import React from 'react';

import { required } from '../../lib/FieldValidations.js';

import Button from '@material-ui/core/Button';
import CheckboxField from '../FormControls/CheckboxField.jsx';
import Form from '../Forms/Form.jsx';
import FormActions from '../Forms/FormActions.jsx';
import FormFields from '../Forms/FormFields.jsx';
import TextField from '../FormControls/TextField.jsx';

const LoginPanel = (props) => (
  <div className='login-panel'>
    <Form name='loginForm' title='Sign In' onSubmit={() => {console.log("SUBMITTED")}}>
      <FormFields>
        <TextField label='Username' name='username' required validations={[ required ]} />
        <TextField label='Password' name='password' type='password' required validations={[ required ]} />
        <CheckboxField 
          label='Remember me' 
          name='rememberMe'
          checked={true}
          onChange={() => {}}
        />
      </FormFields>
      <FormActions>
        <Button type='submit' color='primary' variant='contained'>
          Continue
        </Button>
      </FormActions>
    </Form>
  </div>
);

export default LoginPanel;