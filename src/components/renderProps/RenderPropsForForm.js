import React, { Component } from 'react';

class RenderPropsForForm extends Component {
  constructor(props) {
    super(props);
    this.state = props.state;
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleOnSubmit = (e, cb) => {
    e.preventDefault();
    console.log('this.state: ', this.state);
    cb(this.state);
  };

  render() {
    const { state, handleOnChange, handleOnSubmit, props: { children } } = this;

    return children({
      state,
      handleOnChange,
      handleOnSubmit,
    });
  }
}

export default RenderPropsForForm;
