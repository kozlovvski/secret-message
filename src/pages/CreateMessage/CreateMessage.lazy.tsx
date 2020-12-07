// templates/page/Page.lazy.tsx

import React, { lazy, Suspense } from "react";
import { RouteChildrenProps } from "react-router-dom";

export const CreateMessageComponent = lazy(() => import("./CreateMessage"));

interface ICreateMessagePageProps extends RouteChildrenProps {
  children?: never;
}

/**
 * A lazy version of CreateMessage page which should be used inside react-router-dom `Route` component.
 * It doesn't accept children.
 *
 * @example
 * ```
 * <Switch>
 *   {...}
 *   <Route component={LazyCreateMessagePage} {...otherProps} />
 * </Switch>
 *
 * ```
 *
 * @param props props inhereted from react-router-dom `Route` component
 *
 * @return a lazy version of the CreateMessage page component
 */

const LazyCreateMessagePage: React.FC<ICreateMessagePageProps> = (props) => (
  <Suspense data-testid="suspense" fallback={null}>
    <CreateMessageComponent {...props} />
  </Suspense>
);

export default LazyCreateMessagePage;
