
export const initialStore = () => {
  return {
    contactos: [],
    nombre: '',
    email: '',
    phone: '',
    address: '',

    
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "limpiarForm":
      return { ...store, nombre: '', phone: '', email: '', address: '' }
    case "setNombre":
      return { ...store, nombre: action.payload };

    case "setPhone":
      return { ...store, phone: action.payload };

    case "setAddress":
      return { ...store, address: action.payload };

    case "setEmail":
      return { ...store, email: action.payload };

    case "setContactos":
      return {
        ...store,
        contactos: action.payload
      };

    case "saveContacto": {
      const contacto = {
        full_name: store.nombre,
        phone: store.phone,
        email: store.email,
        address: store.address,
      };

      return store;
    }

    case 'addContacto': {
      const nuevoContacto = {
        nombre: store.nombre,
        phone: store.phone,
        address: store.address,
        email: store.email
      };

      return {
        ...store,
        contactos: [...store.contactos, nuevoContacto],


        nombre: '',
        phone: '',
        address: '',
        email: ''
      };
    }

    case "deleteContacto":
      return {
        ...store,
        contactos: store.contactos.filter(c => c.id !== action.payload)
      };

    case "selectContacto":
  return {
    ...store,
    contactos: action.payload,
    nombre: action.payload.nombre,
    phone: action.payload.phone,
    email: action.payload.email,
    address: action.payload.address
  };

    default:
      throw Error('Unknown action.');
  }
}
