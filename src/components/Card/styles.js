import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px 0px;
  -webkit-box-shadow: 0px 4px 11px -6px rgba(0,0,0,0.54);
  -moz-box-shadow: 0px 4px 11px -6px rgba(0,0,0,0.54);
  box-shadow: 0px 4px 11px -6px rgba(0,0,0,0.54);
  border-radius: 3px;
  margin-bottom: 50px;
  overflow: hidden;
  transition: opacity 2s;
  position: relative;
`;

export const CardCoverImageWrapper = styled.div`
  max-height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const CardWithImageWrapper = styled.div`
  img {
    width: 100%;
  }
`;

export const PaymentWrapper = styled.div`
  transform: translateY(${props => props.visible ? '0%' : '100%'});
  transition: transform .2s ease-in;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  flex: none;
  > h3 {
    font-weight:normal;
    font-size: 25px;
  }
  > * {
    flex-basis: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  > i {
    justify-content: flex-end;
    padding: 0px 20px;
  }
  button {
    background:none;
    flex: 0 0 50px;
    padding:5px;
    border-radius:none;
    border:1px solid blue;
    color:blue;
    &:hover {
      background:#0000ff30;
      cursor:pointer;
    }
  }
`;

export const PaymentOption = styled.div`
  dislay: flex;
  justify-content: center;
  > label {
    margin: 0 10px;
  }
`;

export const CardCaption = styled.div`
  display: flex;
  padding: 10px;
  
  > * {
    flex: auto;
    display: flex;
    align-items: center;
  }
  
  > button {
    background:none;
    flex: 0 0 50px;
    padding:5px;
    border-radius:none;
    border:1px solid blue;
    color:blue;
    &:hover {
      background:#0000ff30;
      cursor:pointer;
    }
  }
`;

export const RadioLabel = styled.label`
  display: block;
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  line-height: 1;
    
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  
  /* When the radio button is checked, add a blue background */
  & input:checked ~ .checkmark {
      background-color: #2196F3;
  }
  
  /* Create the indicator (the dot/circle - hidden when not checked) */
  .checkmark:after {
      content: "";
      position: absolute;
      display: none;
  }
  
  /* Show the indicator (dot/circle) when checked */
  & input:checked ~ .checkmark:after {
      display: block;
  }
  
  /* Style the indicator (dot/circle) */
  & .checkmark:after {
    top: 6px;
    left: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: white;
	}
	
  span.checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 20px;
      width: 20px;
      background-color: #FFF;
      border: 1px #888 solid;
      border-radius: 50%;
  }
  
  > input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
  }
`;
RadioLabel.displayName = 'RadioLabel';
