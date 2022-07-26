import React from "react";

import { ButtonContainer } from "./styles";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  className?: string;
  variant?: "primary" | "secondary" | "outlined" | undefined;
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  customStyles?: {};
}

export function Button({
  type,
  text,
  className = "",
  variant = "primary",
  onClick = () => {},
  disabled = false,
  isLoading = false,
  customStyles = {},
}: ButtonProps) {
  return (
    <ButtonContainer
      type={type || "button"}
      className={`btn btn-${variant} ${className}`}
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
