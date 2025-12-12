// Import necessary components from react-router-dom and other parts of the application.

import useGlobalReducer from "../hooks/useGlobalReducer.jsx";  // Custom hook for accessing the global state.
import { AddContact } from "../components/Button.jsx"
import Card from "../components/Card.jsx";
import { useEffect } from "react";



export const Contactos = () => {

  const { store, dispatch } = useGlobalReducer();

 useEffect(() => {
  fetch("https://playground.4geeks.com/contact/agendas/Radamis/contacts")
    .then(res => res.json())
    .then(data => {
      console.log("API:", data); 
      console.log("contacts:", data.contacts);
      dispatch({
        type: "setContactos",
        payload: data.contacts
      });
    })
    .catch(err => console.error(err));
}, []);

  return (
    <div>
      <AddContact />

      <ul className="list-group">

        {store.contactos && store.contactos.length > 0 ? (
          store.contactos.map((contacto) => (
            <li key={contacto.id} className="list-group-item">
              <Card
                id={contacto.id}
                name={contacto.name}
                address={contacto.address}
                phone={contacto.phone}
                email={contacto.email}
              />
            </li>
          ))
        ) : (
        <p>Nenhum contato encontrado.</p>
        )}
      </ul>
    </div>
  );
};
