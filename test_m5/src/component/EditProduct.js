import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getAllTypes, getProduct, updateProduct } from '../service/ProductService';
import  {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';

function EditProduct() {
    const navigate = useNavigate();
    const [product,setProduct] = useState();
    const [types,setTypes] = useState([]);
    const param = useParams();

    useEffect(()=>{
        loadProduct(param.id);
        loadTypes();
    },[param.id])

    const loadProduct = async(id) => {
        const tmpProduct = await getProduct(id);
        console.log(tmpProduct);
        setProduct(tmpProduct);
    }
    const loadTypes = async() => {
        const tmpTypes = await getAllTypes();
        setTypes(tmpTypes);
    }
    if(product === undefined){
        return null;
    }
  return (
    <Formik
    initialValues={{
        id: product?.id,
        code: product?.code,
        name: product?.name,
        dateAdded: product?.dateAdded,
        quantity: product?.quantity,
        type: product?.type.id
    }}
    validationSchema={Yup.object({
        code: Yup.string().required(),
        name: Yup.string().required().max(10),
        dateAdded: Yup.string().required(),    
        quantity: Yup.number().required().min(0),
        type: Yup.string().required(),
    })}
    onSubmit={async (value)=>{
        await updateProduct(value);
        navigate("/");    
        alert("Update success!")
    }}
    >
        <Form>
            <label>Code</label><br/>
            <Field type='text' name='code' /><br/>
            <ErrorMessage name='code'/><br/>
            <label>Name</label><br/>
            <Field type='text' name='name' /><br/>
            <ErrorMessage name='name'/><br/>
            <label>Date</label><br/>
            <Field type='date' name='dateAdded' /><br/>
            <ErrorMessage name='dateAdded'/><br/>
            <label>Quantity</label><br/>
            <Field type='number' name='quantity' /><br/>
            <ErrorMessage name='quantity'/><br/>
            <label>Types</label><br/>
            <Field as='select' name='type'>
                {
                    types.map((type)=>{
                        return(
                            <option key={type.id} value={`${type.id}`}>{type.name}</option>
                    )
                    })
                }
            </Field>
            <ErrorMessage name='type'/><br/>
            <button type="submit" >Update</button> 
        </Form>
    </Formik>
  )
}

export default EditProduct