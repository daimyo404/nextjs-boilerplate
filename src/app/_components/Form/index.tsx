"use client";

import { InputHTMLAttributes } from "react";
import styles from "./styles.module.css";

type FormProps = {
  type: string;
  name: string;
  id: string;
};

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, keyof FormProps> &
  FormProps;

export default function Form(props: Props) {
  const { type, name, id, ...optionalProps } = props;
  return (
    <form method={"post"}>
      <div>
        <input
          className={`${styles.input}`}
          type={type}
          name={name}
          id={id}
          {...optionalProps}
        />
      </div>
    </form>
  );
}
