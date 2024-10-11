import React from "react";
import { PRIMARY } from "../../../constants";
import {
  BASE_STYLE,
  SECONDARY_STYLE,
  PRIMARY_STYLE,
  DISABLED_STYLE,
} from "./ClassNames";
import { ButtonProps } from "../../../types";

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = PRIMARY,
}) => {
  const buttonStyle = disabled
    ? DISABLED_STYLE
    : variant === PRIMARY
    ? PRIMARY_STYLE
    : SECONDARY_STYLE;

  return (
    <button
      onClick={onClick}
      className={`${BASE_STYLE} ${buttonStyle}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
