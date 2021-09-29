import React from "react";
import Trading from "../pages/Trading";
import TradingMethod from "../pages/TradingMethod";
import Free from "../pages/Free";
import "./TabMenu.css";

const menuList = {
  0: <Trading />,
  1: <TradingMethod />,
  2: <Free />,
};

class TabMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 0,
    };
    this.changeMenu = this.changeMenu.bind(this);
  }

  render() {
    return (
      <div className="wrap">
        <div className="menuBar">
          <ul className="tabs">
            <li
              className={`${this.state.menu === 0 ? "active" : ""}`}
              onClick={() => this.changeMenu(0)}
            >
              트레이딩
            </li>
            <li
              className={`${this.state.menu === 1 ? "active" : ""}`}
              onClick={() => this.changeMenu(1)}
            >
              매매분석법
            </li>
            <li
              className={`${this.state.menu === 2 ? "active" : ""}`}
              onClick={() => this.changeMenu(2)}
            >
              자유게시판
            </li>
          </ul>
        </div>
        <div className="contentArea">{menuList[this.state.menu]}</div>
      </div>
    );
  }
  changeMenu = (menuIndex) => {
    this.setState({ menu: menuIndex });
  };
}

export default TabMenu;
