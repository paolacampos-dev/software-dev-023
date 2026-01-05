function Navbar() {
  return (
    <>
      <nav>
        <a href="https://google.com">Google</a>
        <a href="https://react.dev">React Dev</a>
      </nav>
      <p>This is part of the Navbar component</p>
      <p>
        Notice how it appears twice on the page, because we used it in Header
        AND Footer
      </p>
    </>
  );
}

export default Navbar;
