import React, { FC } from "react";
import styled from "styled-components";
import { FiberManualRecord, Create } from "@mui/icons-material";
import { Typography } from "@mui/material";

export const Sidebar: FC = () => {
  const roomStyle = {
    display: "flex",
    fontSize: "14px",
    alignItems: "center",
  };

  const iconStyle = {
    marginTop: "1px",
    marginRight: "2px",
    fontSize: "16px",
    color: "green",
    alignSelf: "baseline",
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            Himanshu's Slack
          </Typography>
          <Typography variant="subtitle2" sx={roomStyle}>
            <FiberManualRecord sx={iconStyle} />
            Himanshu Kashyap
          </Typography>
        </SidebarInfo>
        <Create />
      </SidebarHeader>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  overflow: scroll;
`;

const SidebarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SidebarInfo = styled.div`
  flex: 1;
`;
