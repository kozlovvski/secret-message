// templates/component/Component.tsx
import { CloseOutlined } from "@ant-design/icons";
import { hideAuthScreen } from "features/auth/auth.slice";
import useAppDispatch from "hooks/useAppDispatch";
import React from "react";

import styles from "./AuthScreen.module.scss";

export interface IAuthScreenProps {
  children?: never;
  className?: string;
}

/**
 * A component that displays components allowing user to sign in or out
 *
 * @return the AuthScreen component
 */

const AuthScreen: React.FC<IAuthScreenProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const hideScreenHandler = () => {
    dispatch(hideAuthScreen());
  };
  return (
    <div
      className={`${styles["AuthScreen"]} ${className}`}
      data-testid="component-AuthScreen"
    >
      <CloseOutlined
        className={styles["close-button"]}
        onClick={hideScreenHandler}
      />
      <h1>AuthScreen component</h1>
    </div>
  );
};

export default AuthScreen;
