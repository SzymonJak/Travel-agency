import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render url with correct id', () => {
    const expectedId = 'abc';
    const component = shallow(<TripSummary id={expectedId} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedId}`);
    console.log(component.debug());
  });

  it('should render img with correct src i alt', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'image description';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} tags={[]} />);

    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('should render without crashing', () => {
    const component = shallow(<TripSummary name={''} cost={''} days={0} tags={[]} />);
    expect(component).toBeTruthy();
  });

  it('should throw error without props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render element with correct tag', () => {
    const tags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={tags} />);
    const expectedTag = component.find('.tag').at(2).text();
    expect(expectedTag).toEqual('tag3');
  });

  it('should not render div with tags if prop tags is false', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.exists('.tags')).toEqual(false);
  });
});