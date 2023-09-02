"use client";

import styles from "./styles.module.css";

type ButtonProps = {
  label: string;
  buttonOnClick: () => void;
};

export default function Button(props: ButtonProps) {
  const { label, buttonOnClick } = props;
  return (
    <button
      type="submit"
      className={`${styles.button}`}
      onClick={buttonOnClick}
    >
      {label}
    </button>
  );
}
