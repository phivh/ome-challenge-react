import 'isomorphic-fetch';
import config from '../config';
import {summaryDonations} from '../helpers';

export const initializeCharities = (charities) => {
  return {
    type: 'INITIALIZE_CHARITIES',
    charities,
  };
};

export const updateTotalDonate = (amount) => {
  return {
    type: 'UPDATE_TOTAL_DONATE',
    amount,
  };
};

export const updateMessage = (visible, level, message) => {
  return {
    type: 'UPDATE_MESSAGE',
    notification: {
      visible,
      level,
      message,
    },
  };
};

export const hideMessage = (visible) => {
  return {
    type: 'HIDE_MESSAGE',
    notification: {
      visible,
    },
  };
};

// redux thunk

export const payDonation = ({charitiesId, amount, currency}) => {
  return (dispatch) => {
    try {
      const response = fetch(`${config.BACKEND_ENDPOINT}/payments`, {
        method: 'POST',
        body: JSON.stringify({ charitiesId, amount, currency }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 404) {
        throw response;
      }

      dispatch(updateTotalDonate(amount));
      dispatch(updateMessage(true, 'success', `Thanks for donate ${amount}!`));

    } catch (e) {
      dispatch(updateMessage(true, 'error', 'Sorry, there is some error during payment. Please try again later.'));
    } finally {
      setTimeout(function () {
        dispatch(hideMessage(false));
      }, 2000);
    }
  };
};

export const hydrateAppData = () => {
  return (dispatch) => {
    
    fetch(`${config.BACKEND_ENDPOINT}/charities`)
      .then(function(resp) { return resp.json(); })
      .then(function(data) {
        dispatch(initializeCharities(data));
    });

    fetch(`${config.BACKEND_ENDPOINT}/payments`)
      .then(function(resp) { return resp.json() })
      .then(function(data) {
        dispatch(updateTotalDonate(summaryDonations(data.map((item) => (item.amount)))));
      })
  };
};