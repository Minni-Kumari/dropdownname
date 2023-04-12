import React, { useEffect, useState } from 'react'

const Dropdown =()=>{
    const [data , setData]=useState([])
    
    const fetchApi =async()=>{
        try {
            const res = await fetch('https://pokeapi.co/api/v2/pokemon')
            let output = await res.json()
            let finalOutput = output.results
            setData(finalOutput)
        } catch (error) {
            console.log({error})
        }
    }
    useEffect(()=>{
        fetchApi()
    },[])
    console.log(data)
    const handleChange =async(e)=>{
        const res = await fetch(e.target.value)
        let output = await res.json()
        console.log(output)
    }
    return(
        <>
            <select onChange={handleChange}>
               { data?.map((e,i)=>{
                return(
                    <option key={i+1} value={e.url}>
                        {e.name}
                    </option> 
                )
                })
                }
            </select>
        </>
    )
}
export default Dropdown