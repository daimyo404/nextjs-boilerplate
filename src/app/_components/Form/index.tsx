"use client";

import styles from "./styles.module.css";

type ButtonProps = {
  label: string;
  buttonOnClick: () => void;
};

export default function Form() {
  // const { label, buttonOnClick } = props;
  return (
    <form method={"post"}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>
    </form>
  );
}
