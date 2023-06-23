import ReactDOM from "react-dom/client";
import App from "@/App";
import { StoreProvider } from "@/Context";
import "@/index.css";

// import reportWebVitals from "@/reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
// reportWebVitals();
