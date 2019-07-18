import React, { Component } from 'react';
import Scoreboard from './components/scoreboard';
import Control from './components/control';
import Input from './components/input';
import './App.css';

class App extends Component {
  componentDidMount(){
    alert('press new game and start guessing! you have 10 chances.');
  }
  constructor(props){
    super(props);
    this.state = {
      status: 'playing',
      result: 'win',
      counts: 0,
      answer: Math.floor(1000 + (Math.random() * 9000)).toString().split(''),
      strikes: 0,
      balls: 0
    }
  }
  render(){
    return (
      <div className="App">
        <Control status={this.state.status} onNewgame={function(){
          var isValid = true;
          var newAnswer = Math.floor(1000 + (Math.random() * 9000)).toString().split('');
          while(isValid){
            for( var i = 0 ; i < newAnswer.length ; i++ ){
              for( var j = 0 ; j < newAnswer.length ; j++){
                if( newAnswer[i] === newAnswer[j] && i !== j ){
                  newAnswer = Math.floor(1000 + (Math.random() * 9000)).toString().split('');
                  isValid = true;
                  console.log('dupe')
                } else{
                  isValid = false;
                }
              }
            }
          }
          this.setState({answer: newAnswer});
          this.setState({status:'playing'});
        }.bind(this)}
        onRetry={function(){
          this.setState({counts:0});
        }.bind(this)}></Control>
        <Scoreboard strikes={this.state.strikes} balls={this.state.balls} counts={this.state.counts}></Scoreboard>
        <Input onGuess={function(guess){
          var _strikes = 0;
          var _balls = 0;
          var _answer = Array.from(this.state.answer);
          var _counts = this.state.counts;
          if(guess.length !== 4 ){
            alert('wrong input!');
          } else{for( var i = 0 ; i < 4 ; i++ ){
            for(var j = 0 ; j < 4 ; j ++ ){
              if(_answer[i] === guess[j]){
                if(i === j){
                  _strikes = _strikes + 1;
                } else if(i !== j){
                  _balls = _balls + 1;
                }
              }
            }
          }
          this.setState({strikes:_strikes});
          this.setState({balls:_balls});
          _counts = _counts + 1;
          this.setState({counts:_counts});
          if(_strikes === 4){
            alert('correct answer! press new game.');
            this.setState({status:'stop'});
            this.setState({result:'win'})
          } else if(this.state.counts === 10){
            alert('out of chances! press new game and try again.');
            this.setState({status:'stop'});
            this.setState({result:'lose'});
          }
        }
        }.bind(this)}></Input>
      </div>
      
    );
  }
}

export default App;
