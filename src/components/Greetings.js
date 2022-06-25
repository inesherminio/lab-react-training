function Greetings(props) {
  const { lang, children } = props;
  let greetings = '';
  switch (lang) {
    case 'de':
      greetings = 'Hallo';
      break;
    case 'en':
      greetings = 'Hello';
      break;
    case 'es':
      greetings = 'Hola';
      break;
    case 'fr':
      greetings = 'Bonjour';
      break;
    default:
      greetings = 'Hey';
      break;
  }
  return (
    <div className="greetings">
      {greetings} {children}
    </div>
  );
}

export default Greetings;
