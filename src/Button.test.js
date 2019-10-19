import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button Component', () => {
  it('render button with test data', () => {
    const wrapper = shallow(<Button>test</Button>);
        
    expect(wrapper.children().text()).toEqual('test');
  });
});
