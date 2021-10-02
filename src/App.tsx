import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Chat } from "./components/Chat";

const App: FC = () => {
  return (
    <div>
      <Router>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Chat />
            </Route>
          </Switch>
        </AppBody>
      </Router>
    </div>
  );
};

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
