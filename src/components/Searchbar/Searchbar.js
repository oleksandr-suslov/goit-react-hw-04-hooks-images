import { useState } from "react";
import { toast } from "react-toastify";
import Button from "../Button/Button";
import styles from "./Searchbar.module.css";

var shortid = require("shortid");

export default function Searchbar({ onSubmit }) {
  const [find, setFind] = useState("");

  const handleFindImage = (e) => {
      setFind(e.currentTarget.value.toLowerCase());
    },
    onChangeInput = (e) => {
      e.preventDefault();

      if (find.trim() === "") {
        toast.error("Please, enter your request!", {
          theme: "colored",
        });
      }
      onSubmit(find);
      setFind("");
    };

  return (
    <header className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={onChangeInput}>
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
          value={find}
          onChange={handleFindImage}
        />
      </form>
    </header>
  );
}
