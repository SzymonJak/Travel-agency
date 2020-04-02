import React from 'react';
// import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';

// import ReactHtmlParser from 'react-html-parser';

class OrderSummary extends React.Component {
  render () {
    return (
      <div>
        <h2 className={styles.component}>
          Total: <strong>$22,345</strong>
        </h2>
      </div>
    );
  }
}

export default OrderSummary;