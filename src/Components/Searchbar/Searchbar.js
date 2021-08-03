import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Header,
  Form,
  FormBtn,
  FormLabel,
  FormInput,
} from "./Searchbar.styles";

function Searchbar({ change }) {
  const [value, setValue] = useState("");

  function submitForm(e) {
    e.preventDefault();

    if (value.trim() === "") {
      return;
    }

    change(value);
    setValue("");
  }

  return (
    <Header>
      <Form onSubmit={submitForm}>
        <FormBtn type="submit">
          <FormLabel>Search</FormLabel>
        </FormBtn>

        <FormInput
          className="SearchForm-input"
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={(e) => setValue(e.target.value.toLowerCase())}
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  change: PropTypes.func.isRequired,
};

export default Searchbar;
