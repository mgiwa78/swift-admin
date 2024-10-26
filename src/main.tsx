import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppRoutes } from "./router/AppRoutes.tsx";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.ts";
import { SocketProvider } from "./hooks/useSocket.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <SocketProvider>
        <AppRoutes />
      </SocketProvider>
    </PersistGate>
  </Provider>
);
