"use client";

import Button from "../_components/clientComponents/Button";
import Typography from "../_components/Typography";
import TextField from "../_components/clientComponents/TextField";
import styles from "./styles.module.css";
import Spacer from "../_components/Spacer";
import useValidAndState from "../_hooks/useValidAndState";

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

  return (
    <div className={`${styles.rootContainer}`}>
      <Spacer size="large"></Spacer>
      <Typography size={"large"} text={"text"}></Typography>
      <Spacer size="large"></Spacer>
      <div className={`${styles.container}`}>
        <div className={`${styles.container2}`}>
          <div className={`${styles.container5}`}>
            <Typography size={"medium"} text={"メール"}></Typography>
          </div>
        </div>
        <div className={`${styles.container3}`}>
          <div className={`${styles.container4}`}>
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
      <div className={`${styles.container}`}>
        <div className={`${styles.container2}`}>
          <div className={`${styles.container5}`}>
            <Typography size={"medium"} text={"パスワード"}></Typography>
          </div>
        </div>
        <div className={`${styles.container3}`}>
          <div className={`${styles.container4}`}>
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
      <div className={`${styles.container}`}>
        <div className={`${styles.container2}`}>
          <div className={`${styles.container5}`}>
            <Typography size={"medium"} text={"名前"}></Typography>
          </div>
        </div>
        <div className={`${styles.container3}`}>
          <div className={`${styles.container4}`}>
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
      <div className={`${styles.container}`}>
        <div className={`${styles.container2}`}>
          <div className={`${styles.container5}`}>
            <Typography size={"medium"} text={"電話番号"}></Typography>
          </div>
        </div>
        <div className={`${styles.container3}`}>
          <div className={`${styles.container4}`}>
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
      <Button
        variant={"primary"}
        label="Click me"
        handleOnClick={() => console.log("Clicked")}
        size="medium"
      />
    </div>
  );
};

export default Home;
