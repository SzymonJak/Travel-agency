import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';



class HappyHourAd extends React.Component {

    state = {
      title: 'Happy Hour',
      promoDescription: 'It\'s your time! Take advantage of Happy Hour! All offers 20% off!',
    };

    render (){
      return (
        <div>
          <h3 className={styles.title} title={this.state.title}></h3>
          <div className={styles.promoDescription}></div>
        </div>
      );
    }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
};

export default HappyHourAd;