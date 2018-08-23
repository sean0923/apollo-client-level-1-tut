import { Component } from 'react';

class RenderPropsForForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.formValues };
  }

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  initializeState = () => {
    this.setState(this.props.formValues);
  };

  render() {
    const { state, handleOnChange, initializeState, props: { children } } = this;

    return children({
      formValues: state,
      handleOnChange,
      initializeState,
    });
  }
}

export default RenderPropsForForm;
