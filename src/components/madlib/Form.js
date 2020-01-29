import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, value0, value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11 }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="value0" value={value0} placeholder="adjective" />
    <input type="text" name="value1" value={value1} placeholder="noun" />
    <input type="text" name="value2" value={value2} placeholder="verb, past tense" />
    <input type="text" name="value3" value={value3} placeholder="adverb" />
    <input type="text" name="value4" value={value4} placeholder="adjective" />
    <input type="text" name="value5" value={value5} placeholder="noun" />
    <input type="text" name="value6" value={value6} placeholder="noun" />
    <input type="text" name="value7" value={value7} placeholder="adjective" />
    <input type="text" name="value8" value={value8} placeholder="verb" />
    <input type="text" name="value9" value={value9} placeholder="adverb" />
    <input type="text" name="value10" value={value10} placeholder="verb, past tense" />
    <input type="text" name="value11" value={value11} placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value0: PropTypes.string.isRequired,
  value1: PropTypes.string.isRequired,
  value2: PropTypes.string.isRequired,
  value3: PropTypes.string.isRequired,
  value4: PropTypes.string.isRequired,
  value5: PropTypes.string.isRequired,
  value6: PropTypes.string.isRequired,
  value7: PropTypes.string.isRequired,
  value8: PropTypes.string.isRequired,
  value9: PropTypes.string.isRequired,
  value10: PropTypes.string.isRequired,
  value11: PropTypes.string.isRequired
};

export default Form;
