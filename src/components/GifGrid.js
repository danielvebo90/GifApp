import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem';
import { getGifs } from '../helpers/getGifs';
import { useFecthGifs } from '../hooks/useFecthGifs';

const GifGrid = ({category}) => {

   




    const {data:images,loading} = useFecthGifs(category);

 

    return (

        <>
            <h3 className='animate__animated animate__fadeIn'>{category}</h3>

            {loading && <p className='animate__animated animate__flash'>Loading.....</p>}

            <div className='card-grid'>
                
                {
                    images.map(img => (
                        // <li key={id}>{title}</li>
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            
            </div>
        </>
    )
}

GifGrid.propTypes = {

}

export default GifGrid
