import React from "react";
import CommonTable from "../../components/CommonTable";
import CommonTableColumn from "../../components/CommonTableColumn";
import CommonTableRow from "../../components/CommonTableRow";

const PostList = (props) => {
  return (
    <React.Fragment>
      <CommonTable
        headersName={["글번호", "제목", "등록일", "조회수", "추천수"]}
      >
        <CommonTableRow>
          <CommonTableColumn>1</CommonTableColumn>
          <CommonTableColumn>1번 게시물</CommonTableColumn>
          <CommonTableColumn>2021-09-29</CommonTableColumn>
          <CommonTableColumn>10</CommonTableColumn>
          <CommonTableColumn>3</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>2</CommonTableColumn>
          <CommonTableColumn>2번 게시물</CommonTableColumn>
          <CommonTableColumn>2021-09-29</CommonTableColumn>
          <CommonTableColumn>10</CommonTableColumn>
          <CommonTableColumn>3</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>3</CommonTableColumn>
          <CommonTableColumn>3번 게시물</CommonTableColumn>
          <CommonTableColumn>2021-09-29</CommonTableColumn>
          <CommonTableColumn>10</CommonTableColumn>
          <CommonTableColumn>3</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>4</CommonTableColumn>
          <CommonTableColumn>4번 게시물</CommonTableColumn>
          <CommonTableColumn>2021-09-29</CommonTableColumn>
          <CommonTableColumn>10</CommonTableColumn>
          <CommonTableColumn>3</CommonTableColumn>
        </CommonTableRow>
        <CommonTableRow>
          <CommonTableColumn>5</CommonTableColumn>
          <CommonTableColumn>5번 게시물</CommonTableColumn>
          <CommonTableColumn>2021-09-29</CommonTableColumn>
          <CommonTableColumn>10</CommonTableColumn>
          <CommonTableColumn>3</CommonTableColumn>
        </CommonTableRow>
      </CommonTable>
    </React.Fragment>
  );
};

export default PostList;
