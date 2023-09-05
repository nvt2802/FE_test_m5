import React from 'react'

function Pagination({page,limit,total,setPage}) {
  const totalPages = Math.ceil(total/limit);
  const onClick = (newPage)=>{
    setPage(newPage)
  }
  return (
    <div> <button onClick={()=>onClick(page-1)}>prev</button>
        <span>{page+1}</span>/<span>{totalPages}</span>
        <button onClick={()=>onClick(page+1)}>next</button>
    </div>
  )
}

export default Pagination