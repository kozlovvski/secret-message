// templates/component/Component.tsx
import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { createMessage } from "features/add-new-message/new-message.slice";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import React from "react";
import { CreateSMessagePayload } from "typings/secret-message";

import styles from "./CreateMessageForm.module.scss";
import featureStyles from "features/add-new-message/common.module.scss";

export interface ICreateMessageFormProps {
  children?: never;
  className?: string;
}

/**
 * A component that accepts a
 *
 * @return the CreateMessageForm component
 */

const CreateMessageForm: React.FC<ICreateMessageFormProps> = ({
  className = "",
}) => {
  const { loading } = useAppSelector((state) => state.newMessage);
  const dispatch = useAppDispatch();

  const finishHandler = (values: CreateSMessagePayload) => {
    dispatch(createMessage(values));
  };

  return (
    <div
      className={`${featureStyles["CreateMessageForm"]} ${className} wrapper`}
      data-testid="component-CreateMessageForm"
    >
      <Typography.Title className={featureStyles["title"]}>
        Enter your secret message below
      </Typography.Title>
      <Typography.Paragraph className={featureStyles["subtitle"]}>
        You can enter a password, secret message or anything that needs to be
        secure
      </Typography.Paragraph>
      <Form layout="vertical" onFinish={finishHandler} data-testid="form">
        <Form.Item
          name="message"
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
            icon={<EditOutlined />}
            htmlType="submit"
            data-testid="submit-button"
          >
            Create a secret link
          </Button>
        </Form.Item>
      </Form>
      <Typography.Paragraph className={featureStyles["footnote"]}>
        The secret link will work only once. After that, your message is deleted
        forever.
      </Typography.Paragraph>
      <Typography.Paragraph
        className={`${featureStyles["footnote"]} ${styles["narrow"]}`}
      >
        Sign up to track messages created by you and whether they have already
        been opened or not.
      </Typography.Paragraph>
    </div>
  );
};

export default CreateMessageForm;
