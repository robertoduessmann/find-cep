import React from 'react';
import { shallow } from 'enzyme';
import Box from './Box';

describe('Box Component', () => {
  it('render box with test data', () => {
    const wrapper = shallow(<Box>test</Box>);

    expect(wrapper.children().text()).toEqual('test');
  });
});
