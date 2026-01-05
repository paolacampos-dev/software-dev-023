function ImageItem({ src, alt }) {
  return (
    <div className="image-wrap">
      <img src={src} alt={alt} />
      <p>{alt}</p>
    </div>
  );
}

export default ImageItem;

// props = {src="", alt=""}
