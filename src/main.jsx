import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import "./assets/fonts/lato/stylesheet.css";
import { Suspense } from "react";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Suspense fallback="...">
      <App />
    </Suspense>
  </Provider>
);
