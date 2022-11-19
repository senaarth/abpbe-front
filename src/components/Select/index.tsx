import React from "react";

import { Container } from "./styles";

type Option = {
  label: string;
  value: string;
};

interface SelectProps {
  customStyles?: {};
  options?: Option[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (e) => void;
  value: string;
  text?: string;
}

export function Select({
  customStyles = {},
  options = [],
  onChange = () => {},
  value,
  text,
}: SelectProps) {
  return (
    <Container style={customStyles}>
      {!!text && <span>{text}</span>}
      <select name="Select" id="" onChange={(e) => onChange(e)} value={value}>
        {options.map((option) => {
          return (
            <option key={option?.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
}
