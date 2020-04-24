import React from 'react';
import {shallow} from 'enzyme';
import DaysToSummer from './DaysToSummer';

const mockProps = {
  // title: ' days to summer!',
  // countdown: '#100',
  check: '',
};

describe('Component DaysToSummer', () => {
  it('should render without crashing', () => {
    const component = shallow(<DaysToSummer />);
    expect(component).toBeTruthy();
  });

  it('should render countdown', () => {
    const component = shallow(<DaysToSummer />);
    expect(component.exists('.countdown')).toEqual(true);
    // expect(component.exists('.title')).toEqual(true);
  });

  // it('should render correct title', () => {
  //   const expectedTitle = mockProps.title;
  //   const component = shallow(<DaysToSummer {...mockProps} />);
  //   expect(component.find('.title').text()).toEqual(expectedTitle);
  // });
});

const trueDate = Date;

const mockDate = customDate => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now() {
    return (new Date(customDate)).getDate();
  }
};

const checkDescriptionAtDate = (date, expectedNumber) => {
  it(`should show correct number at ${date}`, () => {
    global.Date = mockDate(`${date}T11:57:58.135Z`);

    const component = shallow(<DaysToSummer {...mockProps} />);
    const renderedDate = component.find('.countdown').text();
    expect(renderedDate).toEqual(expectedNumber);

    global.Date = trueDate;
  });
};

describe('Component DaysToSummer with mocked date', () => {
  checkDescriptionAtDate('2020-05-14', '38 days to summer');
  checkDescriptionAtDate('2020-06-20', '1 day to summer');
  checkDescriptionAtDate('2020-10-01', '263 days to summer');
  checkDescriptionAtDate('2020-06-22', mockProps.check);
});