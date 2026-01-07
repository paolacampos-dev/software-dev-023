function Snack({ item }) {
  return (
    <div>
      <h3>
        {item.name} by {item.manufacturer}
      </h3>
      <p>{item.year}</p>
    </div>
  );
}

export default Snack;
