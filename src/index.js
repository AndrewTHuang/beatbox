import React from 'react';
import ReactDOM from 'react-dom';

class HelloReact extends React.Component {
  render() {
    return <p> Hello React! </p>;
  }
}

ReactDOM.render(<HelloReact/>, document.getElementById('root'));
