import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Search from './Search';

test('matches snapshot', () => {
  const wrapper = shallow(<Search />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
