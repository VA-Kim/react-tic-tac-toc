import React, { Component } from 'react';

class Square extends Component {
    render() {
        const status = 'Next player: X'
        return (
            <button className="square">
                {this.props.value}
            </button>
        );
    }
}

export default Square;