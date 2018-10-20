import PropTypes from 'prop-types';
import React from 'react';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const CheckboxField = (props) => {
  const { checked, name, onChange, label } = props;

  return (
    <div className='checkbox-field'>
      <FormControlLabel control={
          <Checkbox 
            checked={checked}
            color='primary'
            name={name}
            onChange={onChange}
          />
        } 
        label={label} 
      />
    </div>
  );
};

CheckboxField.propTypes = {
  //Required Props
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired

  //Optional Props
  
};

export default CheckboxField;