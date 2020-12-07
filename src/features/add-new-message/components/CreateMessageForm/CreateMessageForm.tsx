// templates/component/Component.tsx
import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { createMessage } from "features/add-new-message/new-message.slice";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import React from "react";
import { CreateSMessagePayload } from "typings/secret-message";

import styles from "./CreateMessageForm.module.scss";
import featureStyles from "../../common.module.scss";
import { useForm } from "antd/lib/form/Form";
import { showAuthScreen } from "features/auth/auth.slice";

export interface ICreateMessageFormProps {
  children?: never;
  className?: string;
}

/**
 * A component that handles new message creation
 *
 * @return the CreateMessageForm component
 */

const CreateMessageForm: React.FC<ICreateMessageFormProps> = ({
  className = "",
}) => {
  const { loading } = useAppSelector((state) => state.newMessage);
  const { isLoggedIn } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const [form] = useForm();

  const finishHandler = (values: CreateSMessagePayload) => {
    form.resetFields();
    dispatch(createMessage(values));
  };

  const showAS = () => {
    dispatch(showAuthScreen());
  };

  return (
    <div
      className={`${styles["CreateMessageForm"]} ${className} wrapper`}
      data-testid="component-CreateMessageForm"
    >
      <Typography.Title className={featureStyles["title"]}>
        Enter your secret message below
      </Typography.Title>
      <Typography.Paragraph className={featureStyles["subtitle"]}>
        You can enter a password, secret message or anything that needs to be
        secure
      </Typography.Paragraph>
      <Form
        form={form}
        layout="vertical"
        onFinish={finishHandler}
        data-testid="form"
      >
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
      {isLoggedIn === false && (
        <Typography.Paragraph
          className={`${featureStyles["footnote"]} ${styles["narrow"]}`}
        >
          <span className="underline-link" onClick={showAS}>
            Sign up
          </span>{" "}
          to track messages created by you and whether they have already been
          opened or not.
        </Typography.Paragraph>
      )}
    </div>
  );
};

export default CreateMessageForm;
