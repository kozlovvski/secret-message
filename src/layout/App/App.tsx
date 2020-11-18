// templates/layout/Layout.tsx
import React from "react";
import { Route, RouteProps, RouteChildrenProps } from "react-router-dom";

import styles from "./App.module.scss";

/**
 * A layout component that wraps UI around a page. You probably want to use a `AppLayoutRoute` component inside a router and pass a page component into it
 *
 * @return the App layout
 */

const AppLayout: React.FC = ({ children }) => {
  return (
    <div className={styles["App"]} data-testid="layout-App">
      <div className={styles["content"]} data-testid="layout-App">
        {children}
      </div>
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
