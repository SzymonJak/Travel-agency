import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

class OrderForm extends React.Component {
  render () {
    const { cost, options, setOrderOption } = this.props;
    return (
      <Grid>
        <PageTitle text='Trip options' />
        <Row>
          {pricing.map(option => (
            <Col md={4} key={option.id} className={styles.optionBorder}>
              <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} />
            </Col>
          ))}
          <Col xs={12}>
            <OrderSummary tripCost={cost} orderOptions={options}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;