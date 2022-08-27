import React from "react";

import { Container } from "./styles";

interface InputProps {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  className: string;
  error?: string;
}

export function Input({
  id,
  label,
  placeholder,
  value,
  onChange,
  className,
  error = "",
}: InputProps) {
  return (
    <Container className={className}>
      <label htmlFor={`#${id}`}>{label}</label>
      <input
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={({ target }) => onChange(target.value)}
      />
      <p>{error}</p>
    </Container>
  );
}
