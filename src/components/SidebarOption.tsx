import { useState, FC } from "react";
import styled from "styled-components";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { Close } from "@mui/icons-material";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";

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
  const [open, setOpen] = useState(false);
  const [channelName, setChannelName] = useState("");

  const closeBtnStyle: SxProps<Theme> = {
    position: "absolute",
    right: 10,
    top: 10,
    fontSize: 40,
    cursor: "pointer",
  };

  const addChannel = () => {
    console.log("open", open);
  };

  //pushes id to global store
  const selectChannel = () => {
    console.log("room selected");
  };

  return (
    <>
      <SidebarOptionContainer
        onClick={addChannelOption ? () => setOpen(true) : selectChannel}
      >
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
      <Modal
        open={open}
        onClose={(event, reason) =>
          reason === "backdropClick" ? setOpen(true) : setOpen(false)
        }
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEscapeKeyDown
      >
        <CreateChannelModal>
          <Close sx={closeBtnStyle} onClick={() => setOpen(false)} />
          <Typography variant="h5" mb={3}>
            Create a Channel
          </Typography>

          <TextField
            id="outlined-basic"
            label="Channel Name"
            variant="outlined"
            onChange={(e) => setChannelName(e.target.value)}
          />
          <CreateChannelButton variant="contained" onClick={() => addChannel()}>
            Create
          </CreateChannelButton>
        </CreateChannelModal>
      </Modal>
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

const CreateChannelModal = styled(Box)`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 170px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 24px;
  padding: 32px;
`;

const CreateChannelButton = styled(Button)`
  width: 120px;
  margin-top: 24px;
  align-self: center;
`;
