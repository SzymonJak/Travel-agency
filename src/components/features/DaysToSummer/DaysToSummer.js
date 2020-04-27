import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  state = {
    daysDescription: ' days to summer!',
    oneDayDescription: ' day to summer!',
  };

  getCountdownDate() {
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const nextSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const endOfSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 22));

    if(currentDate.getUTCMonth() >= 8){
      nextSummer.setUTCFullYear(currentDate.getUTCFullYear()+1);
    }

    const daysToSummer = Math.round(Math.abs((currentDate - nextSummer) / oneDay));

    if(currentDate >= nextSummer && currentDate <= endOfSummer){
      return '';
    }
    if(daysToSummer === 1){
      return daysToSummer + this.state.oneDayDescription;
    } else {
      return daysToSummer + this.state.daysDescription;
    }
  }
    
  render() {
    return(
      <div className={styles.component}>
        <div className={styles.countdown}>{this.getCountdownDate()}</div>
      </div>
    );
  }
}

DaysToSummer.propTypes = {
  title: PropTypes.string,
};

export default DaysToSummer;