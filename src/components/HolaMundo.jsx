import { useState } from "react";

const HolaMundo = ({nuevoMensaje}) => {
    const [msj, setMsj] = useState(" ")
    return (
        <div className="text-center">
            <h1>Hello {nuevoMensaje}{msj}!</h1>
            <button variant="success" onClick={()=>setMsj("(from changed state)")}>Click here to see changed State!/</button>
        </div>
    );
};

export default HolaMundo;