//We are breaking this route to show if our error page is working

export default function RollercoastersShopPage() {
  throw new Error(
    "There is an error, rollercoaster off the rails! Probably some server stuff",
  );
  return (
    <>
      <h1>Shop</h1>
      <h2>Don&apos;t get dizzy looking at these incredible prices!</h2>
    </>
  );
}
