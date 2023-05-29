import { useState } from "react";
import { Button } from "react-bootstrap";

const HolaMundo = ({ nuevoMensaje }) => {
  const [msj, setMsj] = useState(" ");
  return (
    <div className="text-center">
      <h1>
        Hello {nuevoMensaje}
        {msj}!
      </h1>
      <Button variant="success" onClick={() => setMsj("(from changed state)")}>
        Click here to see changed State!
      </Button>
    </div>
  );
};

export default HolaMundo;
