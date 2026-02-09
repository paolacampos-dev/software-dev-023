//TODO: set up a context to store and manage our theme state

//import context tools
import { createContext, useContext, useState } from "react";

//declare all your relevant state in your context file --> we will condense all of this variables into our theme state in the provider

// const [light, setLight] = useState("light");
// const [dark, setDark] = useState("dark");
// const [colourblind, setColourblind] = useState("colourblind");
// const [dyslexia, setDyslexia] = useState("dyslexia");

//declare context
// we need to declare a variable to name our context and give it an initial value
const ThemeContext = createContext("light");

//We need to provide our context to our whole app! --> provider
//in the provider function, I will set up the elements I want to provide to our app
//we need a placeholder in our provider to represent our app at this level --> children
export function ThemeProvider({ children }) {
  //declare our state in here --> we are condensin all our state and making it available to our ThemeProvider
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

//(optional) custom hook that will allow us to access all the values stored in state (this state is part of context)
//you need to call the useContext hook before you can use the values stored in context
export function useTheme() {
  return useContext(ThemeContext);
}

//from this point on, my context is fully implemented! I can now import useTheme wherever I need to access the values in my context
