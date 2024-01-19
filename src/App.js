import React, { memo } from "react";
import GlobalButton from "@/components/GlobalButton.tsx";
import { Button } from "antd";
import { useRoutes } from "react-router-dom";
import routes from "./router";
import Footer from "./components/footer";
import Header from "./components/header";
const App = memo(() => {
  return (
    <div className="app">
      <Header></Header>
      <div className="content">
        {useRoutes(routes)}
        <Button type="primary">Button</Button>
        <GlobalButton></GlobalButton>
      </div>
      <Footer></Footer>
    </div>
  );
});

export default App;
