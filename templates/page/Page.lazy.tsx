// templates/page/Page.lazy.tsx

import React, { lazy, Suspense } from "react";
import { RouteChildrenProps } from "react-router-dom";

const TemplateNameComponent = lazy(() => import("./TemplateName"));

interface ITemplateNamePageProps extends RouteChildrenProps {
  children?: never;
}

/**
 * A lazy version of TemplateName page which should be used inside react-router-dom `Route` component.
 * It doesn't accept children.
 *
 * @example
 * ```
 * <Switch>
 *   {...}
 *   <Route component={LazyTemplateNamePage} {...otherProps} />
 * </Switch>
 *
 * ```
 *
 * @param props props inhereted from react-router-dom `Route` component
 *
 * @return a lazy version of the TemplateName page component
 */

const LazyTemplateNamePage: React.FC<ITemplateNamePageProps> = (props) => (
  <Suspense data-testid="suspense" fallback={null}>
    <TemplateNameComponent {...props} />
  </Suspense>
);

export default LazyTemplateNamePage;
