/* just a suggestion of a simpler solution:

let string = '★';
  string = string.repeat(numberOfStars).padEnd(5, '☆');

  This way, you can shorten your code by far. Imagine if stars were not until 5, but until 200... switch case would not be an option.
  Everytime you can, make it dynamic.
*/

const Rating = (props) => {
        let numberOfStars= Math.round(props.children);
        let stars = '';
        switch(numberOfStars){
            case 0:
            stars = '☆☆☆☆☆';
                break;
            case 1:
                stars = '★☆☆☆☆';
                break;
            case 2:
                stars = '★★☆☆☆';
                break;
            case 3:
                stars = '★★★☆☆';
                break;
            case 4:
                stars = '★★★★☆';
                break;
            case 5:
                stars = '★★★★★';
                break;
            default:
                stars = '';

        

    }

  return (
    <div className="stars-size driver">  {stars}</div>
  )
}

export default Rating