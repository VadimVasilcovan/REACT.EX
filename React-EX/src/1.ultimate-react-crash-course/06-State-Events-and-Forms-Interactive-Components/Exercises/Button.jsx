export function ItemCardHolder({ data }) {
  return (
    <>
      {data.map((car) => (
        <li className="car-carddcolder" key={car.id}>
          <span>
            <h3> Manufacture: {car.manufacture}</h3>
            <h3> Model: {car.model}</h3>
          </span>
          <Button>display something</Button>
        </li>
      ))}
    </>
  );
}
export function Button({ children, onClick }) {
  return (
    <button className="button-Car" onClick={onClick}>
      {children}
    </button>
  );
}
