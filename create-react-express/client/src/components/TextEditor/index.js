import React, { Component } from "react";
// import './styles.css';

class TextEditor extends Component {
  state = {
    value: "Title Placeholder",
    isInEditMode: false
  };

  changeEditMode = () => {
    this.setState({
      isInEditMode: !this.state.isInEditMode
    });
    console.log("should go to edit mode now");
  };

  updateComponentValue = () => {
    this.setState({
      isInEditMode: false,
      value: this.refs.theTextInput.value
    });
  };

  renderEditView = () => {
    return (
      <div>
        <input type="text" defaultValue={this.state.value} ref="theTextInput" />
        <button onClick={this.updateComponentValue}>OK</button>
        <button onClick={this.changeEditMode}>X</button>
      </div>
    );
  };

  renderDefaultView = () => {
    return <div onDoubleClick={this.changeEditMode}>{this.state.value}</div>;
  };

  render() {
    return this.state.isInEditMode
      ? this.renderEditView()
      : this.renderDefaultView();
  }
}

export default TextEditor;
