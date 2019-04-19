import React, {Component} from 'react';

const simpleHoc = WrappedComponent => {
  console.log('simpleHoc');


  return class extends Component {
    handleClick() {
      console.log('click');
    }

    componentDidMount() {
      console.log(this.instanceComponent, 'instanceComponent');
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleClick={this.handleClick}
          ref={instanceComponent => this.instanceComponent = instanceComponent}
        />
      )
    }
  }
}
export default simpleHoc;