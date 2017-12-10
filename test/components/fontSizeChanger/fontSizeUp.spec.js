import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import FontSizeUp from '../../../src/components/fontSizeChanger/fontSizeUp';

describe('<FontSizeUp/>', function () {
  it('should have a div', function () {
    const wrapper = shallow(<FontSizeUp/>);
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('should have props for onClick', function () {
    const wrapper = shallow(<FontSizeUp/>);
    expect(wrapper.props().onClick).to.be.defined;
  });
});
