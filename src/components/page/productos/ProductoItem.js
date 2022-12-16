import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { DataContext } from "context/DataProvider";
import { DataRentaContext, DataVentaContext } from "context/DataProvider";




export const ProductoItem = ({title, image, category, price, id}) => {

  const value = useContext(DataContext);
  
  const addCarrito = value.addCarrito;



  return (
    
    <div key={id} className="producto">
      <Link to={`/productosRenta/${id}`}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <button onClick={() => addCarrito(id)} className="btn">Añadir al carrito</button>
        <div>
        <Link to={`/productosVenta/${id}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};



export const ProductoItemRenta = ({title, image, category, price, id}) => {

  const value = useContext(DataContext);  
  



  return (
    
    <div key={id} className="producto">
      <Link to={`/productosRenta/${id}`}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <div>
        <Link to={`/productosRenta/${id}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};

export const ProductoItemVenta = ({title, image, category, price, id}) => {

  const valueVenta = useContext(DataVentaContext);

  
 



  return (
    
    <div key={id} className="producto">
      <Link to={`/productosVenta/${id}`}>
      <div className="producto__img">
        <img src={image} alt={title} />
      </div>
      </Link>
      <div className="producto__footer">
        <h1>{title}</h1>
        <p>{category}</p>
        <p className="price">${price} </p>
      </div>
      <div className="bottom">
        <div>
        <Link to={`/productosVenta/${id}`} className="btn">Vista</Link>
        </div>
      </div>
    </div>
  );
};
