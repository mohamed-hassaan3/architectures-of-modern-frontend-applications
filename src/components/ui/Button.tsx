import React from "react";

const Button = ({
  children,
  size = "md",
  color = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button className={`${color} ${size} ${className} Button`} {...props}>
      {children}
    </button>
  );
};

export default Button;
