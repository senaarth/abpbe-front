import React from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  className: string;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  customStyles?: {};
}

export function Button({
  type,
  text,
  className,
  onClick,
  disabled = false,
  isLoading = false,
  customStyles = {},
}: ButtonProps) {
  return (
    <ButtonContainer
      type={type || "button"}
      className={className}
      onClick={() => onClick()}
      disabled={disabled}
      style={customStyles}
    >
      {isLoading
        ? // TODO loading animation
          ""
        : text}
    </ButtonContainer>
  );
}
