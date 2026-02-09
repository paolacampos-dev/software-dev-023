//TODO: add a reducer function to contain all of our state possible updates
// we will add the reducer function here, so it can interact with the state

//import useReducer
import { createContext, useContext, useReducer } from "react";

//declare a reducer function first to contain our coditional logic (which, before the refactoring, is in the HeroSection)

//the state parameter represents our state value
//the action parameter contains a property called type. Type will store a state update value
//state and action are objects
//please, write them in the same order!

function themeReducer(state, action) {
  //conditional logic to update the value of the theme state
  //if statement or switch...case
  //the return keyword breaks the execution of the code; we do not need the break keyword
  switch (action.type) {
    case "light":
      return { theme: (state.theme = "light") };
    case "dark":
      return { theme: (state.theme = "dark") };
    case "colourblind":
      return { theme: (state.theme = "colourblind") };
    case "dyslexia":
      return { theme: (state.theme = "dyslexia") };
    default:
      return { theme: (state.theme = "light") };
  }
}

// switch (action.type) {
//   case "light":
//   case "dark":
//   case "colourblind":
//   case "dyslexia":
//     return { theme: action.type };
//   default:
//     return { theme: (state.theme = "light") };
// }

const ThemeContext = createContext("light");

export function ThemeProvider({ children }) {
  //replace our useState hook with a useReducer hook
  //dispatch is how we are going to trigger the state update --> we will specify which update depending on the action type

  // const [theme, setTheme] = useState("light");
  const [state, dispatch] = useReducer(themeReducer, { theme: "" });

  //update the value prop to be state and dispatch
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
