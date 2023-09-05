import axios from "axios"
export const getAllProducts = async (page=0,searchName,searchType) =>{
    let res;
    if(searchType!==0){
     res = await axios.get(`http://localhost:8080/products?name_like=${searchName}&page=${page}&type_id=${searchType}`);
    }else{
         res = await axios.get(`http://localhost:8080/products?name_like=${searchName}&page=${page}`);
    }
    console.log(res);
    return res.data
}

export const getProduct = async (id) =>{
    const res = await axios.get(`http://localhost:8080/products/${id}`);
    console.log(res);
    return res.data
}
export const deleteProduct = async (id) =>{
    const res = await axios.delete(`http://localhost:8080/products/${id}`);
    return res.data
}
export const createProduct = async (product) =>{
    product.type = await getType(product.type);
    console.log(product.type);
    const res = await axios.post(`http://localhost:8080/products`,product);
    return res.data
}
export const updateProduct = async (product) =>{
    product.type = await getType(product.type);
    const res = await axios.put(`http://localhost:8080/products/${product.id}`,product);
    return res.data
}

export const getAllTypes = async () =>{
    const res = await axios.get(`http://localhost:8080/types`);
    return res.data
}

export const getType = async (id) =>{
    const res = await axios.get(`http://localhost:8080/types/${id}`);
    return res.data
}
