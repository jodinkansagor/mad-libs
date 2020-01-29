import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App comp
onent', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});