import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import { deleteProduct, getAllProducts } from '../service/ProductService';
import {Link} from "react-router-dom"
import Search from './Search';
import dayjs from 'dayjs';
import ModalConfirm from './ModalConfirm';

function Table() {
  const [products,setProducts] = useState([]);
  const [search,setSearch]= useState('');
  const [searchType,setSearchType] =useState(0)
  const [modalData,setModalData] = useState({
    show:false,
    data:null
  })
  const [page,setPage] = useState(0);
  const [totalEl,setTotalEl] = useState(0);
  useEffect(()=>{
    console.log(searchType);
    loadProducts(page,search,searchType);
  },[search,searchType,page]);

  const loadProducts = async (page,searchName,searchType) =>{
    const tmpProducts = await getAllProducts(page,searchName,searchType);
    console.log(tmpProducts.content);
    setTotalEl(tmpProducts.totalElements);
    setProducts(tmpProducts.content);
  }
  const handleCloseModal=()=>{
    setModalData({
      show:false,
      data:null
    })
    
  }
  const handleDeleteProduct = async(id) =>{
    await deleteProduct(id);
    await loadProducts(page,search,searchType);
    handleCloseModal();
  }

  if(products===undefined) return null;
  return (
    <div>
      <Link to={"/add"}>Create product</Link>
      <Search setSearch={(search)=>setSearch(search)} setSearchType={(searchType)=>setSearchType(searchType)}/>
        <table >
          <thead>
          <tr>
            <th>STT</th>
            <th>Code</th>
            <th>Name</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
            {
              products.map((product,index)=>{
                return(
                  <tr key={index}>
                  <td>{index+1}</td>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{dayjs(product.dateAdded).format("DD/MM/YYYY")}</td>
                  <td>{product.quantity}</td>
                  <td>{product.type.name}</td>        
                  <td><Link to={`/edit/${product.id}`}>Edit</Link><button onClick={()=>setModalData({show: true,data:product})}>Delete</button></td>        
                 </tr>
                )
              })
            }
          </tbody>
        </table>
        <Pagination 
            page={page}
            total={totalEl}
            limit={2}
            setPage={(page)=>setPage(page)}
        />
        {
          modalData.show && <ModalConfirm 
          title={"Delete Product"}  
          msg={`Are u sure to delete this product with name: ${modalData.data.name}`}
          onClose={handleCloseModal}
          onConfirm={()=>handleDeleteProduct(modalData.data.id)}
          />
        }
    </div>
  )
}

export default Table