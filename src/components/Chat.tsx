import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import React, { FC } from "react";
import styled from "styled-components";
import { Message } from "./Message";

export const Chat: FC = () => {
  return (
    <ChatContainer>
      <ChatHeader>
        <ChatLeftHeader>
          <h4>#Room</h4>
          <StarBorderOutlined />
        </ChatLeftHeader>

        <ChatRightHeader>
          <p>
            <InfoOutlined />
            Details
          </p>
        </ChatRightHeader>
      </ChatHeader>
      <ChatMessages>
        <Message
          message="Message"
          timestamp="12:00 hrs"
          user="Himanshu Kashyap"
          userImage="https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"
        />
        <Message
          message="Message"
          timestamp="12:00 hrs"
          user="Himanshu Kashyap"
          userImage="https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"
        />
        <Message
          message="Message"
          timestamp="12:00 hrs"
          user="Himanshu Kashyap"
          userImage="https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"
        />
        <Message
          message="Message"
          timestamp="12:00 hrs"
          user="Himanshu Kashyap"
          userImage="https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"
        />
        <Message
          message="Message"
          timestamp="12:00 hrs"
          user="Himanshu Kashyap"
          userImage="https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"
        />
        <Message
          message="Message"
          timestamp="12:00 hrs"
          user="Himanshu Kashyap"
          userImage="https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"
        />
        <Message
          message="Message"
          timestamp="12:00 hrs"
          user="Himanshu Kashyap"
          userImage="https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"
        />
        <Message
          message="Message"
          timestamp="12:00 hrs"
          user="Himanshu Kashyap"
          userImage="https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"
        />
        <Message
          message="Message"
          timestamp="12:00 hrs"
          user="Himanshu Kashyap"
          userImage="https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"
        />
        <Message
          message="Message"
          timestamp="12:00 hrs"
          user="Himanshu Kashyap"
          userImage="https://vignette.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest?cb=20170628120149"
        />
      </ChatMessages>
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: scroll;
  margin-top: 60px;
`;

const ChatHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  position: sticky;
  top: 0;
  background-color: white;
`;

const ChatLeftHeader = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 20px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;

const ChatRightHeader = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;

const ChatMessages = styled.div``;
