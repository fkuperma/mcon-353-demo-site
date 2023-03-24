import "./chat.css";
import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/use-interval";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [inputChat, setInputChat] = useState("");
  const [inputUserName, setInputUserName] = useState("");
  const [buttonHovered, setButtonHovered] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        console.log("chats:");
        console.log(data);

        setChats(data.Items);
      });
  }

  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }

  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("messages:");
        console.log(data);

        setMessages(data.Items);
      });
  }
  function postMessage() {
    if (currentChat != null) {
      const message = {
        chatId: currentChat.id, // required, must be an existing chat id
        username: inputUserName, // required // change to pick own UN
        text: inputMessage, // required
      };

      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(message),
      });

      setInputMessage("");
    } else {
      console.log("cannot post a message because currentChat is null");
    }
  }
  function onMessageInput(event) {
    setInputMessage(event.target.value);
  }

  function onUserNameInput(event) {
    setInputUserName(event.target.value);
  }

  function postChat() {
    const chat = {
      name: inputChat, // required
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
      },
      body: JSON.stringify(chat),
    });

    setInputChat("");
  }
  function onChatInput(event) {
    setInputChat(event.target.value);
  }

  useEffect(() => {
    getChats();
  }, []);

  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    5000,
    currentChat && currentChat.id
  );

  return (
    <div className="full">
      <br></br>
      <div>
        <h1>MY CHATS</h1>
        <div style={{ display: "flex" }}>
          <div className="border">
            <Box
              component="form"
              sx={{
                "& > :not(style)": {
                  m: 1,
                  width: "25ch",
                  float: "right",
                  marginRight: "1rem",
                },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="User Name"
                defaultValue="User Name"
                variant="standard"
                onInput={onUserNameInput}
                value={inputUserName}
                color="secondary"
                InputProps={{ style: { fontSize: "24px" } }}
              />
            </Box>

            <p
              style={{
                marginLeft: "1rem",
                fontFamily: "sans-serif",
                fontSize: "1.3rem",
              }}
            >
              Enter a New Chat or Select From The Current List of Chats:
              <hr class="underline" />
            </p>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: "1",
                    width: "25ch",
                    marginLeft: "1rem",
                  },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="standard-basic"
                  label="New Chat"
                  defaultValue="New Chat"
                  variant="standard"
                  onInput={onChatInput}
                  value={inputChat}
                  color="secondary"
                  sx={{ paddingRight: "60px" }}
                  InputProps={{ style: { fontSize: "15px" } }}
                />
              </Box>
              <div
                className="addButton"
                style={{
                  position: "absolute",
                  left: "14rem",
                  paddingLeft: "1rem",
                }}
              >
                <IconButton
                  onClick={() => postChat()}
                  edge="end"
                  color="secondary"
                  sx={{
                    bgcolor: buttonClicked ? "secondary.main" : "",
                    color: buttonClicked ? "#fff" : "",
                    "&:hover": {
                      bgcolor: buttonHovered ? "secondary.light" : "",
                      color: buttonClicked ? "#fff" : "",
                    },
                    "&:active": {
                      bgcolor: buttonClicked ? "secondary.dark" : "",
                    },
                  }}
                  onMouseEnter={() => setButtonHovered(true)}
                  onMouseLeave={() => setButtonHovered(false)}
                  onMouseDown={() => setButtonClicked(true)}
                  onMouseUp={() => setButtonClicked(false)}
                >
                  <AddIcon />
                </IconButton>
                <div
                  className="dropdown-menu"
                  style={{ marginLeft: "1rem", paddingLeft: "1rem" }}
                >
                  <FormControl style={{ width: "170px" }}>
                    <InputLabel id="chat-select-label" color="secondary">
                      Chats
                    </InputLabel>
                    <Select
                      labelId="chat-select-label"
                      id="chat-select"
                      color="secondary"
                      textColor="secondary"
                      value={currentChat ? currentChat.id : ""}
                      onChange={(e) =>
                        setChat(
                          chats.find((chat) => chat.id === e.target.value)
                        )
                      }
                    >
                      {chats.map((chat) => (
                        <MenuItem key={chat.id} value={chat.id}>
                          {chat.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>
            </div>

            <br></br>
            <br></br>
            <div className="messageHeader">
              <hr
                style={{
                  border: "none",
                  borderBottom: "2px solid purple",
                }}
              />
              <h2
                style={{
                  display: "inline-block",
                  margin: "0 0 0 1rem",
                }}
              >
                {currentChat && currentChat.name} Messages
              </h2>
              <hr
                style={{
                  border: "none",
                  borderBottom: "2px solid purple",
                }}
              />
              <div
                className="messages"
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {messages
                  .slice()
                  .reverse()
                  .map((message) => (
                    <div
                      key={message.id}
                      style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        paddingLeft: ".6rem",
                        paddingRight: ".6rem",
                        alignItems:
                          message.username === inputUserName
                            ? "flex-end"
                            : "flex-start",

                        marginTop: ".8rem",
                      }}
                    >
                      <div
                        style={{
                          backgroundColor:
                            message.username === inputUserName
                              ? "#800080"
                              : "#f1f0f0",
                          color:
                            message.username === inputUserName
                              ? "#fff"
                              : "#000",
                          borderRadius: ".5rem",
                          border: "1px solid #6A0DAD",
                          padding: "0.5rem .5rem",
                          maxWidth: "80%",
                        }}
                      >
                        <strong>{message.username}</strong>: {message.text}
                      </div>
                    </div>
                  ))}
                <br></br>
                <br></br>
              </div>

              <div
                style={{
                  display: "flex",
                  backgroundColor: "#f1f0f0",
                }}
              >
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-basic"
                    label={
                      inputUserName
                        ? "Type to Chat..."
                        : "Enter a User Name to Enable Chat"
                    }
                    defaultValue="Type to Chat..."
                    variant="standard"
                    onInput={onMessageInput}
                    value={inputMessage}
                    color="secondary"
                    disabled={!inputUserName}
                  />
                </Box>
                <div className="sendButton">
                  <IconButton
                    onClick={() => postMessage()}
                    edge="end"
                    color="secondary"
                    size="large"
                    sx={{
                      bgcolor: buttonClicked ? "secondary.main" : "",
                      color: buttonClicked ? "#fff" : "",
                      "&:hover": {
                        bgcolor: buttonHovered ? "secondary.light" : "",
                        color: buttonClicked ? "#fff" : "",
                      },
                      "&:active": {
                        bgcolor: buttonClicked ? "secondary.dark" : "",
                      },
                    }}
                    onMouseEnter={() => setButtonHovered(true)}
                    onMouseLeave={() => setButtonHovered(false)}
                    onMouseDown={() => setButtonClicked(true)}
                    onMouseUp={() => setButtonClicked(false)}
                  >
                    <SendIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div class="fab">
        <Box sx={{ "& > :not(style)": { m: 1 } }}>
          <Fab aria-label="like" color="secondary">
            <FavoriteIcon />
          </Fab>
        </Box>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
