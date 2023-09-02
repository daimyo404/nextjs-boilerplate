"use client";

import Button from "../_components/Button";
import Typography from "../_components/Typography";
import Form from "../_components/Form";
import styles from "./styles.module.css";
import Spacer from "../_components/Spacer";

export default function Home() {
  return (
    <div className={`${styles.rootContainer}`}>
      <Spacer spaceSize="large"></Spacer>
      <Typography></Typography>
      <Spacer spaceSize="medium"></Spacer>
      <Form />
      <Form />
      <Button label="Click me" buttonOnClick={() => console.log("Clicked")} />
    </div>
  );
}
