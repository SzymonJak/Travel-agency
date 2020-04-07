import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';



class OrderOptionDate extends React.Component {

  state = {
    startDate: new Date(),
  };

  render () {
    const {setOptionValue} = this.props;
    return (
      <div className={styles.component}>
        <DatePicker className={styles.input}
          selected={this.state.startDate}
          onChange={(event) => setOptionValue(event)}
        > 
        </DatePicker>
      </div> 
    );
  }
}
 


OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;