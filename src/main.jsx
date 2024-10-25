import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "./redux/store/store";
import { Provider } from "react-redux";
import "./assets/fonts/lato/stylesheet.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
