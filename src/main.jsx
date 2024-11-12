import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import store, { persistor } from "./redux/store/store";
import { Provider } from "react-redux";
import "./assets/fonts/lato/stylesheet.css";
import { PersistGate } from "redux-persist/integration/react";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
