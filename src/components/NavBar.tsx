import { Link } from "react-router-dom";
import "./NavBar.css"

type NavBarProps = {
    hasGoBack?: boolean;

}


export const NavBar = (props:NavBarProps) => {

    return (
        <nav className="nav">
            <Link to="/" className="brand">Pokédex</Link>
            {props.hasGoBack && (
                <Link to="/" className="btn-goBack">
                    Voltar
                </Link>
                )}
        </nav>
    );
}