  // Componente funcional para mostrar los detalles de un usuario en el modal
const Verdetalles = ({detalle}) => {
    
    return (
      <>
        <div className="cont ">
          <div className="modalDetalles card animate__animated animate__fadeInDown">
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

  export default Verdetalles;