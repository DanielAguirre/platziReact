import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';

it('Render the add componet', () => {
  const componet = shallow(<Home/>);
  expect(componet).toMatchSnapshot();
});