import React, {useContext} from 'react'
import Logo from '../images/Logoconestnay.png'
import { DataContext } from "context/DataProvider";
import { Link } from "react-router-dom";



export const Header = () => {

  const value = useContext(DataContext);
  const [carrito] = value.carrito;
  const [menu, setMenu] = value.menu;

  const toogleMenu = () =>{
    setMenu(!menu)
  }


  return (
    <div className="header">
        <Link to='/'>
          <div className="logoContainer">
                  <img className="logoImg" src={Logo} alt="" />
          </div>
        </Link>
        <div className="menuBar">
                <li>
                  <Link to='/'>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link to='/productosVenta'>
                    Catalogo Venta
                  </Link>
                </li>
                <li>
                  <Link to='/productosRenta'>
                    Catalogo Renta
                  </Link>
                </li>
        </div>
    </div>
  )
}
