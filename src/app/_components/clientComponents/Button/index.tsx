"use client";

import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

type VariantType = "primary" | "secondary";
type SizeType = "small" | "medium" | "large";

const variantStyle = (variant: VariantType) => {
  switch (variant) {
    case "primary":
      return styles.primary;
    case "secondary":
      return styles.secondary;
    default:
      return styles.primary;
  }
};

const sizeStyle = (size: SizeType) => {
  switch (size) {
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

type ButtonProps = {
  handleOnClick: () => void;
  label: string;
  variant: VariantType;
  size: SizeType;
};

type Props = ButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps>;

/**
 * @description Buttonコンポーネント
 * @param {function handleOnClick(e:React.ChangeEvent<HTMLInputElement>) => void} handleOnClick
 * @param {string} label
 * @param {VariantType} variant
 * @param {SizeType} size
 * @param {() => void} buttonOnClick
 */
const Button = (props: Props) => {
  const { handleOnClick, label, size, variant, ...optionalProps } = props;
  return (
    <button
      className={`${styles.button} ${variantStyle(variant)} ${sizeStyle(size)}`}
      onClick={handleOnClick}
      type="submit"
      {...optionalProps}
    >
      {label}
    </button>
  );
};

export default Button;
