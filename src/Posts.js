import React, { useState } from "react";
import "./posts.css";

const Posts = ({ posts }) => {
  const [toggle, setToggle] = useState(false);

  const toggleChange = (index) => {
    setToggle((prestate) => ({
      ...prestate,
      [index]: !prestate[index],
    }));
  };

  return (
    <thead className="board__head head">
      <tr>
        <td className="head__first head__row first">No</td>
        <td className="head__title head__row">제목</td>
        <td className="head__date head__row" colSpan="2">
          등록일자
        </td>
      </tr>

      {posts.map((post, index) => (
        <React.Fragment>
          <tr key={post.no} onClick={() => toggleChange(index)}>
            <td className="body__row body__first first">{post.no}</td>
            <td className="body__row body__title">{post.title}</td>
            <td className="body__row body__date">{post.date}</td>
            <td className="body__row">
              <img
                src={toggle[index] ? "arrowUp" : "arrowDown"}
                alt="arrowUp"
                className="arrow--up"
              />
            </td>
          </tr>
          <tr className={toggle[index] ? "" : "answer"}>
            <td className="answer__an" colSpan="4">
              {post.answer}
            </td>
          </tr>
        </React.Fragment>
      ))}
    </thead>
  );
};

export default Posts;
