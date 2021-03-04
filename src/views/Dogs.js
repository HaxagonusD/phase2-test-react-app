import { useEffect, useState } from "react";
import getRandomDogImage from "../services/getRandomDogImage";
const Dogs = () => {
  const [dogUrl, setDogUrl] = useState("");
  const obtainDog = async () => {
    const { data } = await getRandomDogImage();
    console.log(data);
    setDogUrl(data.message);
  };
  useEffect(() => {
    obtainDog();
  }, []);

  return (
    <div>
      <img src={dogUrl} alt="Something about dogs here" />
      <button onClick={obtainDog}>Obtain new dog</button>
    </div>
  );
};

export default Dogs;
