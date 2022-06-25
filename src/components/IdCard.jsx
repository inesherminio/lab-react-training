/* Do not forget that you should create React components in a jsx file, not js */

//rfc shorcut to create react function component
export default function IdCard({birth, firstName, gender, height, lastName, picture}) {
/* Great job destructuring the props. Makes it much easier to read the code afterwards */
  return (
    <div className="id-card">
        <div className="card-img">
          <img className="profile-img" src={picture} alt="card profile " />
        </div>
        <div className="body-text">
          <p className="card-text"><span className="bolded">First name:</span> {firstName} </p>
          <p className="card-text"><span className="bolded">Last name:</span>  {lastName} </p>
          <p className="card-text"><span className="bolded"> Gender:</span>  {gender} </p>
          <p className="card-text"><span className="bolded"> Height:</span>  {height} </p>
          <p className="card-text"><span className="bolded"> Birth:</span>  {birth.toUTCString().substring(0,16)}</p>
        </div>

    </div>
  )
}
