import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react";

export default function Cuadro() {
    const { store, dispatch } = useGlobalReducer()

    return (
        <form className="cuerpo">
            <h5>Full Name:</h5>
            <input value={store.nombre}
                onChange={(e) => dispatch({ type: "setNombre", payload: e.target.value })} placeholder="Nombre Completo"></input>
            <h5>E-mail:</h5>
            <input value={store.email}
                onChange={(e) => dispatch({ type: "setEmail", payload: e.target.value })} placeholder="Correo Eletronico"></input>
            <h5>Phone:</h5>
            <input value={store.phone}
                onChange={(e) => dispatch({ type: "setPhone", payload: e.target.value })} placeholder="Numero Telefono"></input>
            <h5>Address:</h5>
            <input value={store.address}
                onChange={(e) => dispatch({ type: "setAddress", payload: e.target.value })} placeholder="Dirección"></input>

        </form>
    )
}
