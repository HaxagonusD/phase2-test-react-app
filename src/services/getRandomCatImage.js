import axios from "axios";

const getRandomCatImage = async () => {
  const apiKey = "3dbb62cb-cf52-495d-82a7-fda55bea59e7";
  const url = `https://api.thecatapi.com/v1/images/search`;
  return await axios.get(`${url}?api_key=${apiKey}`);
};

export default getRandomCatImage;
