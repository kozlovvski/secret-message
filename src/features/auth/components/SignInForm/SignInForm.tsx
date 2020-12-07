// templates/component/Component.tsx
import { Button, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Store } from "antd/lib/form/interface";
import { signInAction } from "features/auth/auth.slice";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import React, { useEffect } from "react";

import styles from "./SignInForm.module.scss";

export interface ISignInFormProps {
  children?: never;
}

/**
 * A component that <EDIT THIS>
 *
 * @return the SignInForm component
 */

const SignInForm: React.FC<ISignInFormProps> = () => {
  const {
    signIn: { loading, success },
  } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [form] = useForm();

  const finishHandler = ({ email, password }: Store) => {
    dispatch(signInAction({ email, password }));
  };

  useEffect(() => {
    form.resetFields();
  }, [success]);

  return (
    <div className={styles["SignInForm"]} data-testid="component-SignInForm">
      <Form
        form={form}
        layout="vertical"
        onFinish={finishHandler}
        data-testid="form"
      >
        <Form.Item
          label="E-mail address"
          name="email"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "This field is required",
            },
            {
              type: "email",
              message: "This is not a valid email",
            },
          ]}
          required
          hasFeedback
        >
          <Input data-testid="email-input" placeholder="john.doe@gmail.com" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "This field is required",
            },
          ]}
          required
          hasFeedback
        >
          <Input
            type="password"
            data-testid="password-input"
            placeholder="••••••••"
          />
        </Form.Item>
        <Form.Item>
          <Button
            loading={loading}
            type="primary"
            block
            htmlType="submit"
            data-testid="submit-button"
          >
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignInForm;
