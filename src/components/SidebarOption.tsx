import React, { FC } from "react";
import styled from "styled-components";

interface ISidebarOption {
  Icon?: any;
  title: string;
  addChannelOption?: boolean;
}

export const SidebarOption: FC<ISidebarOption> = ({
  Icon,
  title,
  addChannelOption,
}) => {
  return (
    <>
      <SidebarOptionContainer>
        {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
        {Icon ? (
          <h3>{title}</h3>
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

  > h3 {
    font-weight: 500;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;

  > span {
    padding: 15px;
  }
`;
