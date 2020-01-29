import React, { Component } from 'react';
import Form from '../components/madlib/Form';
import Result from '../components/madlib/Result';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default class Madlib extends Component {
  state = {
    showResult: false,
    words: [],
    value0: '',
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    value8: '',
    value9: '',
    value10: '',
    value11: '',
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(state => ({
      words: [state.value0, state.value1, state.value2, state.value3, state.value4, state.value5, state.value6, state.value7, state.value8, state.value9, state.value10, state.value11]    
    }));
    this.toggleResult();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        <Header />
        {!showResult && <Form onSubmit={this.handleSubmit} onChange={this.handleChange} />}
        {showResult && <Result words={[this.state.words]} closeResult={this.toggleResult} />}
        <Footer />
      </>
    );
  }
}