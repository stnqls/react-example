import React, { useEffect, useState } from "react";
import CommonTable from "../../components/CommonTable";
import CommonTableColumn from "../../components/CommonTableColumn";
import CommonTableRow from "../../components/CommonTableRow";
import { postList } from "../../components/Data";

const PostList = (props) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(postList);
  }, []);

  return (
    <React.Fragment>
      <CommonTable
        headersName={["글번호", "제목", "등록일", "조회수", "추천수"]}
      >
        {dataList
          ? dataList.map((item, index) => {
              return (
                <CommonTableRow key={index}>
                  <CommonTableColumn>{item.no}</CommonTableColumn>
                  <CommonTableColumn>{item.title}</CommonTableColumn>
                  <CommonTableColumn>{item.createDate}</CommonTableColumn>
                  <CommonTableColumn>{item.readCount}</CommonTableColumn>
                  <CommonTableColumn>
                    {item.recommandationCount}
                  </CommonTableColumn>
                </CommonTableRow>
              );
            })
          : ""}
      </CommonTable>
    </React.Fragment>
  );
};

export default PostList;
