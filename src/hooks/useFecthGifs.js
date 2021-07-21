import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFecthGifs = (category) => {

    const [state, setState] = useState({
        data:[],
        loading:true,
    });


    useEffect(()=>{ // se eje uta cuando el componente es renderizado por primera vez

         getGifs(category)
             .then(imgs =>{

              
                setState({
                    data:imgs,
                    loading:false,
                })
             })
     },[category])// si la categoria cambia volver a lanzar el efecto




    return state;
}

