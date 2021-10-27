import { render } from "react-dom";
import { CookiesProvider } from "react-cookie";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <CookiesProvider>
    <App />
  </CookiesProvider>,
  rootElement
);
