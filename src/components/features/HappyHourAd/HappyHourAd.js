import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

import {formatTime} from '../../../utils/formatTime';



class HappyHourAd extends React.Component {

    state = {
      title: 'Happy Hour',
      promoDescription: 'It\'s your time! Take advantage of Happy Hour! All offers 20% off!',
      date: new Date(),
    };

    getCountdownTime(){
      const currentTime = new Date();
      const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

      if(currentTime.getUTCHours() >= 12){
        nextNoon.setUTCDate(currentTime.getUTCDate()+1);
      }

      return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
    }

    componentDidMount() {
      this.timer = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timer);
    }

    tick() {
      this.setState({
        date: new Date(),
      });
    }

    render (){
      const countdown = this.getCountdownTime();

      return (
        <div className={styles.component}>
          <h3 className={styles.title}>{this.state.title}</h3>
          <div className={styles.promoDescription}>{countdown > 82800 ? this.state.promoDescription : formatTime(countdown)}</div>
        </div>
      );
    }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
};

export default HappyHourAd;