import React, { Component } from 'react';

class Control extends Component {
    render(){
        return(
            <div>
                <input type="button" value="retry" onClick={function(e){
                    e.preventDefault();
                    this.props.onRetry();
                }.bind(this)}></input>
                <input type="button" value="new game" onClick={function(e){
                    e.preventDefault();
                    this.props.onNewgame();
                }.bind(this)}></input>
                <input type="text" name="status" placeholder={this.props.status}></input>
            </div>
        );
    }
}

export default Control