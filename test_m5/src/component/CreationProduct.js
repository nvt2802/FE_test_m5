import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct, getAllTypes, updateProduct } from '../service/ProductService';
import  {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup';


function CreationProduct() {
    const navigate = useNavigate();
    const [types,setTypes] = useState([]);


    useEffect(()=>{
        loadTypes();
    },[])

    const loadTypes = async() => {
        const tmpTypes = await getAllTypes();
        setTypes(tmpTypes);
    }
  return (
    <Formik
    initialValues={{
        code: "",
        name: "",
        dateAdded: "",
        quantity: 0,
        type: 1
    }}
    validationSchema={Yup.object({
        code: Yup.string().required(),
        name: Yup.string().required().max(10),
        dateAdded: Yup.date().required(),    
        quantity: Yup.number().required().min(0),
        type: Yup.number().required(),
    })}
    onSubmit={async (value)=>{
    
        await createProduct(value);
        navigate("/");    
        alert("Create success!");
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
            <button type="submit" >Create</button> 
        </Form>
    </Formik>
  )
}

export default CreationProduct