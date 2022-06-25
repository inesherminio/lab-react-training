function BoxColor(props) {
  const styleColor = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b}`,
  };

  return (
    <div style={styleColor} className="color">
      RGB({props.r}, {props.g}, {props.b})
    </div>
  );
}

export default BoxColor;
