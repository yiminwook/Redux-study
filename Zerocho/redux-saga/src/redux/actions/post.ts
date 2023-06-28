const addPost = (data: any) => {
  return {
    type: "ADD_POST",
    data,
  };
};

export { addPost };
