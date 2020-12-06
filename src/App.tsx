import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import useAuthStateChanged from "features/auth/hooks/useAuthStateChanged";

const App: React.FC = () => {
  useAuthStateChanged();

  return <Routes />;
};

const WrappedApp: React.FC = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default WrappedApp;
