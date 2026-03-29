import Image from "next/image";
import clock from "@/../public/clock.jpg";

export default function LoadingComponent() {
  return (
    <>
      <Image src={clock} alt="loading clock" />
    </>
  );
}
