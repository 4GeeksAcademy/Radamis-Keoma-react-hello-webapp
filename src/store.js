
export const initialStore = () => {
  return {
    contactos: [],
    nombre: '',
    email: '',
    phone: '',
    address: '',

    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    saludoEnIngles: true,
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
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

    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

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
        contactoSeleccionado: action.payload
      };

    case 'saludo':

      return {
        ...store,
        saludoEnIngles: !store.saludoEnIngles
      }
    default:
      throw Error('Unknown action.');
  }
}
