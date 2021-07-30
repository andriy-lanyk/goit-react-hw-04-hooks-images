import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Header,
  Form,
  FormBtn,
  FormLabel,
  FormInput,
} from "./Searchbar.styles";

class Searchbar extends Component {
  state = {
    value: "",
  };

  submitForm = (e) => {
    e.preventDefault();

    if (this.state.value.trim() === "") {
      // react-toastify вставить
      return;
    }

    this.props.change(this.state.value);
    this.setState({ value: "" });
  };

  handleChange = (e) => {
    this.setState({ value: e.target.value.toLowerCase() });
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.submitForm}>
          <FormBtn type="submit">
            <FormLabel>Search</FormLabel>
          </FormBtn>

          <FormInput
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  change: PropTypes.func.isRequired,
};

export default Searchbar;
