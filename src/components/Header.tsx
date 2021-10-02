import React, { FC } from "react";
import styled from "styled-components";
import { AccessTime, HelpOutline, Search } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export const Header: FC = () => {
  const [user] = useAuthState(auth);
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar alt={user?.displayName} src={user?.photoURL} />
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <Search />
        <input placeholder="Search Himanshu's Slack" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  padding: 10px 0;
  background-color: var(--slack-color);
  color: white;
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;

const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: flex-end;
  flex: 0.3;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;

const HeaderSearch = styled.div`
  display: flex;
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: 0;
    background-color: transparent;
    color: white;
  }
`;
