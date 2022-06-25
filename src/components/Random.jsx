

export default function Random({min, max}) {
  return (
    <div className="greeting-box">
      {/* For cleanup purposes, you could save your random code into a variable and use it in your p tag */}
      <p className="greeting-text"> Random value between 1 and 6 => {Math.round(Math.random()*(max-min)+min)} </p>
      <br />
    </div>
  )
}
