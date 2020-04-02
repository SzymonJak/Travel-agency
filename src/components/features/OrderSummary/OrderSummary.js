import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

// import ReactHtmlParser from 'react-html-parser';

class OrderSummary extends React.Component {
  render () {
    const { tripCost, orderOptions } = this.props;
    return (
      <div>
        <h2 className={styles.component}>
    Total: <strong>{calculateTotal(formatPrice(tripCost), orderOptions)}</strong>
        </h2>
      </div>
    );
  }
}

OrderSummary.propTypes = {
  tripCost: PropTypes.node,
  orderOptions: PropTypes.object,
};

export default OrderSummary;