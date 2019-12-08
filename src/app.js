import React from 'react'
import { connect } from 'react-redux';
import { inc, dec } from './redux';

export class App extends React.Component {

  render() {
    return (
      <p>
        { this.props.val } times    
        { this.props.act } action      
        <button onClick={ this.props.inc }>+</button>
        <button onClick={ this.props.dec }>-</button>
      </p>
      
    )
  }
};

const mapStateToProps = state => state.counter;

const mapDispatchToProps = {inc, dec};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
