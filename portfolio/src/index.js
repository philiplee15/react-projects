import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import AwesomeComponent from './components/AwesomeComponent';
class App extends Component {
  render () {
    return (
      <div>
        <AwesomeComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
