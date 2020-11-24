// templates/page/Page.tsx

import React, { useMemo, useState } from "react";
import { RouteChildrenProps } from "react-router-dom";
import { Typography } from "antd";

import styles from "./CreateMessage.module.scss";
import CreateMessageForm from "../../components/CreateMessageForm/CreateMessageForm";
import { GenericSMessage } from "../../typings/secret-message";

interface ICreateMessagePageProps extends RouteChildrenProps {
  children?: undefined;
}

/**
 * A page component which should be used inside react-router-dom `Route` component.
 * It doesn't accept children. If this component has many dependencies,
 * you probably want to use a lazy version of it. See `LazyCreateMessagePage` in `./CreateMessage.lazy.tsx
 *
 * Usage:
 * ```
 * <Switch>
 *   {...}
 *   <Route component={CreateMessagePage} {...otherProps} />
 * </Switch>
 *
 * ```
 *
 * @param props props inhereted from react-router-dom `Route` component
 *
 * @return the CreateMessage page component
 */

const CreateMessagePage: React.FC<ICreateMessagePageProps> = ({
  history,
  location,
  match,
}) => {
  const [newMessage, setNewMessage] = useState<GenericSMessage>();
  const success = useMemo(() => newMessage !== undefined, [newMessage]);
  return (
    <div className={styles["CreateMessage"]} data-testid="page-CreateMessage">
      <Typography.Title>Enter your secret message below</Typography.Title>
      <Typography.Paragraph>
        You can enter a password, secret message or anything that needs to be
        secure
      </Typography.Paragraph>
      <CreateMessageForm success={success} setNewMessage={setNewMessage} />
    </div>
  );
};

export default CreateMessagePage;
