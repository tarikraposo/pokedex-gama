import CardPokemon, {CardPokemonProps} from "../components/PokeList";
import { NavBar } from "../components/NavBar";
import "./Home.css";
import { useEffect, useState } from "react";
import api from "../services/api";

export const Home = () => {

    const [isLoading, setIsLoading] = useState (true);
    const [pokemonList , setPokemonList] = useState<CardPokemonProps[]>([]);

    
    
    async function getPokemonData () {
        const { data } = await api.get("/pokemon?limit=151");

        const completeData = await Promise.all(
            data.results.map (async (result: {url: string})=>{
                const {data} = await api.get(result.url);

                return {
                    id: data.id,
                    name: data.name,
                    types: data.types,
                };
            })
        );

    setPokemonList(completeData);
    setIsLoading(false);
    }

    useEffect (() => {
        getPokemonData();
    },[]) 

    if (isLoading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <NavBar/>
            <h1 className="title">Econtre todos os pokémons em um só lugar</h1>

            <div className="list">
                {pokemonList.map((pokemon, index) =>{
                    return (
                        <CardPokemon key = {index} id = {pokemon.id} name = {pokemon.name} types = {pokemon.types}/>
                    ) ;
            
                    })};
            </div>
        
        </>
    );

    }
