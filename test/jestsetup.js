import React from 'react';
// Make Enzyme functions available in all test files without importing
import { shallow, render, mount } from 'enzyme';
global.shallow = shallow;
global.render = render;
global.mount = mount;

global.React = React;
// Fail tests on any warning
console.error = message => {
   throw new Error(message);
};