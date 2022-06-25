function IdCard(props) {
  return (
    <div className="idCard">
      <p> <img src={props.picture} alt="personPicture" /></p>
      <p><strong>First name: </strong> {props.firstName} </p> 
      <p><strong>Last name:</strong> {props.lastName} </p>
      <p><strong>Gender:</strong> {props.gender}</p>    
      <p><strong>Height:</strong> {props.height}</p>
      <p><strong>Birth:</strong> {props.birth.toDateString()}</p>
     
      </div>
    );
  }
  
  export default IdCard;