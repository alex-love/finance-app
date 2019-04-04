import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Calculator from '../components/functional/Calculator';

const { calculateInterest } = require('../components/functional/Calculator');


describe('<Calculator />', () => {
    it('renders calculator component', () => {
      const wrapper = render(<Calculator />);
      expect(wrapper.find('.foo-bar')).to.have.lengthOf(3);
    });

