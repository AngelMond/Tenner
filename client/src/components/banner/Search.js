import React, { useEffect, useState } from 'react';

export default function Search() {
    const [search, setSearch] = useState('');

    useEffect(()=>{})

    //TODO: create a function to search for the freelancers

    //Function to handle and update the text enter by the user
    const handleInputChange = e => setSearch(e.target.value)

    const handleSumbit = (e)=>{
        e.preventDefault();

        //TODO: add the function that search for the feelancers
    }
  return (
    <form className='search-form col-auto h-100'>
        <input onChange={handleInputChange} id='search-input' className='ps-3 pe-2 ms-2 border rounded-start' type='search' value={search} name='' placeholder='search' />
        <button className='fw-bold px-3 h-100 search-button rounded-end text-white' type='submit'>
            Search
        </button>
    </form>
  )
}
