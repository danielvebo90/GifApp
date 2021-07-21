import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid'


const GifExpertApp = () => {

    //const categories =['one punch','samurai x', 'Goku']
    const [categories, setCategories] = useState(['one punch'])

    // const handleAdd = () => {
    //     setCategories([...categories,'Pokemon'])
    //     // setCategories(cats => [...cats,'pokemon'])
    // }


    return (
        <div>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories}/>

            <hr />

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map((category) => {
                        return <GifGrid 
                                key={category} 
                                category={category} 
                                />
                    })
                }
            </ol>
        </div>
    )
}

GifExpertApp.propTypes = {

}

export default GifExpertApp
