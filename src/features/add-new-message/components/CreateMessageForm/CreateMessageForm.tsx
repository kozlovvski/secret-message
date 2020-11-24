// templates/component/Component.tsx

import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import {
  CreateSMessagePayload,
  GenericSMessage,
} from "../../../../typings/secret-message";
import styles from "./CreateMessageForm.module.scss";
import firebase from "firebase";

export interface ICreateMessageFormProps {
  success: boolean;
  setNewMessage: (value: GenericSMessage) => void;
  children?: never;
}

/**
 * A component that accepts a
 *
 * @return the CreateMessageForm component
 */

const CreateMessageForm: React.FC<ICreateMessageFormProps> = ({
  success,
  setNewMessage,
}) => {
  const addMessage = firebase.functions().httpsCallable("createMessage");
  const [loading, setLoading] = useState(false);

  const finishHandler = async ({ message }: CreateSMessagePayload) => {
    setLoading(true);
    const newMessage: GenericSMessage = await addMessage({ message }).then(
      (res) => res.data
    );
    setNewMessage(newMessage);
    // TODO: add new message to redux store
    setLoading(false);
  };

  return success ? null : (
    <div
      className={styles["CreateMessageForm"]}
      data-testid="component-CreateMessageForm"
    >
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
