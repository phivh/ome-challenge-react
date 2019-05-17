import React , {Component} from 'react';
import styled from 'styled-components';

const Div = styled.p`
    font-weight: bold;
    font-size:18px;
    margin:0;
`;

class TotalDomations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayAmount: 0
        }
    }
    shouldComponentUpdate(props) {
        if(this.state.displayAmount < props.totalAmout) {
            setTimeout(() => {
                this.setState({
                    displayAmount: this.state.displayAmount === 0 ? props.totalAmout : this.state.displayAmount + 1,
                });
            },(500/ (props.totalAmout - this.state.displayAmount)));
            return true;
        }
        return false;
    }
    render() {
        return <Div>{this.state.displayAmount} </Div>
    }
}

export default TotalDomations;