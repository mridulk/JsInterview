const addComments = (uuid, title, commentArr) => {
  let res = [];
  for (let i in commentArr) {
    const { id, content, comments } = commentArr[i];
    let value = commentArr[i];
    if (id == uuid) {
      console.log("matched item", commentArr[i]);
      value = {
        ...value,
        comments: [
          {
            id: Date.now(),
            content: title,
            comments: [],
          },
          ...value.comments,
        ],
      };
      console.log("computedvalue", value);
    } else if (value?.comments && value?.comments?.length > 0) {
      let temp = addComments(uuid, title, value.comments);
      value = {
        ...value,
        comments: [...temp],
      };
    }
    res.push(value);
  }
  return res;
};
const handleAddComments = (id, content) => {
  // console.log(id, content);
  let commentArr = JSON.parse(JSON.stringify(commentsData));
  const res = addComments(id, content, commentArr);
  console.log("main result", res);
  setCommentsData(res);
};
const deleteComments = (uuid, commentArr) => {
  for (let i = 0; i < commentArr.length; i++) {
    const value = commentArr[i];
    if (uuid === value.id) {
      commentArr.splice(i, 1);
      return true;
    }
    if (value.comments && value.comments?.length > 0) {
      let isdelete = deleteComments(uuid, value.comments);
      if (isdelete) {
        return true;
      }
    }
  }
  return false;
};
const handleDeleteComments = (id) => {
  let commentArr = JSON.parse(JSON.stringify(commentsData));
  console.log("delete id", id);
  const res = deleteComments(id, commentArr);
  console.log("main result deklte", res);
  setCommentsData(commentArr);
};
