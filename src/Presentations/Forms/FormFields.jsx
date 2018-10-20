import React from 'react';

const FormFields = (props) => {
  return (
    <div className='form-fields'>
      {props.children}
    </div>
  );
};

export default FormFields;