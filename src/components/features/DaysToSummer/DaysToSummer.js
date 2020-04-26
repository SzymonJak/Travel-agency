import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  state = {
    description: ' day to summer!',
    description2: ' days to summer!',
  };

  getCountdownDate() {
    const oneDay = 24 * 60 * 60 * 1000;
    const currentDate = new Date();
    const nextSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const endOfSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 22));

    if(currentDate >= nextSummer && currentDate <= endOfSummer){
      return '';
    }

    if(currentDate.getUTCMonth() >= 8){
      nextSummer.setUTCFullYear(currentDate.getUTCFullYear()+1);
    }

    return Math.round(Math.abs((currentDate - nextSummer) / oneDay));
  }

  setDescription() {
    const currentDate = new Date();
    const nextSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const endOfSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 22));

    if(currentDate >= nextSummer && currentDate <= endOfSummer){
      return '';
    }
    
    if(Date.UTC(currentDate.getUTCMonth(), currentDate.getUTCDate()) === Date.UTC(5, 20)){
      return this.state.description;
    } else {
      return this.state.description2;
    }
  }
    
  render() {
    return(
      <div className={styles.component}>
        <div className={styles.countdown}>{this.getCountdownDate()}</div>
        <p className={styles.title}>{this.setDescription()}</p>
      </div>
    );
  }
}

DaysToSummer.propTypes = {
  title: PropTypes.string,
};

export default DaysToSummer;