// templates/component/Component.tsx
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  message as antdMessage,
  Tooltip,
  Typography,
} from "antd";
import { clearMessage } from "features/add-new-message/new-message.slice";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import React, { MouseEvent } from "react";

import featureStyles from "../../common.module.scss";
import styles from "./CreateMessageConfirm.module.scss";

export interface ICreateMessageConfirmProps {
  children?: never;
  className?: string;
}

/**
 * A component that displays a created message
 *
 * @return the CreateMessageConfirm component
 */

const CreateMessageConfirm: React.FC<ICreateMessageConfirmProps> = ({
  className = "",
}) => {
  const { message } = useAppSelector((state) => state.newMessage);
  const dispatch = useAppDispatch();

  const anotherMessageHandler = () => {
    dispatch(clearMessage());
  };

  const inputClickHandler = (e: MouseEvent<HTMLInputElement>) => {
    e.persist();
    e.currentTarget.select();
    e.currentTarget.setSelectionRange(0, 99999);

    document.execCommand("copy");
    antdMessage.success("Link copied do clipboard!");
  };

  return (
    <div
      className={`${styles["CreateMessageConfirm"]} ${className} wrapper`}
      data-testid="component-CreateMessageConfirm"
    >
      <Typography.Title
        className={featureStyles["title"]}
        data-testid="congrats-title"
      >
        There you go!
      </Typography.Title>
      <Typography.Paragraph
        className={featureStyles["subtitle"]}
        data-testid="congrats-subtitle"
      >
        Your message was created. Copy the link below and share it!
      </Typography.Paragraph>
      <Tooltip title="Click the link to copy it to clipboard!">
        <Input
          onClick={inputClickHandler}
          disabled
          value={`${window.location.host}/message/${message?.id}`}
          data-testid="message-link"
        />
      </Tooltip>
      <Button
        onClick={anotherMessageHandler}
        type="primary"
        block
        icon={<PlusOutlined />}
        data-testid="create-another-button"
      >
        Create another message
      </Button>
      <Typography.Paragraph className={featureStyles["footnote"]}>
        Sign up to track messages created by you and whether they have already
        been opened or not.
      </Typography.Paragraph>
    </div>
  );
};

export default CreateMessageConfirm;
