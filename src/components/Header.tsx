import React, { FC } from "react";
import styled from "styled-components";
import { AccessTime, HelpOutline, Search } from "@mui/icons-material";

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar />
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <Search />
        <input placeholder="Search PAPAFAM" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div``;
const HeaderLeft = styled.div``;
const HeaderAvatar = styled.div``;
const HeaderRight = styled.div``;
const HeaderSearch = styled.div``;
