import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import Cuadro from "../components/InputEditar.jsx";
import { SaveDos } from "../components/Button.jsx";
import { Link } from "react-router-dom";

export const EditarContacto = () => {

	const { store, dispatch } = useGlobalReducer()
	
	return (
		<div>
			<div>
				<Cuadro />
				
			</div>
			<footer className="footer mt-auto py-3 text-center">
				<SaveDos />
				<Link to="/">or get back to contact</Link>
			</footer>
		</div>
	);
}; 