function IdCard(props) {
  return (
    <div className="idCard">
      <img src={props.picture} alt="personPicture" />
      <div className="personalInfo">
        <strong>first Name: </strong>
        {props.firstName}
        <br />
        <strong>last Name: </strong>
        {props.lastName}
        <br />
        <strong> Gender: </strong>
        {props.gender}
        <br />
        <strong>Height: </strong>
        {props.height}
        <br />
        <strong>Birth: </strong>
        {props.birth.toString()}
        <br />
      </div>
    </div>
  );
}

export default IdCard;
