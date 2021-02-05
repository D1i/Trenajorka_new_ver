import React from "react";
import "./style.css";

class FieldInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldValue: ""
        }
    }

    handleCahnge = (e) => {
        this.setState({fieldValue: e.target.value});
    }

    handleClear = () => {
        this.setState({ fieldValue: "" });
        this.props.handleClearField(this.props.inputId);
    }

    render () {
        return (
          <div className="style-fieldInputContainer">
            <p className="styles-description">{"TEST"}</p>
            <input
              className="style-input"
              value={this.state.fieldValue}
              onChange={this.handleCahnge}
              type="text"
              placeholder={this.props.placeholder}
            />
            <button onClick={this.handleClear} className="style-clearField">X</button>
          </div>
        );
    }
}

export default FieldInput;
