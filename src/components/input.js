import React, { Component } from 'react';

class Input extends Component {
    render(){
        return(
            <form action="create_process" method="post"
            onSubmit={function(e){
                e.preventDefault();
                var guess = e.target.input.value.toString().split('');
                this.props.onGuess(guess);
            }.bind(this)}>
                <input type="text" name="input"></input>
                <input type="submit"></input>
            </form>
        );
    }
}

export default Input;