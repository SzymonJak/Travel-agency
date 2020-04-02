import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';
import OrderSummary from '../OrderSummary/OrderSummary';

class OrderForm extends React.Component {
  render () {
    const { cost } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <PageTitle text='Trip options' />
            <OrderSummary tripCost={cost} />
          </Col>
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  cost: PropTypes.string,
};

export default OrderForm;