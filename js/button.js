//import PropTypes from 'prop-types';

export function button(styles,idButton,content) {
    const buttonElement = document.getElementById(idButton);

    // Aplicar estilos al botón
    for (const property in styles) {
        buttonElement.style[property] = styles[property];
    };

    // Función que cambia el texto del botón al hacer clic
    const componentHTML = content;

    // Asociamos el evento de clic al botón
    document.getElementById(idButton).innerHTML = componentHTML;
};

// button.propTypes = {
//     styles:   PropTypes.object.isRequired,
//     idButton: PropTypes.string.isRequired,
//     content:  PropTypes.string.isRequired

// };

// button.defaultProps = {
//     styles: { 
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         height: "10vh",
//         outline: "2px solid blue",
//      },
//     idButton: "button",
//     content:  "Content"
// };


// button(
//     {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     height: "10vh",
//     outline: "2px solid orange"
//     },
//     "button",
//     "Hola mundo"
// )