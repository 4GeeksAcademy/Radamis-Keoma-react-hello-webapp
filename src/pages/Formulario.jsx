import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Cuadro from "../components/Inputs.jsx";
import { Save } from "../components/Button.jsx";
import { Link } from "react-router-dom";

export const Formulario = () => {

	const { store, dispatch } = useGlobalReducer()
	const handlerSaludo = () => {
		return dispatch(
			{
				type: 'saludo'
			}
		)
	}

	return (
		<div>
			<div>
				<Cuadro />
				
			</div>
			<footer className="footer mt-auto py-3 text-center">
				<Save />
				<Link to="/">or get back to contact</Link>
			</footer>
			<button onClick={handlerSaludo}>Cambiar linguaje</button>
			<h1>{store.saludoEnIngles === true ? 'Hola' : 'Hello'}</h1>
		</div>
	);
}; 