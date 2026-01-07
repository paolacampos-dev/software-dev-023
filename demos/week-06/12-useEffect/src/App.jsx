import { useState, useEffect } from "react";

// STEP 1: Get the data from an API - https://jsonplaceholder.typicode.com/posts
// STEP 2: Put that data into state
// STEP 3: Render the data on the page

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect(callBackFunction, dependancyArray)
  // when the page initally loads, it will run the callback function
  // it will NOT run when state changes
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    }
    getPosts();
  }, []);

  return (
    <>
      <h1>Fetching Data using useEffect</h1>
      {posts.map((post) => {
        return <p>{post.title}</p>;
      })}
    </>
  );
}

export default App;
