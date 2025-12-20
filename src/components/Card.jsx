import React from "react"
import { Link, useNavigate } from "react-router-dom";
import { BotonEditar, BotonEliminar } from "./Button.jsx"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"

export default function Card({ id, name, address, phone, email }) {

    const { store, dispatch } = useGlobalReducer()
    const navigate = useNavigate()

    // Função para eliminar contato usando o store
    const eliminarContacto = async () => {
        console.log('entrado en la function', id);

        await fetch(`https://playground.4geeks.com/contact/agendas/Radamis/contacts/${id}`, {
            method: 'DELETE'
        })
            .then(
                dispatch({
                    type: "deleteContacto",
                    payload: id
                })
            )
            .catch(error => {
                console.error("Error:", error);
            });
    }

    // Função para editar: envia o contato para o formulário
    const EditarContacto = async () => {
        dispatch({
            type: "contacto",
            payload: { theId, name, address, phone, email }
        })
        await fetch(`https://playground.4geeks.com/contact/agendas/Radamis/contacts/${theId}`, {
            method: 'put'
        })
            .then(
                dispatch({
                    type: "deleteContacto",
                    payload: id
                })
            )
            .catch(error => {
                console.error("Error:", error);
            });
    }

    return (
        <div className="card">
        <div className="container">
            <img className="foto"
                src="https://static.vecteezy.com/ti/vetor-gratis/t2/7296445-login-head-sign-icon-design-monochrome-icon-people-icon-design-vetor.jpg"
                alt="Foto do contato"
            />
                <div className="info">
                    <h2>{name}</h2>
                    <p>{address}</p>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>

                <div>
                    <div onClick={() => { navigate(`/EditarContacto/${id}`) }}>
                        <BotonEditar />
                    </div>
                    <div onClick={eliminarContacto}>
                        <BotonEliminar />
                    </div>
                </div>
        </div>
        </div>
    )
}