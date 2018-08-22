import { Component } from 'react';

class RenderPropsForForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.state };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  initializeState = () => {
    this.setState(this.props.state);
  };

  render() {
    const { state, handleOnChange, initializeState, props: { children } } = this;

    return children({
      state,
      handleOnChange,
      initializeState,
    });
  }
}

export default RenderPropsForForm;
