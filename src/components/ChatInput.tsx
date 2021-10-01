import React, { useState, FC } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

export const ChatInput: FC = () => {
  const [input, setInput] = useState("");

  const sendMessage = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("input", input);
    setInput("");
  };

  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={"Message"}
        />
        <Button hidden type="submit" onClick={sendMessage} />
      </form>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div`
  padding: 45px;
  position: sticky;
  bottom: 0;
  background-color: white;

  > form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > form > input {
    position: fixed;
    bottom: 15px;
    width: 65%;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
