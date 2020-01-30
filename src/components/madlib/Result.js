import React from 'react';
import PropTypes from 'prop-types';
import { zoo } from '../../services/madlib';
import styles from './Result.css';


const Result = ({ words, closeResult }) => (
  <>
    <section>
      <p>{zoo(...words)}</p>
      <button onClick={closeResult}>Return To Input Form</button>
    </section>
  </>
);

Result.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
  closeResult: PropTypes.func.isRequired
};

export default Result;
