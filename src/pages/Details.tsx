import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import pokemonList from "../assets/pokemon.json"



export const Details = () => {

    const {id} = useParams ();

    const {pokemons} = pokemonList;

    return (
        <>
           <NavBar hasGoBack/>
        <h1> {pokemons.find((pokemon) => String(pokemon.id) === id)?.name} </h1>
        </>
    );
 
}

