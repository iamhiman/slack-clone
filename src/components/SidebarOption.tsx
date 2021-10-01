import React, { FC } from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";

interface ISidebarOption {
  Icon?: any;
  title: string;
}

export const SidebarOption: FC<ISidebarOption> = ({ Icon, title }) => {
  return (
    <>
      <SidebarOptionContainer>
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        ) : (
          <SidebarOptionChannel>
            <span>#</span>
            {title}
          </SidebarOptionChannel>
        )}
      </SidebarOptionContainer>
    </>
  );
};

const SidebarOptionContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  padding-left: 2px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
    background-color: #340e36;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: bold;

  > span {
    padding: 15px;
  }
`;
