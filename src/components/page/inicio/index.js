import React from 'react'
import { Link } from "react-router-dom";


export default function Inicio() {
    return (
        <div className="inicio">   
            
            <Link to="/productosVenta">
            <h1>Productos</h1>
            </Link>
            <img src='https://blendergroup.com/wp-content/uploads/2020/01/BLENDER_BANER_CONCRETO-PULIDO-1536x512.jpg' alt=""/>
            <div className="concrete">
            <h1 >CONCRETO ESTAMPADO</h1>
                <div className='columna-div'>
                    <div>
                        <p>El concreto estampado ha cobrado auge en los últimos años debido a sus funcionalidad, su flexibilidad y su estética.</p>
                        <p>En BLENDER® desarrollamos productos especialmente diseñados para el Sistema de Concreto Estampado, que al aplicarlos de manera correcta, ayudan a obtener resultados profesionales</p>
                        <p>Usualmente, el concreto estampado es utilizado para obtener acabados arquitectónicos en el suelo o en muros verticales.</p>
                        <p>Para este tipo de estampados se utilizan diferentes moldes sobre la superficie del concreto con la finalidad de darle un acabado que rememore otro tipo de materiales como losetas, adoquín, piedra, etcétera.</p>
                    </div>
                    <img src="https://blendergroup.com/wp-content/uploads/2019/08/blender-group-concreto-estampado-galeria1-.jpg" alt="" />
                </div>
                <div className='columna-div'>
                <img src="https://blendergroup.com/wp-content/uploads/2019/08/blender-group-concreto-estampado-galeria2-.jpg" alt="" />
                    <div className='right'>
                        <p>El Concreto Estampado BLENDER® combina diseños, colores y texturas únicos; dando como resultado: pisos durables, resistentes y de gran calidad.</p>
                        <p>Por su belleza, los pisos de Concreto Estampado, pueden ser utilizados en interiores y exteriores, como: caminos públicos, centros comerciales, plazas, parques, escuelas, industrias, hoteles, cocheras, estacionamientos y mucho más.</p>
                        <p>Una de las principales razones por las cuales las personas están utilizando concreto estampado en el pavimento, en lugar de otros materiales es por su uso. Debido al constante tráfico o al sol, es necesario darle un mantenimiento adecuado para que no pierda su color y brillo inicial.</p>
                    </div>
                    
                </div>
            
            </div>
        </div>
    )
}
