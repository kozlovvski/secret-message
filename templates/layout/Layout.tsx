// templates/layout/Layout.tsx
import React from "react";
import { Route, RouteProps, RouteChildrenProps } from "react-router-dom";

import styles from "./TemplateName.module.scss";

/**
 * A layout component that wraps UI around a page. You probably want to use a `TemplateNameLayoutRoute` component inside a router and pass a page component into it
 *
 * @return the TemplateName layout
 */

const TemplateNameLayout: React.FC = ({ children }) => {
  return (
    <div className={styles["TemplateName"]} data-testid="layout-TemplateName">
      {children}
    </div>
  );
};

interface ITemplateNameLayoutRouteProps extends RouteProps {
  component: React.ComponentType<RouteChildrenProps>;
}

/**
 * A custom react-router-dom `Route` component that wraps UI around a page.
 *
 * Usage:
 * ```
 * <Switch>
 *   {...}
 *   <TemplateNameLayoutRoute component={TemplateNamePage} {...otherProps} />
 * </Switch>
 *
 * ```
 *
 * @return the TemplateName layout
 */

export const TemplateNameLayoutRoute: React.FC<ITemplateNameLayoutRouteProps> = ({
  component: Component,
  ...rest
}) => (
  <Route
    data-testid="layout-route-TemplateName"
    {...rest}
    render={(matchProps) => (
      <TemplateNameLayout>
        <Component {...matchProps} />
      </TemplateNameLayout>
    )}
  />
);

export default TemplateNameLayout;
