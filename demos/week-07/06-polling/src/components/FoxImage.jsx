//TODO: I want to render a random image of a fox at a specific interval of time
// polling --> "refresh" our content periodically
// state --> store the image url value ✅
// effect --> fetch data from external API ✅
// timer --> "refresh" periodically ✅

import { useState, useEffect } from "react";

export default function FoxImage() {
  //state for image url
  const [imgUrl, setImgUrl] = useState(null);

  //effect for API fetch
  useEffect(() => {
    async function fetchFox() {
      const response = await fetch("https://randomfox.ca/floof/");
      const data = await response.json();
      console.log(data);
      setImgUrl(data.image);
    }

    fetchFox();
    //interval to poll data regularly
    //timers are effects

    const pollingInterval = setInterval(fetchFox, 5000);

    //remember to clear the interval, so intervals do not stack and call the API multiple times simultaneously
    return () => clearInterval(pollingInterval);
  }, []);

  return (
    <>
      <h2>Fox Image</h2>
      <img src={imgUrl} alt="random fox" />
    </>
  );
}
