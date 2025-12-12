import React from "react"
import { BotonEditar, BotonEliminar } from "./Button.jsx"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

export default function Card({ id, name, address, phone, email }) {

    const { store, dispatch } = useGlobalReducer()

    // Função para eliminar contato usando o store
    const eliminarContacto = () => {
        dispatch({
            type: "deleteContacto",
            payload: id
        })
    }

    // Função para editar: envia o contato para o formulário
    const editarContacto = () => {
        dispatch({
            type: "selectContacto",
            payload: { id, name, address, phone, email }
        })
    }

    return (
        <div className="card container d-flex align-items-center p-3 my-2 shadow-sm">

           
            <img 
                src="https://static.vecteezy.com/ti/vetor-gratis/t2/7296445-login-head-sign-icon-design-monochrome-icon-people-icon-design-vetor.jpg"
                className="foto"
                alt="Foto do contato"
            />

            <div className="info ms-3 flex-grow-1">
                <h2>{name}</h2>
                <p>{address}</p>
                <p>{phone}</p>
                <p>{email}</p>
            </div>

            <div className="d-flex flex-column gap-2">
                <BotonEditar onClick={editarContacto} />
                <BotonEliminar onClick={eliminarContacto} />
            </div>

        </div>
    )
}