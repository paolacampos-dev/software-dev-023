import HeaderStyles from "./Header.module.css";
import PopoverComponent from "./PopoverComponent";

export default function Header() {
  return (
    <>
      <h1 className={HeaderStyles.h1}>Rollercoasters! Hooray!</h1>
      <PopoverComponent />
    </>
  );
}
