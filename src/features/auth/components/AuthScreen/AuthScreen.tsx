// templates/component/Component.tsx
import { CloseOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { hideAuthScreen } from "features/auth/auth.slice";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import React from "react";

import AuthScreenTitle from "../AuthScreenTitle/AuthScreenTitle";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";
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

  const { authScreen } = useAppSelector((state) => state.auth);

  const hideScreenHandler = () => {
    dispatch(hideAuthScreen());
  };

  return (
    <div
      className={`${styles["AuthScreen"]} ${className}`}
      data-testid="component-AuthScreen"
    >
      <Row className={styles["content"]}>
        <Col span={24} sm={{ span: 7 }}>
          <AuthScreenTitle className={styles["title"]} />
        </Col>
        <Col span={24} sm={{ span: 15, offset: 2 }}>
          {{ signUp: <SignUpForm />, signIn: <SignInForm /> }[authScreen]}
        </Col>
      </Row>
      <CloseOutlined
        className={styles["close-button"]}
        onClick={hideScreenHandler}
      />
    </div>
  );
};

export default AuthScreen;
