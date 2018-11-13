import React, {Component} from 'react';
import './style.css'
import {CSSTransition} from 'react-transition-group';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
    this.toggleBtn = this.toggleBtn.bind(this);
  }

  toggleBtn() {
    this.setState(() => ({
      show: !this.state.show
    }))
  }

  render() {
    return (
      <div>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          classNames='fade'
        >
          <div>hello</div>
        </CSSTransition>
        <button onClick={this.toggleBtn}>toggle</button>
      </div>

    )

  }
}

export default App