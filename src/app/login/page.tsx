"use client";

import Button from "../_components/Button";
import Typography from "../_components/Typography";
import TextField from "../_components/TextField";
import styles from "./styles.module.css";
import Spacer from "../_components/Spacer";
import { useState } from "react";
import useValidState from "../_hooks/useValidState";

export default function Home() {
  //メールアドレス
  //パスワードs
  //名前
  //電話番号
  const regex = /^[0-9]$/;
  const [state, setState, isValid] = useValidState("", regex);
  const handleMailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setState(event.target.value);
  };

  return (
    <div className={`${styles.rootContainer}`}>
      <Spacer spaceSize="large"></Spacer>
      <Typography size={"large"} text={"text"}></Typography>
      <Spacer spaceSize="large"></Spacer>
      <div className={`${styles.container}`}>
        <div className={`${styles.container2}`}>
          <div className={`${styles.container5}`}>
            <Typography size={"medium"} text={"項目1"}></Typography>
          </div>
        </div>
        <div className={`${styles.container3}`}>
          <div className={`${styles.container4}`}>
            <TextField
              type={"mail"}
              id={"mail"}
              name={"mail"}
              placeholder={"hoge"}
              handleOnBlur={handleMailChange}
              isValid={isValid}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.container}`}>
        <div className={`${styles.container2}`}>
          <div className={`${styles.container5}`}>
            <Typography size={"medium"} text={"項目2"}></Typography>
          </div>
        </div>
        <div className={`${styles.container3}`}>
          <div className={`${styles.container4}`}>
            <TextField
              type={"mail"}
              id={"mail"}
              name={"mail"}
              placeholder={"hoge"}
              handleOnBlur={handleMailChange}
              isValid={true}
            />
          </div>
        </div>
      </div>
      <Button
        color={"primary"}
        label="Click me"
        buttonOnClick={() => console.log("Clicked")}
        size="medium"
      />
    </div>
  );
}
