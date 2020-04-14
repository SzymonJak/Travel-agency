import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe ('Component OrderOption', () => {
  it('should render', () => {
    const component = shallow(<OrderOption type={'text'} name={'name'} />);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should render correct name', () => {
    const expectedName = 'Hello!';
    const component = shallow(<OrderOption type={'text'} name={expectedName} />);
    
    console.log(component.debug());
    
    const renderedText = component.find('.title').text();
    expect(renderedText).toEqual(expectedName);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for (let type in optionTypes) {
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption = {mockSetOrderOption}
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specyfic tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'icons': {
        it('contains div with class icon', () => {
          expect(renderedSubcomponent.exists('div.icon')).toEqual(true);
        });

        it('should change class on click', () => {
          renderedSubcomponent.find('div.icon').at(3).simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
        });
        break;
      }
      case 'checkboxes': {
        it('contains input with type="checkbox"', () => {
          // console.log(renderedSubcomponent.debug());
          expect(renderedSubcomponent.exists('input[type=\'checkbox\']')).toEqual(true);
        });
        it('should check right box on change', () => {
          const input = renderedSubcomponent.find('input[value=\'' + testValue + '\']');
          // const myCheckbox = input.find('[value=\'' + testValue + '\']');
          input.simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue] });
          console.log(renderedSubcomponent.debug());
        });
        break;
      }
    }
  });
}