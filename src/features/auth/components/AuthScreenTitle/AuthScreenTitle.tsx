// templates/component/Component.tsx
import Title from "antd/lib/typography/Title";
import { changeAuthScreen } from "features/auth/auth.slice";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import React from "react";
import { ValidAuthscreen } from "typings/user";

import styles from "./AuthScreenTitle.module.scss";

export interface IAuthScreenTitleProps {
  children?: never;
  className?: string;
}

/**
 * A component that handles authScreen state changing
 *
 * @return the AuthScreenTitle component
 */

const AuthScreenTitle: React.FC<IAuthScreenTitleProps> = ({
  className = "",
}) => {
  const dispatch = useAppDispatch();
  const authScreenHandlerFactory = (newScreen: ValidAuthscreen) => () =>
    dispatch(changeAuthScreen(newScreen));

  const { authScreen } = useAppSelector((state) => state.auth);
  return (
    <Title
      data-testid="component-AuthScreenTitle"
      className={`${styles["title"]} ${className}`}
    >
      <span
        data-testid="sign-in-title"
        className={authScreen == "signIn" ? styles["active"] : ""}
        onClick={authScreenHandlerFactory("signIn")}
      >
        Sign&nbsp;in
      </span>
      <span data-testid="or-title" className={styles["title__or"]}>
        or
      </span>
      <span
        data-testid="sign-up-title"
        className={authScreen == "signUp" ? styles["active"] : ""}
        onClick={authScreenHandlerFactory("signUp")}
      >
        Sign&nbsp;up
      </span>
    </Title>
  );
};

export default AuthScreenTitle;
