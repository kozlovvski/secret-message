import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./root-reducer.ts", () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const newRootReducer = require("./root-reducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
