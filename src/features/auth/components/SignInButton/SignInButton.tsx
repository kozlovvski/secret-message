// templates/component/Component.tsx
import { Button } from "antd";
import { showAuthScreen } from "features/auth/auth.slice";
import useAppDispatch from "hooks/useAppDispatch";
import React from "react";

import styles from "./SignInButton.module.scss";

export interface ISignInButtonProps {
  className?: string;
  children?: never;
}

/**
 * A component that shows the AuthScreen
 *
 * @return the SignInButton component
 */

const SignInButton: React.FC<ISignInButtonProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const showScreenHandler = () => {
    dispatch(showAuthScreen());
  };

  return (
    <Button
      className={`${styles["SignInButton"]} ${className}`}
      data-testid="component-SignInButton"
      ghost
      onClick={showScreenHandler}
    >
      Sign in / Sign up
    </Button>
  );
};

export default SignInButton;
