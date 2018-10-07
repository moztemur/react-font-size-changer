import React from 'react';
import { shallow } from 'enzyme';
import FontSizeChangerButton from '../../../src/components/fontSizeChanger/fontSizeChangerButton';

describe('<FontSizeChangerButton/>', function () {
  it('should have a div', function () {
    const wrapper = shallow(<FontSizeChangerButton/>);

    expect(wrapper.find('div').length).toBe(1);
  });

  it('should have props for onClick', function () {
    const wrapper = shallow(<FontSizeChangerButton/>);

    expect(wrapper.props().onClick).toBeDefined();
  });
});
