import PropTypes from 'prop-types';
import React, { Children } from 'react';
import { Field, reduxForm } from 'redux-form';

import FormActions from './FormActions.jsx';
import FormFields from './FormFields.jsx';
import Panel from '../Panel/Panel.jsx';
import PanelActions from '../Panel/PanelActions.jsx';
import PanelContent from '../Panel/PanelContent.jsx';
import PanelTitle from '../Panel/PanelTitle.jsx';

const renderField = ({ input, label, meta: { touched, error }, element, ...custom }) => {
  const hasErrors = touched && error && error.length > 1;

  return React.cloneElement(element, {
    error: hasErrors,
    helperText: hasErrors ? error : null,
    ...input,
    ...custom
  });
};

let formName = 'form'; //default form name

const Form = (props) => {
  const {
    children, name, onSubmit, title, //user props
    // handleSubmit, pristine, reset, submitting //redux-form injected props
    handleSubmit //redux-form injected props
  } = props;

  formName = name;

  let formFields = [];
  let formActions = [];

  Children.forEach(children, (child, i) => {
    const { children } = child.props;

    if (child.type.name === FormFields.name) {
      formFields = children;
    } else if (child.type.name === FormActions.name) {
      formActions = children;
    }
  });

  return (
    <div className='form'>
      <Panel>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PanelTitle>{title}</PanelTitle>
          <PanelContent>
            {Children.map(formFields, (child, i) => {
              const { name, validations } = child.props;
              
              return validations
                ? <Field
                  component={renderField}
                  element={child}
                  name={name}
                  validate={validations}
                />
                : child;
            })}
          </PanelContent>
          <PanelActions>
            {formActions}
          </PanelActions>
        </form>
      </Panel>
    </div>
  );
};

Form.propTypes = {
  //Required Props
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,

  //Optional Props
  title: PropTypes.string.isRequired
};

export default reduxForm({
  form: `${formName}` //a unique identifier for this form
})(Form);