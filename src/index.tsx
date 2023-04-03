import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

///
import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store, { persistor } from "./redux/store";
// { persistor }
//
import { PersistGate } from "redux-persist/integration/react";
//

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter basename="layout03">
    <Provider store={store}>
      {/* - */}
      <PersistGate loading={"...Loag"} persistor={persistor}>
        <App />
      </PersistGate>
      {/* - */}
    </Provider>
  </HashRouter>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
