import {shallow} from 'enzyme';
import toJSON from 'enzyme-to-json';
import React from 'react';

import NamesContainer from './NamesContainer';

test('matches snapshot', () => {
  const wrapper = shallow(<NamesContainer names={[]} />);

  expect(toJSON(wrapper)).toMatchSnapshot();
});
