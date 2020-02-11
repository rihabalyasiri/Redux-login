import React, { Component } from "react";
import { connect } from "react-redux";
import { firstName, lastName } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  onChange = e => {
    const { name, value } = e.target;
    if (name === "firstName") {
      this.props.firstName(value);
    } else {
      this.props.lastName(value);
    }
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      firstName: this.props.form.firstName,
      lastName: this.props.form.lastName
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form
          className="ui form "
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        >
          <div className="field four wide column">
            <label>First Name</label>
            <input type="text" name="firstName" placeholder="First Name" />
          </div>
          <div className="field four wide column">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Last Name" />
          </div>

          <button className="ui button four wide column" type="submit">
            Submit
          </button>
          <div>{this.state.firstName + " " + this.state.lastName}</div>
        </form>
      </div>
    );
  }
}

// function pass state as props to the component
const mapStateToProps = state => {
  //props looks like so
  return { form: { ...state.firstName, ...state.lastName } };
};

//connect function take two arguments (mapStateToProps and actions creators)
//connect function used to connect component with state
export default connect(mapStateToProps, { firstName, lastName })(App);
