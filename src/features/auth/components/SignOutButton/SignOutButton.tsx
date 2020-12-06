// templates/component/Component.tsx
import "firebase/auth";

import { Button } from "antd";
import firebase from "firebase-instance";
import React from "react";

import styles from "./SignOutButton.module.scss";

export interface ISignOutButtonProps {
  className?: string;
  children?: never;
}

/**
 * A component that logs out the user
 *
 * @return the SignInButton component
 */

const SignOutButton: React.FC<ISignOutButtonProps> = ({ className }) => {
  const signOutHandler = () => {
    firebase.auth().signOut();
  };

  return (
    <Button
      className={`${styles["SignOutButton"]} ${className}`}
      data-testid="component-SignOutButton"
      ghost
      onClick={signOutHandler}
    >
      Sign out
    </Button>
  );
};

export default SignOutButton;
