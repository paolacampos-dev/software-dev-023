//TODO: I want to use the themes in this component
import { useTheme } from "../context/ThemeContext";

import TextSection from "./TextSection";

export default function HeroSection() {
  //destructure the values in my provider
  const { state, dispatch } = useTheme();
  console.log(state);
  //dispatch specifies a type, and thanks to the reducer function, we can apply one of the cases in there

  return (
    <div className={state.theme}>
      <h1>Title</h1>
      <img src="#" alt="hero-img" />
      <TextSection />
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "light" }); //update the value of state to "light"
        }}
      >
        Change theme to light
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "dark" });
        }}
      >
        Change theme to dark
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "dyslexia" });
        }}
      >
        Change theme to dyslexia friendly
      </button>
      <button
        className={state.theme}
        onClick={() => {
          dispatch({ type: "colourblind" });
        }}
      >
        Change theme to colourblind friendly
      </button>
    </div>
  );
}
