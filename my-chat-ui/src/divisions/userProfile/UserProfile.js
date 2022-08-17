import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://tse4.mm.bing.net/th?id=OIP.CvB49ZstmHb_rOxmouzlFQHaLH&pid=Api&P=0&w=102&h=1538" />
          </div>
          <h4>Henry Holland</h4>
          <p>CEO & Founder at Highly Inc</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
           Highly Inc. is a multinational information technology services and consulting company headquartered in Cali, Columbia.
          </div>
        </div>
      </div>
    );
  }
}