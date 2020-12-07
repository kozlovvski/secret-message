// templates/page/Page.lazy.tsx

import React, { lazy, Suspense } from "react";
import { RouteChildrenProps } from "react-router-dom";

const HomeComponent = lazy(() => import("./Home"));

interface IHomePageProps extends RouteChildrenProps {
  children?: never;
}

/**
 * A lazy version of Home page which should be used inside react-router-dom `Route` component.
 * It doesn't accept children.
 *
 * @example
 * ```
 * <Switch>
 *   {...}
 *   <Route component={LazyHomePage} {...otherProps} />
 * </Switch>
 *
 * ```
 *
 * @param props props inhereted from react-router-dom `Route` component
 *
 * @return a lazy version of the Home page component
 */

const LazyHomePage: React.FC<IHomePageProps> = (props) => (
  <Suspense data-testid="suspense" fallback={null}>
    <HomeComponent {...props} />
  </Suspense>
);

export default LazyHomePage;
