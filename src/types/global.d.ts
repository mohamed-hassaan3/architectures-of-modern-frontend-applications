import React from "react";

export {};
declare global {
  type ButtonProps = {
    children: React.ReactNode;
    color: danger | transparent | primary;
    size: sm | md | lg;
    className?: string;
    type?: "reset" | "submit";
    onClick?: () => void
  };
}
