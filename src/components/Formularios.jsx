import { useState } from "react";

// @flow 
 const Formularios = (props) => {

    const [onInput , setonInput] = useState('');


    const change = (e)=>{
        setonInput(e.target.value)

    }



    const onSubmit = (event)=>{
        event.preventDefault();
        props.setlist(onInput);
    }
    return (
        <div>
            <form onSubmit={onSubmit} action="">
            <input value={onInput} onChange={change} placeholder="agrega tu tareas" type="text" />
            <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default Formularios;