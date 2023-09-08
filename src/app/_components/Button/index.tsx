"use client";

import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

type ColorType = "primary" | "secondary";
type SizeType = "small" | "medium" | "large";

type ButtonProps = {
  label: string;
  color: ColorType;
  size: SizeType;
  buttonOnClick: () => void;
};

type Props = ButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;

const colorStyle = (color: ColorType) => {
  switch (color) {
    case "primary":
      return styles.primary;
    case "secondary":
      return styles.secondary;
    default:
      return styles.primary;
  }
};

const sizeStyle = (color: SizeType) => {
  switch (color) {
    case "small":
      return styles.sizeSmall;
    case "medium":
      return styles.sizeMedium;
    case "large":
      return styles.sizeLarge;
    default:
      return styles.sizeMidium;
  }
};

export default function Button(props: Props) {
  const { label, color, buttonOnClick, size, ...optionalProps } = props;
  return (
    <button
      type="submit"
      className={`${styles.button} ${colorStyle(color)} ${sizeStyle(size)}`}
      onClick={buttonOnClick}
      {...optionalProps}
    >
      {label}
    </button>
  );
}
