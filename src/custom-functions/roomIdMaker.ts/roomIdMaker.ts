type roomIdMakerType = () => string;

const roomIdMaker: roomIdMakerType = () => {
  const roomId = Math.floor(Math.random() * 10000).toString();
  return roomId;
};

export default roomIdMaker;
