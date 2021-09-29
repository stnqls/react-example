const postList = [
  {
    no: 1,
    title: "1번 게시물",
    createDate: "2021-09-29",
    readCount: 7,
    recommandationCount: "3",
  },
  {
    no: 2,
    title: "2번 게시물",
    createDate: "2021-09-29",
    readCount: 7,
    recommandationCount: "3",
  },
  {
    no: 3,
    title: "3번 게시물",
    createDate: "2021-09-29",
    readCount: 7,
    recommandationCount: "3",
  },
  {
    no: 4,
    title: "4번 게시물",
    createDate: "2021-09-29",
    readCount: 7,
    recommandationCount: "3",
  },
  {
    no: 5,
    title: "5번 게시물",
    createDate: "2021-09-29",
    readCount: 7,
    recommandationCount: "3",
  },
];

const getPostByNo = (no) => {
  const array = postList.filter((x) => x.no === no);
  if (array.length === 1) {
    return array[0];
  }
  return null;
};

export { postList, getPostByNo };
