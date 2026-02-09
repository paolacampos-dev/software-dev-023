//TODO: I want to use the themes in this component
import { useTheme } from "../context/ThemeContext";

import TextSection from "./TextSection";

export default function HeroSection() {
  //destructure the values in my provider
  const { theme, setTheme } = useTheme();
  console.log(theme);

  return (
    <div className={theme}>
      <h1>Title</h1>
      <img src="#" alt="hero-img" />
      <TextSection />
      <button
        className={theme}
        onClick={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Change theme from light to dark
      </button>
      <button
        className={theme}
        onClick={() => {
          setTheme(theme === "light" ? "colourblind" : "light");
        }}
      >
        Change theme from light to colourblind
      </button>
      <button
        className={theme}
        onClick={() => {
          setTheme(theme === "light" ? "dyslexia" : "light");
        }}
      >
        Change theme from light to dyslexia friendly
      </button>
    </div>
  );
}
