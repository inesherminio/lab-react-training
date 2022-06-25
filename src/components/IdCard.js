/* Remeber react components should be built in jsx files */

function IdCard({picture, firstName, lastName, gender, height, birth}) {
  /* Start destructuring props, so that the code is easier to read. */
  return (
    <div className="idCard">
      <img src={picture} alt="personPicture" />
      <div className="personalInfo">
        <strong>first Name: </strong>
        {firstName}
        <br />
        <strong>last Name: </strong>
        {lastName}
        <br />
        <strong> Gender: </strong>
        {gender}
        <br />
        <strong>Height: </strong>
        {height}
        <br />
        <strong>Birth: </strong>
        {birth.toString()}
        <br />
      </div>
    </div>
  );
}

export default IdCard;
