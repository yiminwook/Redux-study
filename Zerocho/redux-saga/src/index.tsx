import { createRoot } from "react-dom/client";
import App from "@/App";
import { Provider } from "react-redux";
import appStore from "@/redux/store";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <Provider store={appStore}>
    <App />
  </Provider>
);

// reportWebVitals(console.log);
