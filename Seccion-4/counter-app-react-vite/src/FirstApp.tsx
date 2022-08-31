//Proptypes 
import PropTypes from 'prop-types'


// Variables

const newMessage : string ='Facundo';// No se rerenderiza
const newArray : Array<number> = [1,2,3,4,5,6,7,8,9];// No se rerenderiza
interface Message {
    message: string;
    title: string;
}
const msgObj: Message = {
    message: 'Hola Mundo',
    title: 'Facundo'
}
//Recomendado si no tiene una dependencia del componente dejar las funciones por fuera 
function sayHi(message:string): string{
        return message 
}


// Doble validacion si es que hay propTypes por eso hago las props opcionales ?
interface Titles {
    title?: string;
    subTitle?: string; 
    name?: string;
}

export const FirtsApp = ({title,subTitle, name}: Titles): JSX.Element => {
/*     if(!title) {
        throw new Error('El titulo no existe');
    } */
    
    return (
    <>
        <h1 data-testid="test-title"> {title} </h1>
        {/* <code>{ JSON.stringify(msgObj) }</code> */}
        <p>{subTitle}</p>
        <p>{subTitle}</p>
        <p>{name}</p>
    </>
  )
}

// PropTypes
FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired, // Si uso interfaces y propTypes estaria manejando 2 veces la validacion de props
}

//Default Propts entran antes de nuestro propTypes
FirtsApp.defaultProps = { // Si utilizo interface al poner valores default que no existen en mi interface dara un error
    //title: 'No hay titulo',
    subTitle: 'No hay subtitulo',
    name: 'Facundo Colavini'
}

