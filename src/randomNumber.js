const getRandomNumber = (min, max) => {
  const number = Math.floor(Math.random() * (max - min) + min);
  return number;
};

export default getRandomNumber;
