import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotificationDiv = styled.div`
  font-weight: normal;
  font-size: 16px;
  text-align: center;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.visible ? '-2%' : '120%'});
  position: fixed;
  min-width: 250px;
  max-width: 400px;
  z-index: 99;
  right: 10px;
  top: 120px;
  > div {
    border-radius: 8px;
    color: white;
    background-color: ${props => props.level === 'success' ? '#4CAF50' : 'darkred'};
    padding: 1em 10px;
    right: 10%;
    box-shadow: 0px 0px 18px #BBB;
  }
  
`;

const Notification = props => {
  return (
    <NotificationDiv visible={(props.visible)} level={props.level}>
      <div><i className={`fas ${props.level === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}/> {props.message}</div>
    </NotificationDiv>
  );
};

Notification.propTypes = {
  level: PropTypes.string,
  message: PropTypes.string,
};

export default Notification;