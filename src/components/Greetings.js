/* Instead of using a ternary operator, you could use an if statement or switch case, because there are many possibilities.
Ternary operators, are more useful for cases where we have only 2 options 'this' or 'that' */

function Greetings(props) {
    const {lang, children} = props;
    return (
        <div>
            <p>{
                lang === "de" ? 'Hallo' 
                : lang === "fr" ?'Bonjour'
                    : lang === "pt" ?'Olá'
                        : lang === "es" ?'Hola'
                            :'Hello'} {children}!</p>
        </div>
    )
}

export default Greetings;