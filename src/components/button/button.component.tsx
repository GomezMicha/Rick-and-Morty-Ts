import React, { ButtonHTMLAttributes } from "react";
import "./button.style.css"

//
type ButtonProps = {
  onClick: React.MouseEventHandler<HTMLElement>;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, onClick }): JSX.Element => {
  return (
    <div className="button-wrapper" onClick={onClick}>
      <span>{children}</span>
    </div>
  );
};

export default Button;