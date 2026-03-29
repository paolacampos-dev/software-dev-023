//TODO: store all my providers (optional)
//- we can use this file if we are expanding our context with multiple context files
//- this is not necessary, but it helps if you are app is set to scale up

//?example of a complex context set-up with multiple providers

// import { ThemeProvider } from "./context/ThemeContext";
// import { UsersProvider } from "./context/UsersContext";
// import { LikesProvider } from "./context/LikesContext";

// export function Providers({ children }) {
//   return (
//     <ThemeProvider>
//       <UsersProvider>
//         <LikesProvider>{children}</LikesProvider>
//       </UsersProvider>
//     </ThemeProvider>
//   );
// }

import { ThemeProvider } from "./context/ThemeContext";

export function Providers({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
