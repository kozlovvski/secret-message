// templates/component/Component.tsx
import { PlusOutlined, SelectOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  message as antdMessage,
  Tooltip,
  Typography,
} from "antd";
import { clearMessage } from "features/add-new-message/new-message.slice";
import { showAuthScreen } from "features/auth/auth.slice";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import React, { MouseEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  const dispatch = useAppDispatch();
  const { message } = useAppSelector((state) => state.newMessage);
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  // persist messageLink after `message` is deleted from redux store
  // to display link correctly in input
  const [messageLink, setMessageLink] = useState(
    `/message/${message?.id}` || ""
  );
  useEffect(() => {
    message && setMessageLink(`/message/${message.id}`);
  }, [message]);

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

  const showAS = () => {
    dispatch(showAuthScreen());
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
      <Tooltip
        placement="bottom"
        title="Click the link to copy it to clipboard!"
      >
        <Input
          onClick={inputClickHandler}
          value={`${window.location.host}${messageLink}`}
          data-testid="message-link"
        />
      </Tooltip>
      <div className={styles["buttons-flex"]}>
        <Link to={messageLink}>
          <Button
            className={styles["view-button"]}
            icon={<SelectOutlined />}
            ghost
            block
          >
            View your message
          </Button>
        </Link>
        <Button
          onClick={anotherMessageHandler}
          className={styles["create-button"]}
          type="primary"
          block
          icon={<PlusOutlined />}
          data-testid="create-another-button"
        >
          Create another message
        </Button>
      </div>
      {isLoggedIn === false && (
        <Typography.Paragraph className={featureStyles["footnote"]}>
          <span
            data-testid="footnote-link"
            className="underline-link"
            onClick={showAS}
          >
            Sign up
          </span>{" "}
          to track messages created by you and whether they have already been
          opened or not.
        </Typography.Paragraph>
      )}
    </div>
  );
};

export default CreateMessageConfirm;
