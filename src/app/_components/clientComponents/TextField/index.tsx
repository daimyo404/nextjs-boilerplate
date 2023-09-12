"use client";

import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type TextFieldProps = {
  handleOnBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string;
  isValid: boolean;
  name: string;
  type: string;
};

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, keyof TextFieldProps> &
  TextFieldProps;

/**
 * @description TextFieldコンポーネント
 * @param {function handleOnBlur(e:React.ChangeEvent<HTMLInputElement>) => void} handleOnBlur
 * @param {string} id
 * @param {boolean} isValid
 * @param {string} name
 * @param {string} type
 * @param {InputHTMLAttributes<HTMLInputElement>} inputの属性
 */
const TextField = (props: Props) => {
  const { handleOnBlur, id, isValid, name, type, ...optionalInputProps } =
    props;
  return (
    <>
      <input
        className={`${styles.input}`}
        id={id}
        name={name}
        onBlur={handleOnBlur}
        type={type}
        {...optionalInputProps}
      />
      {isValid === true ? (
        <p>正しいです</p>
      ) : (
        <p className={`${styles.inValidParagraph}`}>エラーです</p>
      )}
    </>
  );
};

export default TextField;
