// templates/component/Component.tsx
import { Button } from "antd";
import { showAuthScreen } from "features/auth/auth.slice";
import useAppDispatch from "hooks/useAppDispatch";
import React from "react";

import styles from "./ShowAuthButton.module.scss";

export interface IShowAuthButtonProps {
  className?: string;
  children?: never;
}

/**
 * A component that shows the AuthScreen
 *
 * @return the ShowAuthButton component
 */

const ShowAuthButton: React.FC<IShowAuthButtonProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const showScreenHandler = () => {
    dispatch(showAuthScreen());
  };

  return (
    <Button
      className={`${styles["ShowAuthButton"]} ${className}`}
      data-testid="component-ShowAuthButton"
      ghost
      onClick={showScreenHandler}
    >
      Sign in / Sign up
    </Button>
  );
};

export default ShowAuthButton;
