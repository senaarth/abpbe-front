import React from "react";

import { InputContainer } from "./styles";

interface InputProps {
  onSubmit: () => void;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}

export function Input({ onSubmit, value, onChange }: InputProps) {
  return (
    <InputContainer>
      <input
        onKeyDown={(e) => e.key === "Enter" && onSubmit()}
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
      <button type="button" onClick={() => onSubmit()}>
        <img src="/images/lupa.png" alt="Ícone de lupa" />
      </button>
    </InputContainer>
  );
}
