import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from './components/CardList';
import styled from 'styled-components';
import TotalDonations from './components/Donations';
import Notification from './components/Notification';
import { payDonation, hydrateAppData } from './actions';


const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  font-family: Roboto, san-serif;
`;

const Header = styled.div`
  background: none;
  color: #000;
  padding: 10px;
  background: #26348F;
  color:#fff;
  margin-bottom:30px;
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align:center;
    width:100%;
    padding: 0 25px;
    box-sizing: border-box;
  }
  @media only screen and (max-width: 480px){
    > div {
      display: block;
      h1 {
        font-size: 25px;
      }
    }
  }
`;

const DivContainer = styled.div`
  max-width: 1300px;
  margin: auto;
  > div.donate {
    width: 15%;
    max-width:200px;
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 10px;
    background: #3143b0;
    color:#fff;
  }
  @media only screen and (max-width: 480px){
    > div.donate {
      width: 250px;
      margin: 0 auto;
    }
  }
`;

export default connect((state) => state)( 
  class App extends Component {
    constructor(props) {
      super(props);
      this.handlePay = this.handlePay.bind(this);
    }
    componentWillMount() {
      this.props.dispatch(hydrateAppData());
    }
    handlePay(charitiesId, amount, currency) {
      this.props.dispatch(payDonation({
        charitiesId,
        amount,
        currency,
      }));
    }
    render() {
      const {charities, donate, notification} = this.props;
      return (
        <Wrapper>
          <Header>
            <DivContainer>
              <h1>Omise Tamboon React</h1>
              <div className="donate">Total Donations <TotalDonations totalAmout={donate}></TotalDonations></div>
            </DivContainer>  
          </Header> 
          <DivContainer>
            <Notification {...notification} />
            <CardList charities={charities} handlePay={this.handlePay}/>
          </DivContainer>
        </Wrapper>
        
      );
    }
  }
);

