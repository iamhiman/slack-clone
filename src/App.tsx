import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

const App: FC = () => {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
      </AppBody>
    </>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
