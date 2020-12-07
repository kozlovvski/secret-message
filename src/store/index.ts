import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import rootReducer from "./root-reducer";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["auth/logInUser"],
      ignoredPaths: ["firebase", "firestore"],
    },
  }),
];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./root-reducer.ts", () => {
    const newRootReducer = require("./root-reducer").default;
    store.replaceReducer(newRootReducer);
  });
}

export default store;
