import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";

export default function Cuadro() {
    const { store, dispatch } = useGlobalReducer()
    const { theId } = useParams()

    useEffect(() => {
    if (store.contactos.length > 0) {
        console.log(store.contactos);
        
        const contacto = store.contactos.find(
            (c) => c.id === Number(theId)
        )

        if (contacto) {
            dispatch({ type: "setNombre", payload: contacto.name })
            dispatch({ type: "setEmail", payload: contacto.email })
            dispatch({ type: "setPhone", payload: contacto.phone })
            dispatch({ type: "setAddress", payload: contacto.address })
        }
    }
}, [store.contactos, theId])

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
