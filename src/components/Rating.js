/* Cool suggestion: 

let string = '★';
  string = string.repeat(numberOfStars).padEnd(5, '☆');

  With these 2 lines you dont need a switch case or anything that looks like that. Your code shrinks considerably.

*/

function Rating(props) {
  console.log(props);
  let rating = Number(props.children);
  let points = '';
  switch (rating) {
    case 0:
      points = '☆☆☆☆☆';
      break;
    case 1.49:
      points = '★☆☆☆☆';
      break;
    case 1.5:
      points = '★★☆☆☆';
      break;
    case 3:
      points = '★★★☆☆';
      break;
    case 4:
      points = '★★★★☆';
      break;
    case 5:
      points = '★★★★★';
      break;
    default:
      points = '☆☆☆☆☆';
      break;
  }

  return (
    <div className="Rating">
      <p>{points}</p>
    </div>
  );
}

export default Rating;
