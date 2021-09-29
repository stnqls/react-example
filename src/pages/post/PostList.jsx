import React from "react";

const PostList = (props) => {
  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>제목</th>
            <th>등록일</th>
            <th>조회수</th>
            <th>추천수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>첫번째 게시글</td>
            <td>2020-09-29</td>
            <td>6</td>
            <td>3</td>
          </tr>
          <tr>
            <td>2</td>
            <td>두번째 게시글</td>
            <td>2020-09-29</td>
            <td>6</td>
            <td>3</td>
          </tr>
          <tr>
            <td>3</td>
            <td>게시글3</td>
            <td>2020-09-29</td>
            <td>6</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default PostList;
