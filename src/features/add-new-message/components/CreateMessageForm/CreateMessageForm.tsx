// templates/component/Component.tsx
import { Button, Form, Input, Typography } from "antd";
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
      className={`${styles["CreateMessageForm"]} wrapper`}
      data-testid="component-CreateMessageForm"
    >
      <Typography.Title className={styles["title"]}>
        Enter your secret message below
      </Typography.Title>
      <Typography.Paragraph className={styles["subtitle"]}>
        You can enter a password, secret message or anything that needs to be
        secure
      </Typography.Paragraph>
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
      <Typography.Paragraph className={styles["footnote"]}>
        The secret link will work only once. After that, your message is deleted
        forever.
      </Typography.Paragraph>
      <Typography.Paragraph
        className={`${styles["footnote"]} ${styles["narrow"]}`}
      >
        Sign up to track messages created by you and whether they have already
        been opened or not.
      </Typography.Paragraph>
    </div>
  );
};

export default CreateMessageForm;
