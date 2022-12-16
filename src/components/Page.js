import React from "react";
import { Switch, Route} from "react-router-dom";
import Inicio from "./page/inicio";
import { ProductosListVenta, ProductosListRenta } from "./page/productos";
import { ProductosDetallesVenta, ProductosDetallesRenta } from "./page/productos/ProductosDetalles";

export default function Page() {
  return (
    <section>
      <Switch>
				<Route path="/" exact component={Inicio} />
				<Route path="/productosVenta" exact component={ProductosListVenta} />
        <Route path="/productosVenta/:id" exact component={ProductosDetallesVenta} />
        <Route path="/productosRenta" exact component={ProductosListRenta}/>
        <Route path="/productosRenta/:id" exact component={ProductosDetallesRenta}/>
			</Switch>
    </section>
  );
}
