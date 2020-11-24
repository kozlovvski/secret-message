// templates/page/Page.tsx
import { Typography } from "antd";
import React from "react";
import { RouteChildrenProps } from "react-router-dom";

import CreateMessageForm from "../../features/add-new-message/components/CreateMessageForm/CreateMessageForm";
import styles from "./CreateMessage.module.scss";

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
  return (
    <div className={styles["CreateMessage"]} data-testid="page-CreateMessage">
      <Typography.Title>Enter your secret message below</Typography.Title>
      <Typography.Paragraph>
        You can enter a password, secret message or anything that needs to be
        secure
      </Typography.Paragraph>
      <CreateMessageForm />
    </div>
  );
};

export default CreateMessagePage;
