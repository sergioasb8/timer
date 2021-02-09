import React from 'react'; 
import '../Display.css';

function DisplayList (props) {
    return (
        // estilos en linea -> style... solo para darle estilo a ese tag
        <ul className="counter" style={{flexDirection: 'column'}}>
            {/* we use parenthesis instead of keys because the parenthesis works as
            a return fro the arrow function */}
            {props.itemList.map(item => (
                // when we are actualizating an array we must refer to the item
                // with a key (remember the key must be unic)
                <li key={item.id}>{item.name}</li>
                ) )}
        </ul>
    )
}

export default DisplayList;