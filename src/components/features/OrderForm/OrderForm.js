import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';

import {Grid, Row, Col} from 'react-flexbox-grid';
import PageTitle from '../../common/PageTitle/PageTitle';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';

import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import Button from '../../common/Button/Button';

const sendOrder = (options, tripCost, tripId, countryCode) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripId,
    countryCode,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };


  if (options.name && options.contact !== '') {
    fetch(url, fetchOptions)
      .then(function(response){
        return response.json();
      }).then(function(parsedResponse){
        console.log('parsedResponse', parsedResponse);
      });
  }
};

class OrderForm extends React.Component {
  render () {
    const { cost, options, setOrderOption, tripId, countryCode } = this.props;
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
          <Button onClick={() => sendOrder(options, cost, tripId, countryCode)}>Order now!</Button>
        </Row>
      </Grid>
    );
  }
}

OrderForm.propTypes = {
  cost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripId: PropTypes.string,
  countryCode: PropTypes.string,
};

export default OrderForm;