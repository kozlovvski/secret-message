// templates/component/Component.tsx
import { Button, Form, Input } from "antd";
import React from "react";
import { useSelector } from "react-redux";

import useAppDispatch from "hooks/useAppDispatch";
import { CreateSMessagePayload } from "typings/secret-message";
import { RootState } from "typings/store";
import { createMessage } from "features/add-new-message/new-message.slice";
import styles from "./CreateMessageForm.module.scss";

export interface ICreateMessageFormProps {
  children?: never;
}

/**
 * A component that accepts a
 *
 * @return the CreateMessageForm component
 */

const CreateMessageForm: React.FC<ICreateMessageFormProps> = () => {
  const { success, loading } = useSelector(
    (state: RootState) => state.newMessage
  );
  const dispatch = useAppDispatch();

  const finishHandler = (values: CreateSMessagePayload) => {
    dispatch(createMessage(values));
  };

  return success ? null : (
    <div
      className={styles["CreateMessageForm"]}
      data-testid="component-CreateMessageForm"
    >
      loading: {String(loading)}
      <Form layout="vertical" onFinish={finishHandler}>
        <Form.Item
          name="message"
          label="Your message"
          rules={[
            {
              required: true,
              whitespace: true,
              message: "This field is required.",
            },
          ]}
          required
          hasFeedback
        >
          <Input.TextArea
            data-testid="message-input"
            placeholder="Enter your secret..."
            rows={5}
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
            Create a secret link
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateMessageForm;
