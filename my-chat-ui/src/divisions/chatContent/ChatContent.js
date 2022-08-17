import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.CvB49ZstmHb_rOxmouzlFQHaLH&pid=Api&P=0&w=102&h=153",
      type: "",
      msg: "Hi Tom, How are you?",
    },
    {
      key: 2,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.lvEBbs-kwfupdOMxL2Mh1QHaKx&pid=Api&P=0&w=110&h=160",
      type: "other",
      msg: "I am fine. Thanks!",
    },
    {
      key: 3,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.lvEBbs-kwfupdOMxL2Mh1QHaKx&pid=Api&P=0&w=110&h=160",
      type: "other",
      msg: "As I'm a student I am searching for internship, and have few queries regarding it.",
    },
    {
      key: 4,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.CvB49ZstmHb_rOxmouzlFQHaLH&pid=Api&P=0&w=102&h=153",
      type: "",
      msg: "No issues with that! I'll help you out.",
    },
    {
      key: 5,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.lvEBbs-kwfupdOMxL2Mh1QHaKx&pid=Api&P=0&w=110&h=160",
      type: "other",
      msg: "That would be great sir!",
    },
    {
      key: 6,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.CvB49ZstmHb_rOxmouzlFQHaLH&pid=Api&P=0&w=102&h=153",
      type: "",
      msg: "Go ahead Tom, you can ask me anything.",
    },
    {
      key: 7,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.lvEBbs-kwfupdOMxL2Mh1QHaKx&pid=Api&P=0&w=110&h=160",
      type: "other",
      msg: "Do your company hire interns?.",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://tse4.mm.bing.net/th?id=OIP.CvB49ZstmHb_rOxmouzlFQHaLH&pid=Api&P=0&w=102&h=153",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://tse2.mm.bing.net/th?id=OIP.lvEBbs-kwfupdOMxL2Mh1QHaKx&pid=Api&P=0&w=110&h=160"
              />
              <p>Tom Holland</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}