import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: '.title',
  promoDescription: '.promoDescription',
};

const mockProps = {
  title: 'Happy Hour',
  promoDescription: 'It\'s your time! Take advantage of Happy Hour! All offers 20% off!',
};

describe ('Component HappyHourAd', () => {
  it('should render', () => {
    const component = shallow(<HappyHourAd />);
    expect(component).toBeTruthy();
  });

  it('should render title and contdown', () => {
    const component = shallow(<HappyHourAd />);
    expect(component.exists(select.title)).toEqual(true);
    expect(component.exists(select.promoDescription)).toEqual(true);
  });

  it('should render correct title', () => {
    const expectedTitle = mockProps.title;
    const component = shallow(<HappyHourAd {...mockProps} />);

    expect(component.find(select.title).prop('title')).toEqual(expectedTitle);
  });
});