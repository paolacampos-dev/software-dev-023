//TODO: I want make this component artificially slow to pretend it takes a long time to render
async function delay(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default async function SlowComponent() {
  //artificial timer to make this component slow to render
  await delay(5000);
  return (
    <>
      <h1 className="text-sky-400">Very slow content</h1>
      <ul>
        <li>Large images</li>
        <li>High-resolution images</li>
        <li>Video</li>
        <li>Audio</li>
        <li>Media</li>
        <li>API data</li>
        <li>A page with loads of imported components</li>
        <li>3d models</li>
        <li>Heavy textures</li>
        <li>Websites hosting games</li>
        <li>Image gallery (shop, e-commerce...)</li>
      </ul>
    </>
  );
}
