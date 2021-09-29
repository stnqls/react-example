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
  }
  render() {
    return (
      <div className="wrap">
        <div className="menuBar">
          <ul className="tabs">
            <li>트레이딩</li>
            <li>매매분석법</li>
            <li>자유게시판</li>
          </ul>
        </div>
        <div className="contentArea">{menuList[this.state.menu]}</div>
      </div>
    );
  }
}

export default TabMenu;
