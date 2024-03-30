import { useEffect, useState } from "react";
import axios from "axios";
import "./Diseño.css"
function Usuarios() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await axios.get("https://randomuser.me/api/");
    console.log(response);
    setProducts(response.data.results);
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  const reloadPage = () => {
    window.location.reload(); 
  };
  return (
    <div className="container">
      <h2>tabla usuarios</h2>
      {products?.map((data) => (
        <div className="container" key={data.login.uuid}>
          <img src={data.picture.large} alt="Avatar" />
          <div className="email">{data.name.first}</div>
          <div className="email">{data.email}</div>
          <button className="reload-button" onClick={reloadPage}>
            Recargar página
          </button>
        </div>
      ))}
    </div>
  );
}

export default Usuarios;