import LoadingComponent from "@/components/LoadingComponent";

export default function Loading() {
  //here we will render whatever content we want to show as our loading (icon, spinners, gifs, text...)
  return (
    <>
      <h1 className="text-amber-600">
        Loading the image gallery. It will take a sec...
        <LoadingComponent />
      </h1>
    </>
  );
}
