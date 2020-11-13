// templates/page/Page.tsx

import React from "react";
import { RouteChildrenProps } from "react-router-dom";

import styles from "./Home.module.scss";

interface IHomePageProps extends RouteChildrenProps {
  children?: undefined;
}

/**
 * A page component which should be used inside react-router-dom `Route` component.
 * It doesn't accept children. If this component has many dependencies,
 * you probably want to use a lazy version of it. See `LazyHomePage` in `./Home.lazy.tsx
 *
 * Usage:
 * ```
 * <Switch>
 *   {...}
 *   <Route component={HomePage} {...otherProps} />
 * </Switch>
 *
 * ```
 *
 * @param props props inhereted from react-router-dom `Route` component
 *
 * @return the Home page component
 */

const HomePage: React.FC<IHomePageProps> = ({ history, location, match }) => {
  return (
    <div className={styles["Home"]} data-testid="page-Home">
      <h1>Home page</h1>
    </div>
  );
};

export default HomePage;
