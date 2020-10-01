import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Explorer from './Explorer';

test('matches snapshot', () => {
  const wrapper = shallow(<Explorer />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
