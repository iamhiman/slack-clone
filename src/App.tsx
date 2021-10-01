import React, { FC } from "react";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Chat } from "./components/Chat";

const App: FC = () => {
  return (
    <>
      <Header />
      <AppBody>
        <Sidebar />
        <Chat />
      </AppBody>
    </>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
