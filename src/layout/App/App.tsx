// templates/layout/Layout.tsx
import { Button } from "antd";
import { showAuthScreen } from "features/auth/auth.slice";
import AuthScreen from "features/auth/components/AuthScreen/AuthScreen";
import useAppDispatch from "hooks/useAppDispatch";
import useAppSelector from "hooks/useAppSelector";
import React from "react";
import { Route, RouteChildrenProps, RouteProps } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import cssTransitionClasses from "test/cssTransitionClasses";

import styles from "./App.module.scss";

/**
 * A layout component that wraps UI around a page. You probably want to use a `AppLayoutRoute` component inside a router and pass a page component into it
 *
 * @return the App layout
 */

const AppLayout: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();
  const { isLoggedIn, showScreen } = useAppSelector((state) => state.auth);

  const showScreenHandler = () => {
    dispatch(showAuthScreen());
  };

  return (
    <div className={styles["App"]} data-testid="layout-App">
      <nav className={styles["header"]}>
        <h1 data-testid="logo">
          <img src="sm-icon.svg" alt="" />
          secret-message
        </h1>
        {isLoggedIn ? (
          <Button
            className={styles["toggle-button"]}
            ghost
            data-testid="sign-out"
          >
            Sign in / Sign up
          </Button>
        ) : (
          <Button
            className={styles["toggle-button"]}
            ghost
            onClick={showScreenHandler}
            data-testid="sign-in-up"
          >
            Sign in / Sign up
          </Button>
        )}
      </nav>
      <div className={styles["content"]} data-testid="layout-content">
        {children}
      </div>
      <CSSTransition
        in={showScreen}
        timeout={500}
        classNames={cssTransitionClasses(styles, "auth-screen")}
      >
        <AuthScreen className={styles["auth-screen"]} />
      </CSSTransition>
    </div>
  );
};

interface IAppLayoutRouteProps extends RouteProps {
  component: React.ComponentType<RouteChildrenProps>;
}

/**
 * A custom react-router-dom `Route` component that wraps UI around a page.
 *
 * Usage:
 * ```
 * <Switch>
 *   {...}
 *   <AppLayoutRoute component={AppPage} {...otherProps} />
 * </Switch>
 *
 * ```
 *
 * @return the App layout
 */

export const AppLayoutRoute: React.FC<IAppLayoutRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    data-testid="layout-route-App"
    {...rest}
    render={(matchProps) => (
      <AppLayout>
        <Component {...matchProps} />
      </AppLayout>
    )}
  />
);

export default AppLayout;
