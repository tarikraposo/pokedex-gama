import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import * as S from "./Details.style";
import { CardPokemonProps } from "../components/CardPokemon";
import api from "../services/api";
import { Badge } from "../components/Badge";


export const Details = () => {

    const {id} = useParams ();
    
    const [loading, setLoading] = useState (true);

    const [pokemonData, setPokemonData] = useState<CardPokemonProps> ({} as CardPokemonProps);

    async function getPokemonData () {
        const { data } = await api.get("pokemon/" +id);


        setPokemonData ({
                id: data.id,
                name: data.name,
                types: data.types,
        });
        setLoading(false);

    }

    useEffect (() => {
        getPokemonData();
        
    },[]) 

    if (loading){
        return null;
    }

    return (
        <>
        <NavBar hasGoBack/>

        <S.Container>

        {/* <h1> {pokemons.find((pokemon) => String(pokemon.id) === id)?.name} </h1> */}
        

        <S.Image
          className="card__img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          //alt={props.name}
        />
            <S.Card className={`type--${pokemonData.types[0].type.name.toLowerCase()}`}>
            <div className="info">
            <S.Number>
                #{String(id).padStart(3, "0")}
            </S.Number>
            <S.Title>{pokemonData.name}</S.Title>
            {pokemonData.types.map((item, index) => {
                return <Badge key={index} name={item.type.name}/>
            })}
            </div>
        </S.Card>
        </S.Container>
        </>

    );
 
}

