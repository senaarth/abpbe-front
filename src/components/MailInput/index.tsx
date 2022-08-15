import React from "react";
import { toast } from "react-toastify";

import { Button } from "../Button";

import { Wrapper } from "./styles";

interface MailInputProps {
  placeholder: string;
  onSubmit: () => void;
  btnText: string;
  onSuccess: string;
  onError: string;
  customStyles?: {};
}

export function MailInput({
  placeholder,
  onSubmit,
  btnText,
  onSuccess,
  onError,
  customStyles = {},
}: MailInputProps) {
  const [value, setValue] = React.useState("");
  const [isOnFocus, setIsOnFocus] = React.useState(false);
  const [isInvalid] = React.useState(false);

  async function handleSubmit() {
    try {
      onSubmit();
      toast(onSuccess, {
        type: "success",
        className: "success",
      });
    } catch {
      toast(onError, {
        type: "error",
        className: "error",
      });
    }
  }

  return (
    <Wrapper
      className={`${isOnFocus ? "focus" : ""} ${isInvalid ? "invalid" : ""}`}
      style={customStyles}
    >
      <input
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => setValue(target.value)}
        onFocus={() => setIsOnFocus(true)}
        onBlur={() => setIsOnFocus(false)}
      />
      <Button type="button" text={btnText} onClick={() => handleSubmit()} />
    </Wrapper>
  );
}
