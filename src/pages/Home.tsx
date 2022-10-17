import CardPokemon, {CardPokemonProps} from "../components/CardPokemon";
import { NavBar } from "../components/NavBar";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Title , List, Input} from "./Home.styles";

export const Home = () => {

    const [isLoading, setIsLoading] = useState (true);
    const [pokemonList , setPokemonList] = useState<CardPokemonProps[]>([]);
    const [search, setSearch] = useState('');
    
    
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
            <Title>Econtre todos os pokémons em um só lugar </Title>

            <Input type="text" placeholder="Buscar pelo Nome ou ID" value={search} onChange={(e) => setSearch(e.target.value)}/>

            <List>
                {pokemonList.filter((pokemon) => pokemon.name.includes(search) || String(pokemon.id) === search).map
                ((pokemon, index) =>{
                    return (
                        <CardPokemon key = {index} id = {pokemon.id} name = {pokemon.name} types = {pokemon.types}/>
                    ) ;
            
                    })};
            </List>
        
        </>
    );

    }
