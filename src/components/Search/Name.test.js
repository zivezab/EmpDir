import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Name from './Name';

test('matches snapshot', () => {
  const wrapper = shallow(<Name />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
