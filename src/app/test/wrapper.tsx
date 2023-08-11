"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "../_components/Button";
import Input from "../_components/Input";
import checked from "./useChecked";

export default function Wrapper() {
  const router = useRouter();
  const props = [
    {
      id: "email",
      name: "email",
      type: "email",
      autoComplete: "email",
      required: true,
      handleOnChange: (e: React.ChangeEvent<HTMLInputElement>): void =>
        setEmail(e.target.value),
    },
    {
      id: "password",
      name: "password",
      type: "password",
      autoComplete: "current-password",
      required: true,
      handleOnChange: (e: React.ChangeEvent<HTMLInputElement>): void =>
        setPassword(e.target.value),
    },
  ];

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const buttonOnClick = (): void => {
    const result = checked(email, password);
    if (result) {
      router.push("/");
    }
  };
  return (
    <>
      <Input props={props}></Input>
      <Button label={"次へ"} buttonOnClick={buttonOnClick}></Button>
    </>
  );
}
