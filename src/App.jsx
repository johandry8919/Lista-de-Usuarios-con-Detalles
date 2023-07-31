import { useEffect, useState } from "react";
import "./App.css";
import Fotter from "./components/layout/Fotter";

function App() {
  const [lisUsuario, setLisUsuario] = useState([]);
  const [detalle, setDetalle] = useState([]);
  const [detallemodale, setDetallemodale] = useState(false);

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

  // Componente funcional para mostrar los detalles de un usuario en el modal
  const Verdetalles = () => {
    return (
      <>
        <div className="cont text-center">
          <div className="modalDetalles card">
            <div className="card-title   ">
              <h2 className="">Detalle de usuario</h2>
              <button
                className="buttone text-end "
                onClick={() => setDetallemodale()} // Cierra el modal
              >
                x
              </button>
            </div>
            <div className="card-body">
              <p>nombre{detalle.name}</p>
              <p>apellido{detalle.username}</p>
              <p>website:{detalle.website}</p>
              <p>Telefono:{detalle.phone}</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  // Componente funcional para renderizar la tarjeta de cada usuario
  const Card = ({ cardt }) => {
    let valor = cardt;
    return (
      <>
        <div className="col-12 col-gl-6 col-md-4 mt-3">
          <div className="card">
            <div className="card-header">
              <h6>Nombre: {valor.name}</h6>
            </div>
            <div className="card-body">
              <ul className="">
                <li className="nav-link text-dark">
                  Apellido:{valor.username}
                </li>
                <li className="nav-link text-dark">Email:{valor.email}</li>
              </ul>

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

  // Se llama a la función para obtener la lista de usuarios cuando se carga la página
  useEffect(() => {
    fectUsuario();
  }, []);

  // Renderiza la lista de usuarios y el modal de detalles si corresponde
  return (
    <>
      <main className="container-fluid">
        <header className="heade">
          <h1 className="text-center">Lista de usuarios jsonplaceholder</h1>
        </header>

        <div className="row ">
          {lisUsuario.map((cardt) => (
            <Card key={cardt.id} cardt={cardt} />
          ))}
        </div>

        {detallemodale && <Verdetalles />} {/* Renderiza el modal si detallemodale es true */}

        <Fotter />
      </main>
    </>
  );
}

export default App;