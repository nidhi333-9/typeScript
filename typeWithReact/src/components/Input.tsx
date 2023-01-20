import React from "react";
type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: InputProps) => {
  return (
    <div>
      <input
        onChange={props.handleChange}
        type="text"
        value={props.value}
      />
    </div>
  );
};

export default Input;
