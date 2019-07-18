import React, { Component } from 'react';

class Scoreboard extends Component {
    render(){
        return(
            <div>
                <p>counts : {this.props.counts}</p>
                <p>{this.props.strikes} strike</p>
                <p>{this.props.balls} ball</p>
            </div>
        );
    }
}

export default Scoreboard;