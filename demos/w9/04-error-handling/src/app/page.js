import Image from "next/image";
//import from public
import rollercoasterImg from "@/../public/assets/rollercoaster.jpg";

export default function HomePage() {
  return (
    <>
      <h1>Rollercoasters! Hooray!</h1>
      <Image
        src={
          "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt={"rollercoaster"}
        width={2400}
        height={1789}
      />
      <Image src={rollercoasterImg} alt={"rollercoaster"} placeholder="blur" />
    </>
  );
}
