import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import styled from 'styled-components';
import FlipMove from 'react-flip-move';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  position: relative;
  
  > div {
    flex-basis: 600px;
  }
  
  &:after {
    content: "";
    flex-basis: 600px;
  }
`;

class CardList extends Component {
  render() {
    const { charities, handlePay } = this.props;
    const cards = charities.map((item, i) => (
      <Card key={item.id} {...item} handlePay={handlePay}/>
    ));
    return (
      <Wrapper>
        <FlipMove typeName={null} leaveAnimation={'none'}>
          {cards}
        </FlipMove>
      </Wrapper>
    );
  }
}

CardList.propTypes = {
  charities: PropTypes.arrayOf(PropTypes.object),
  handlePay: PropTypes.func,
};

export default CardList;