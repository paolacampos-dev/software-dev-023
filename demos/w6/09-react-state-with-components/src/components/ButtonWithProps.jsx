function ButtonWithProps({ num, setNum }) {
  function handleClick() {
    setNum(num + 1);
  }

  return <button onClick={handleClick}>Click me! {num}</button>;
}

export default ButtonWithProps;
