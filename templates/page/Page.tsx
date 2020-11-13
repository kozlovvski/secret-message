// templates/page/Page.tsx

import React from "react";
import { RouteChildrenProps } from "react-router-dom";

import styles from "./TemplateName.module.scss";

interface ITemplateNamePageProps extends RouteChildrenProps {
  children?: undefined;
}

/**
 * A page component which should be used inside react-router-dom `Route` component.
 * It doesn't accept children. If this component has many dependencies,
 * you probably want to use a lazy version of it. See `LazyTemplateNamePage` in `./TemplateName.lazy.tsx
 *
 * Usage:
 * ```
 * <Switch>
 *   {...}
 *   <Route component={TemplateNamePage} {...otherProps} />
 * </Switch>
 *
 * ```
 *
 * @param props props inhereted from react-router-dom `Route` component
 *
 * @return the TemplateName page component
 */

const TemplateNamePage: React.FC<ITemplateNamePageProps> = ({
  history,
  location,
  match,
}) => {
  return (
    <div className={styles["TemplateName"]} data-testid="page-TemplateName">
      <h1>TemplateName page</h1>
    </div>
  );
};

export default TemplateNamePage;
