// templates/layout/Layout.tsx
import React from "react";
import { Route, RouteProps, RouteChildrenProps } from "react-router-dom";

import styles from "./Default.module.scss";

/**
 * A layout component that wraps UI around a page. You probably want to use a `DefaultLayoutRoute` component inside a router and pass a page component into it
 *
 * @return the Default layout
 */

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <div className={styles["Default"]} data-testid="layout-Default">
      {children}
    </div>
  );
};

interface IDefaultLayoutRouteProps extends RouteProps {
  component: React.ComponentType<RouteChildrenProps>;
}

/**
 * A custom react-router-dom `Route` component that wraps UI around a page.
 *
 * Usage:
 * ```
 * <Switch>
 *   {...}
 *   <DefaultLayoutRoute component={DefaultPage} {...otherProps} />
 * </Switch>
 *
 * ```
 *
 * @return the Default layout
 */

export const DefaultLayoutRoute: React.FC<IDefaultLayoutRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    data-testid="layout-route-Default"
    {...rest}
    render={(matchProps) => (
      <DefaultLayout>
        <Component {...matchProps} />
      </DefaultLayout>
    )}
  />
);

export default DefaultLayout;
