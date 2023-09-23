"use client";

import Button from "../_components/clientComponents/Button";
import Typography from "../_components/Typography";
import TextField from "../_components/clientComponents/TextField";
import styles from "./styles.module.css";
import Spacer from "../_components/Spacer";
import useValidAndState from "../_hooks/useValidAndState";
import router from "next/router";
import Link from "next/link";
import { Suspense } from "react";

const Home = () => {
  // mail setting
  const mailRegex =
    /^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  const [setMailState, isMailValid] = useValidAndState("", mailRegex);
  const handleMailOnBlur = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setMailState(event.target.value);
  };

  // password setting
  const passwordRegex = /^[a-zA-Z0-9.?/-]{8,24}$/;
  const [setPasswordState, isPasswordValid] = useValidAndState(
    "",
    passwordRegex
  );
  const handlePasswordOnBlur = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setPasswordState(event.target.value);
  };

  // name setting
  const nameRegex = /^[a-zA-Z0-9ぁ-んァ-ヶー一-龠々]{1,24}$/;
  const [setNameState, isNameValid] = useValidAndState("", nameRegex);
  const handleNameOnBlur = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNameState(event.target.value);
  };

  // tel setting
  const telRegex = /^[0-9]{10,11}$/;
  const [setTelState, isTelValid] = useValidAndState("", telRegex);
  const handleTelOnBlur = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTelState(event.target.value);
  };

  //button action
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // e.preventDefault();
    // router.push("/complete");
  };

  return (
    <Suspense fallback={<p>Loading feed...</p>}>
      <div className={`${styles.rootWrapper}`}>
        <Spacer size="medium"></Spacer>
        <Typography size={"large"} text={"フォームサンプル"}></Typography>
        <Spacer size="medium"></Spacer>
        <div className={`${styles.horizontalWrapper}`}>
          <div className={`${styles.labelFrameWrapper}`}>
            <div className={`${styles.adjustmentLabelWrapper}`}>
              <Typography size={"medium"} text={"メール"}></Typography>
            </div>
          </div>
          <div className={`${styles.textfieldFrameWrapper}`}>
            <div className={`${styles.adjustmentTextfieldWrapper}`}>
              <TextField
                type={"mail"}
                id={"mail"}
                name={"mail"}
                placeholder={"example@gmail.com"}
                handleOnBlur={handleMailOnBlur}
                isValid={isMailValid}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.horizontalWrapper}`}>
          <div className={`${styles.labelFrameWrapper}`}>
            <div className={`${styles.adjustmentLabelWrapper}`}>
              <Typography size={"medium"} text={"パスワード"}></Typography>
            </div>
          </div>
          <div className={`${styles.textfieldFrameWrapper}`}>
            <div className={`${styles.adjustmentTextfieldWrapper}`}>
              <TextField
                type={"password"}
                id={"password"}
                name={"password"}
                placeholder={"password"}
                handleOnBlur={handlePasswordOnBlur}
                isValid={isPasswordValid}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.horizontalWrapper}`}>
          <div className={`${styles.labelFrameWrapper}`}>
            <div className={`${styles.adjustmentLabelWrapper}`}>
              <Typography size={"medium"} text={"名前"}></Typography>
            </div>
          </div>
          <div className={`${styles.textfieldFrameWrapper}`}>
            <div className={`${styles.adjustmentTextfieldWrapper}`}>
              <TextField
                type={"text"}
                id={"text"}
                name={"text"}
                placeholder={"お名前　太郎"}
                handleOnBlur={handleNameOnBlur}
                isValid={isNameValid}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.horizontalWrapper}`}>
          <div className={`${styles.labelFrameWrapper}`}>
            <div className={`${styles.adjustmentLabelWrapper}`}>
              <Typography size={"medium"} text={"電話番号"}></Typography>
            </div>
          </div>
          <div className={`${styles.textfieldFrameWrapper}`}>
            <div className={`${styles.adjustmentTextfieldWrapper}`}>
              <TextField
                type={"tel"}
                id={"tel"}
                name={"tel"}
                placeholder={"hoge"}
                handleOnBlur={handleTelOnBlur}
                isValid={isTelValid}
              />
            </div>
          </div>
        </div>
        <Spacer size="medium"></Spacer>
        <Link href={"/complete"}>
          <Button
            variant={"primary"}
            label="Click me"
            handleOnClick={handleOnClick}
            size="medium"
          />
        </Link>
      </div>
    </Suspense>
  );
};

export default Home;
