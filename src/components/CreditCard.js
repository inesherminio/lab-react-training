function CreditCard(props) {
  const sliceNum = props.number.slice(-4);
  const styleCard = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`,
  };
  return (
    <div className="creditCard" style={styleCard}>
      <p>{props.type}</p>
      <p>•••• •••• •••• {sliceNum}</p>
      <p>
        {props.expirationMonth}/{props.expirationYear} {props.bank}
      </p>
      <p>{props.owner}</p>
    </div>
  );
}

export default CreditCard;
