// templates/component/Component.tsx
import { Button, Form, Input } from "antd";
import { RuleObject } from "antd/lib/form";
import { useForm } from "antd/lib/form/Form";
import { Store } from "antd/lib/form/interface";
import { signUpAction } from "features/auth/auth.slice";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import React, { ChangeEvent, useEffect, useState } from "react";

import styles from "./SignUpForm.module.scss";

export interface ISignUpFormProps {
  children?: never;
}

/**
 * A component that <EDIT THIS>
 *
 * @return the SignUpForm component
 */

const SignUpForm: React.FC<ISignUpFormProps> = () => {
  const {
    signUp: { loading, success },
  } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [formPassword, setFormPassword] = useState("");
  const [form] = useForm();

  const finishHandler = ({ email, password, displayName }: Store) => {
    dispatch(signUpAction({ email, password, displayName }));
  };

  useEffect(() => {
    form.resetFields();
  }, [success]);

  const passwordChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist();
    setFormPassword(e.target.value);
  };

  const confirmPasswordValidator = (rule: RuleObject, value?: string) =>
    value && value.trim().length > 0 && value === formPassword
      ? Promise.resolve()
      : Promise.reject("Passwords don't match");

  return (
    <div className={styles["SignUpForm"]} data-testid="component-SignUpForm">
      <Form
        form={form}
        layout="vertical"
        onFinish={finishHandler}
        data-testid="form"
      >
        <Form.Item
          label="Your name"
          name="displayName"
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
          <Input data-testid="name-input" placeholder="John Doe" />
        </Form.Item>
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
            onChange={passwordChangeHandler}
            type="password"
            data-testid="password-input"
            placeholder="••••••••"
          />
        </Form.Item>

        <Form.Item
          label="Confirm password"
          name="confirm_password"
          rules={[
            {
              validator: confirmPasswordValidator,
            },
          ]}
          required
          hasFeedback
        >
          <Input
            type="password"
            data-testid="confirm-password-input"
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
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
