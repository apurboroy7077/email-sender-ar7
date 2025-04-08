const wait = (miliseconds: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("");
    }, miliseconds);
  });
};

export default wait;
