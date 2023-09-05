import React, { useEffect, useState } from 'react'
import { getAllTypes } from '../service/ProductService';

function Search({setSearch,setSearchType}) {
  const [types,setTypes] = useState([]);

    useEffect(()=>{
        loadTypes();
    },[])
    const loadTypes = async() => {
        const tmpTypes = await getAllTypes();
        setTypes(tmpTypes);
    }
  return (
    <div>
      <input
      type='text'
      placeholder='Search'
      onChange={({currentTarget : input})=>setSearch(input.value)}
      />
        <select id="type" onChange={({currentTarget : select})=>setSearchType(select.value)}>
          <option value={0}>---Type---</option>
        {
                    types.map((type)=>{
                        return(
                            <option key={type.id} value={`${type.id}`}>{type.name}</option>
                    )
                    })
                }
        </select>
    </div>
  )
}

export default Search