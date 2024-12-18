const commentThread = {
  id: 1,
  text: "This is the original comment",
  upvotes: 15,
  replies: [
    {
      id: 2,
      text: "This is a reply to the original comment",
      upvotes: 8,
      replies: [
        {
          id: 3,
          text: "This is a nested reply to the first reply",
          upvotes: 4,
          replies: [],
        },
        {
          id: 4,
          text: "Another nested reply to the first reply",
          upvotes: 3,
          replies: [],
        },
      ],
    },
    {
      id: 5,
      text: "This is another reply to the original comment",
      upvotes: 5,
      replies: [],
    },
  ],
};

function appendNode(commentObj, commentId, payload) {
  const { replies = [], id } = commentObj;
  if (commentId == id) {
    // console.log("if", commentObj);
    commentObj.replies = [
      ...replies,
      {
        ...payload,
      },
    ];
    return commentObj;
  } else {
    // console.log("else", commentObj);
    for (item of replies) {
      //   console.log("of", item);
      const res = appendNode(item, commentId, payload);
      commentObj = { ...res, ...commentObj };
    }
  }
  return commentObj;
}

console.log(
  appendNode(commentThread, 5, {
    text: "hello world",
    replies: [],
    upvotes: 0,
    id: Date.now(),
  })
);

// for (item in commentThread) {
//   console.log("item", item);
// }
