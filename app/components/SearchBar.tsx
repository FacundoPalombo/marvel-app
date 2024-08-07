"use client";

import { ChangeEventHandler } from "react";
import styles from "./SearchBar.module.css";
import Search from "./svg/Search";

type SearchBarProps = {
  count: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBar({ count, onChange }: SearchBarProps) {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchBar__input}>
        <Search className={styles.searchBar__searchIcon} />
        <input
          className={styles.searchBar__textfield}
          type="text"
          placeholder="SEARCH A CHARACTER..."
          name="search"
          onChange={onChange}
        />
      </div>
      <span className={styles.searchBar__resultsCount}>{count} results</span>
    </div>
  );
}
