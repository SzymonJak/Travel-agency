import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {

  // state = {
  //   title: ' days to summer!',
  //   check: 'it is SUMMER!',
  // };

  getCountdownDate() {
    const oneDay = 24 * 60 * 60 * 1000;
    let text = ' days to summer';
    const currentDate = new Date();
    const nextSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 5, 21));
    const endOfSummer = new Date(Date.UTC(currentDate.getUTCFullYear(), 8, 22));

    if(currentDate >= nextSummer && currentDate <= endOfSummer){
      return '';

      // this.setState({
      //   title: 'new title',
      // });
      // return this.state.title;
    }

    if(currentDate.getUTCMonth() >= 8){
      nextSummer.setUTCFullYear(currentDate.getUTCFullYear()+1);
    }

    if(Date.UTC(currentDate.getUTCMonth(), currentDate.getUTCDate()) === Date.UTC(5, 20)){
      text = ' day to summer';
    }

    return Math.round(Math.abs((currentDate - nextSummer) / oneDay)) + text;
  }
    
  render() {
    return(
      <div className={styles.component}>
        <div className={styles.countdown}>{this.getCountdownDate()}</div>
        {/* <p className={styles.title}>{this.state.title}</p> */}
      </div>
    );
  }
}

DaysToSummer.propTypes = {
  title: PropTypes.string,
};

export default DaysToSummer;