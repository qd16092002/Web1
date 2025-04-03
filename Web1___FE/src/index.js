import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import VN from "antd/locale/vi_VN";
import { ConfigProvider } from "antd";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "app-redux/store";
import "assets/css/index.scss";
import "./input.css";
import { NextUIProvider } from "@nextui-org/react";
import { I18nProvider } from "@react-aria/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ConfigProvider locale={VN}>
        <NextUIProvider>
          <I18nProvider locale="en-GB">
            <App />
          </I18nProvider>
        </NextUIProvider>
      </ConfigProvider>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
