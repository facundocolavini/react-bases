import { useEffect, useState } from "react";

type Props = {}
type Coprds = {
  x: number,
  y: number
}
export function Message({}: Props) {

  const [coords, SetCoords] = useState<Coprds>({ x:0, y:0 })

  useEffect(() => {

    // Listener
    const onMouseMove = ({ x, y }: { x: number, y: number }) => {
      SetCoords({ x, y })
    };
    window.addEventListener('mousemove', onMouseMove); //
  
    return () => {
      // Remover listener
      // window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify( coords )}
        </>
    )
}