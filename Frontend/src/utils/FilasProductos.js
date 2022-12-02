import Cards from "../Components/cards";

export default function FilasProductos(obj) {
  return (
    <div className="d-flex justify-content-center col-sm-12 col-md-6 col-xl-4" style={{ height: "27vw" }}>
      <Cards titulo={obj.nombre} descripcion={obj.descripcion} valor={obj.precio} foto={obj.foto}></Cards>
    </div>
  );
}
