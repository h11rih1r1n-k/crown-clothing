import React from "react";
import "./custom-button.styles.scss";

type CustomButtonTypes = {
  children: React.ReactNode,
  inverted?: Boolean,
  isGoogleSignIn? : Boolean,
  onClick?: () => void,
}

const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}: CustomButtonTypes) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
