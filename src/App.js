import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import styled from 'styled-components';
import fetch from 'isomorphic-fetch';

import { summaryDonations } from './helpers';


const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  font-family: tahoma, san-serif;
`;

const Header = styled.div`
  background: none;
  color: #000;
  padding: 10px;
  
  > div {
    display: block;
    justify-content: space-between;
    align-items: center;
    text-align:center;
    width:100%;
  }
`;

const DivContainer = styled.div`
  max-width: 1300px;
  margin: auto;
`;

export default connect((state) => state)( 
  class App extends Component {
    constructor(props) {
      super();

      this.state = {
        charities: [],
        selectedAmount: 10,
      };
    }

    componentDidMount() {
      const self = this;
      fetch('http://localhost:3001/charities')
        .then(function(resp) { return resp.json(); })
        .then(function(data) {
          self.setState({ charities: data }) });

      fetch('http://localhost:3001/payments')
        .then(function(resp) { return resp.json() })
        .then(function(data) {
          self.props.dispatch({
            type: 'UPDATE_TOTAL_DONATE',
            amount: summaryDonations(data.map((item) => (item.amount))),
          });
        })
    }

    render() {
      const self = this;
      const charities = this.state.charities;
      const cards = <CardList charities={charities} />;
      const style = {
        color: 'red',
        margin: '1em 0',
        fontWeight: 'bold',
        fontSize: '16px',
        textAlign: 'center',
      };
      const donate = this.props.donate;
      const message = this.props.message;

      return (
        <Wrapper>
          <Header>
            <DivContainer>
              <h1>Omise Tamboon React</h1>
              <p>All donations: {donate}</p>
              <p style={style}>{message}</p>
            </DivContainer>  
          </Header>
          <DivContainer>
            {cards}
          </DivContainer>
        </Wrapper>
        
      );
    }
  }
);

function handlePay(id, amount, currency) {
  const self = this;
  return function() {
    fetch('http://localhost:3001/payments', {
      method: 'POST',
      body: `{ "charitiesId": ${id}, "amount": ${amount}, "currency": "${currency}" }`,
    })
      .then(function(resp) { return resp.json(); })
      .then(function() {
        self.props.dispatch({
          type: 'UPDATE_TOTAL_DONATE',
          amount,
        });
        self.props.dispatch({
          type: 'UPDATE_MESSAGE',
          message: `Thanks for donate ${amount}!`,
        });

        setTimeout(function() {
          self.props.dispatch({
            type: 'UPDATE_MESSAGE',
            message: '',
          });
        }, 2000);
      });
  }
}
