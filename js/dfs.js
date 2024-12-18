const folderStructure = {
  id: 10,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 11,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 12,
          name: "index.html",
          isFolder: false,
          items: [],
        },
        {
          id: 13,
          name: "images",
          isFolder: true,
          items: [
            {
              id: 14,
              name: "logo.png",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 15,
      name: "src",
      isFolder: true,
      items: [
        {
          id: 16,
          name: "index.js",
          isFolder: false,
          items: [],
        },
        {
          id: 17,
          name: "styles",
          isFolder: true,
          items: [
            {
              id: 18,
              name: "app.css",
              isFolder: false,
              items: [],
            },
          ],
        },
        {
          id: 19,
          name: "components",
          isFolder: true,
          items: [
            {
              id: 20,
              name: "header.js",
              isFolder: false,
              items: [],
            },
            {
              id: 21,
              name: "footer.js",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
  ],
};
const recursiveFn = (folderArray, id, isFolder, name) => {
  //   console.log("folder array", folderArray);
  let res = [];
  if (!Array.isArray(folderArray) || folderArray.length <= 0) return;
  //   console.log("folder array", folderArray);
  for (item of folderArray) {
    console.log("ietm current", item, id);
    if (id == item.id) {
      console.log("id found", id);
      return {
        ...item,
        items: [
          ...item.items,
          {
            id: Date.now(),
            name,
            isFolder,
            items: [],
          },
        ],
      };
    } else {
      res = [
        ...res,
        {
          ...item,
          items: recursiveFn(item.items, id, isFolder, name),
        },
      ];
    }
  }
  return res;
};

const insertnode = (folderObject, id, isFolder, name) => {
  // check for root condition
  const currentId = folderObject?.id;
  if (currentId === id) {
    folderObject = {
      ...folderObject,
      items: [
        ...folderObject.items,
        {
          name,
          isFolder,
          id: Date.now(),
        },
      ],
    };
    return folderObject;
  }
  const items = recursiveFn(folderObject.items, id, isFolder, name);
  console.log("items", JSON.stringify(items));
  return {
    ...folderObject,
    items,
  };
};
//isfolder, folderId, Name
insertnode(folderStructure, 19, true, "content.js");
