import PropTypes from 'prop-types';
import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

const TextField = (props) => {
  const { 
    error, helperText, label, name, required, type,
    onChange,
    ...otherProps
  } = props;

  const fixedFormControlProps = {
    fullWidth: true
  }

  const fixedInputProps = {
    fullWidth: true
  }
  
  return (
    <div className='text-field'>
      <FormControl error={error} required={required} {...fixedFormControlProps}>
        <InputLabel htmlFor={`${name}`}>{label}</InputLabel>
        <Input
          id={`${name}`} type={type}
          onChange={onChange}
          {...fixedInputProps}
          {...otherProps}
        />
        {helperText && <FormHelperText>{helperText}</FormHelperText>}
      </FormControl>
    </div>
  );
};

TextField.propTypes = {
  //Required Props
  name: PropTypes.string.isRequired,

  //Optional Props
  error: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool
};

export default TextField;