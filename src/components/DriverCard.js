function DriverCard(props) {
  console.log(props);
  /* let rating = Number(props.rating);
  let points = ''; */
  return (
    <div className="driverCard">
      <img src={props.img} alt="" />
      <div className="driverContent">
        <h2>{props.name}</h2>
        <p>{props.rating < 4.9 ? '★★★★☆' : '★★★★★'}</p>
        <p>
          {props.car.model} {props.car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
