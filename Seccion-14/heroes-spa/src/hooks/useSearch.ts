import React, { useMemo, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { FormSearch, getHeroesByName, queryParams } from "../heroes";
import queryString from 'query-string';
import { useForm } from "./useForm";



export const useSearch = () => {
    const navigate = useNavigate(); // Obtener la navegacion
    const location = useLocation(); // Obtener la informacion de la ubicacion donde nos encontramos
    const {q = '' as string} = queryString.parse( location.search )

    const { searchText , onInputChange } = useForm({ searchText: q  as string});

    const heroesFind = useMemo(()=> getHeroesByName( q )
    ,[q])// Solo va a redibujar si las dependencias cambian
    
    const showSearch: boolean =  heroesFind.length > 0;
    const errorSearch: boolean =  !!q && q?.length> 0 && heroesFind.length === 0;

    const onSubmitForm = ( event : React.FormEvent ) =>{
        event.preventDefault();
        // if(searchText.trim().length <= 1) return;
    
        navigate(`?q=${ searchText?.toLocaleLowerCase().trim()}`)
      }

    return {
        heroesFind,
        querySearch:q,
        showSearch,
        errorSearch,
        searchText,
        onSubmitForm,
        onInputChange,
    }
}