import Header from "./components/Header";
import MainSection from "./components/MainSection";
import About from "./components/About";
import { Routes, Route } from "react-router";

//TODO: I want to create a routing system --> "/", "/about"
//Routes --> a component that contains all the Route components
export default function App() {
  return (
    <>
      <Header />
      <h1>SPA and routing</h1>
      <h2>Subtitle</h2>
      {/* routing system */}
      <Routes>
        {/* static paths */}
        <Route element={<MainSection />} path={"/"} />
        <Route element={<About />} path={"/about"} />
      </Routes>
    </>
  );
}
