// templates/page/Page.tsx
import CreateMessageForm from "features/add-new-message/components/CreateMessageForm/CreateMessageForm";
import useAppSelector from "hooks/useAppSelector";
import React from "react";
import { RouteChildrenProps } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import cssTransitionClasses from "test/cssTransitionClasses";

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
  const { success } = useAppSelector((state) => state.newMessage);

  return (
    <div className={styles["CreateMessage"]} data-testid="page-CreateMessage">
      <CSSTransition
        in={!success}
        timeout={300}
        classNames={cssTransitionClasses(styles, "form-animation")}
      >
        <CreateMessageForm className={styles["form-animation"]} />
      </CSSTransition>
    </div>
  );
};

export default CreateMessagePage;
