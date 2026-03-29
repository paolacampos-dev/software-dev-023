//TODO: implement a complex theme to my App
//- colourblind theme
//- light theme
//- dark theme
//- dyslexia-friendly theme

//Save our classes in state, so we can provide them to every component in our app

import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  //we have moved all this to the ThemeContext.jsx file

  // const [light, setLight] = useState("light");
  // const [dark, setDark] = useState("dark");
  // const [colourblind, setColourblind] = useState("colourblind");
  // const [dyslexia, setDyslexia] = useState("dyslexia");

  // const [style, setStyle] = useState({
  //   light: "light",
  //   dark: "dark",
  //   colourblind: "colourblind",
  //   dyslexia: "dyslexia",
  // });

  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
}
