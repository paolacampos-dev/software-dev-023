import Header from "./components/Header";
import MainSection from "./components/MainSection";
import About from "./components/About";
import { Routes, Route } from "react-router";
import UserProfile from "./components/UserProfile";
import Staff from "./components/Staff";
import StaffMember from "./components/StaffMember";

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
        <Route element={<MainSection />} path={"/"} />
        <Route element={<About />} path={"/about"} />
        <Route element={<UserProfile />} path={"/profile/:userProfile"} />
        <Route element={<Staff />} path={"/staff"}>
          <Route element={<StaffMember />} path={":staffMember"} />
        </Route>
      </Routes>
    </>
  );
}
