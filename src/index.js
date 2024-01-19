import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

// 重置css
import "normalize.css";
import App from "./App";
import { ConfigProvider } from "antd";
import "@/assets/css/index.less";
// store
import store from "./store";
import { Provider } from "react-redux";
import { LightTheme } from "./assets/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>

  // </React.StrictMode>
  //   {/* 异步加载 */}
  // {/* fallback 可以传入组件 */}
  <Suspense fallback="loading">
    <Provider store={store}>
      {/* style-components 自定义主题色 */}
      <ThemeProvider theme={LightTheme}>
        <HashRouter>
          {/* antd的主题 */}
          <ConfigProvider
          // theme={{
          //   // algorithm: theme.darkAlgorithm,
          //   algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
          // }}
          >
            <App />
          </ConfigProvider>
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 项目搭建
// 1.配置@别名 @=> ./src : webpack
// 问题：react脚手架隐藏webpack
// 解决一: npm run eject
// 解决二: craco => create-react-app config
