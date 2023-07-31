import { useEffect, useState } from "react";
import "./App.css";
import Fotter from "./components/layout/Fotter";
import Swal from 'sweetalert2'
import Verdetalles from "./components/Verdetalles";

function App() {
  const [lisUsuario, setLisUsuario] = useState([]);
  const [detallemodale, setDetallemodale] = useState(false);
  const [detalle, setDetalle] = useState([]);

  // Función para obtener la lista de usuarios desde la API
  const fectUsuario = async () => {
    try {
      const fetUsuario = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await fetUsuario.json();
      setLisUsuario(data);
    } catch (error) {
      console.log(error);
    }
  };
// Función para obtener el detalle de un usuario en particular
  const detalleUsaer = async (id) => {
    try {
      const detalle = await fetch(
        "https://jsonplaceholder.typicode.com/users/" + id
      );
      const data = await detalle.json();
      setDetalle(data);
      setDetallemodale(true); // Abre el modal de detalles
    } catch (error) {
      console.log(error);
    }
  };

    // Se llama a la función para obtener la lista de usuarios cuando se carga la página
    useEffect(() => {
    fectUsuario();
  }, []);






  // Componente funcional para renderizar la tarjeta de cada usuario
  const Card = ({ cardt }) => {
    let valor = cardt;
    return (
      <>
        <div className="col-12 col-gl-6 col-md-4 mt-3 ">
          <div className="card ">
            <div className="card-header">
              <h6>Nombre: {valor.name}</h6>
            </div>
            <div className="card-body">
              <p> Apellido:{valor.username}</p>
              <p>Email:{valor.email}</p>
             
              <button
                onClick={() => detalleUsaer(valor.id)} // Muestra los detalles del usuario
                className="btn btn-info w-100"
              >
                Detalle
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };


  // Renderiza la lista de usuarios y el modal de detalles si corresponde
  return (
    <>
      <main className="container">
        <header className="heade">
          <h1 className="text-center animate__animated animate__fadeInLeft text-info">Lista del usuarios jsonplaceholder</h1>
        </header>

        <div className="row animate__animated animate__fadeIn ">
          {lisUsuario.map((cardt) => (
            <Card key={cardt.id} cardt={cardt} />
          ))}
        </div>

        {detallemodale && <Verdetalles detalle={detalle} />} {/* Renderiza el modal si detallemodale es true */}

        <Fotter />
      </main>
    </>
  );
}

export default App;