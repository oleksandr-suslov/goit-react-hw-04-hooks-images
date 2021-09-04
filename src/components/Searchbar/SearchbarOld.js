import { Component } from "react";
import { toast } from "react-toastify";
import Button from "../Button/Button";
import styles from "./Searchbar.module.css";

var shortid = require("shortid");

export default class Searchbar extends Component {
  state = {
    findImage: "",
  };

  handleFindImage = (e) => {
    this.setState({ findImage: e.currentTarget.value.toLowerCase() });
  };

  onChangeInput = (e) => {
    e.preventDefault();
    const { findImage } = this.state;
    if (findImage.trim() === "") {
      toast.error("Please, enter your request!", {
        theme: "colored",
      });
      this.props.onSubmit(findImage);
      this.setState({ findImage: "" });
      return;
    }
    this.props.onSubmit(findImage);
    this.setState({ findImage: "" });
  };

  render() {
    const { findImage } = this.state;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.onChangeInput}>
          <Button
            type="submit"
            newClassName={styles.SearchFormButton}
            id={shortid.generate()}
          />

          <input
            className={styles.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={findImage}
            onChange={this.handleFindImage}
          />
        </form>
      </header>
    );
  }
}
