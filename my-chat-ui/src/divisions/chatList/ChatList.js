import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image:
        "https://tse2.mm.bing.net/th?id=OIP.lvEBbs-kwfupdOMxL2Mh1QHaKx&pid=Api&P=0&w=110&h=160",
      id: 1,
      name: "Tom Holland",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://tse2.explicit.bing.net/th?id=OIP.LMWLF6Cbtrqg14-dV_EB4AHaK9&pid=Api&P=0&w=105&h=156",
      id: 2,
      name: "Andrew Cavill",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://tse1.mm.bing.net/th?id=OIP.HbJ3AgxT7uY9iK83rwGHMgHaLG&pid=Api&P=0&w=102&h=153",
      id: 3,
      name: "Leo Glass",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Elsa Black",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Kayley Mellor",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 7,
      name: "Hasan Mcculloch",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://tse4.mm.bing.net/th?id=OIP.ay7n1OcOeveepcoGPpIPMwHaLH&pid=Api&P=0&w=106&h=159",
      id: 8,
      name: "Robert Mckee",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSM6p4C6imkewkCDW-9QrpV-MMAhOC7GnJcIQ&usqp=CAU",
      id: 9,
      name: "Allen Woodley",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Manpreet Kaur",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}