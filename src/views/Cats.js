import { useEffect, useState } from "react";
import getRandomCatImage from "../services/getRandomCatImage";
const Cats = () => {
  const [catUrl, setCatUrl] = useState("");
  const obtainCat = async () => {
    const { data } = await getRandomCatImage();
    console.log(data[0].url);
    setCatUrl(data[0].url);
  };

  useEffect(() => {
    obtainCat();
  }, []);
  return (
    <div>
      <img alt="Something about cats here" src={catUrl} />
      <button onClick={obtainCat}>Obtain New Cat</button>
    </div>
  );
};

export default Cats;
