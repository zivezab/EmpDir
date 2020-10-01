import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import Overview from './Overview';

test('matches snapshot', () => {
  const wrapper = shallow(<Overview />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
