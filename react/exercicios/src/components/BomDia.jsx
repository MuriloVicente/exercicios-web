import { Fragment } from "react";

/* Uso de Fragment para mais de um elemento */
export default props =>
    <Fragment>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até Breve!</h2>
    </Fragment>

/* Uso de Array para mais de um elemento */
/* export default props => [
        <h1 key='h1'>Bom dia, {props.nome}!</h1>
        <h2 key='h2'>Até Breve!</h2>
    ] */

/* Uso de Div para mais de um elemento */
/* export default props =>
    <div>
        <h1>Bom dia, {props.nome}!</h1>
        <h2>Até Breve!</h2>
    </div> */