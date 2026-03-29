import "./App.css";
import ImageItem from "./components/ImageItem";

function App() {
  return (
    <>
      <div className="gallery">
        <ImageItem src="kitten.jpg" alt="Kitten" />
        <ImageItem src="otter.jpg" alt="Sea Otter" />
        <ImageItem src="puppies.jpg" alt="Cute Puppies" />
        <ImageItem src="snowball-fight.jpg" alt="Snowball Fight" />
        <ImageItem src="snowman.png" alt="Snowman" />
      </div>
    </>
  );
}

export default App;
