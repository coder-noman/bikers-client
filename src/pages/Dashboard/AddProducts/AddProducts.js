import React from 'react';
import { useForm } from 'react-hook-form';

const AddProducts = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('https://radiant-escarpment-35007.herokuapp.com/products',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Product Added Succesfully. Please Check Bike Page..');
                reset();
            } 
        })
    };
    return (
        <div className="container">
        <h1 className="text-center fw-bold pt-5 mb-5">Add Products</h1>
        <div className="d-flex justify-content-center mt-5">
            <form className="row g-3 w-75" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" type="text" placeholder="Bike Name" defaultValue="" {...register("name")} required/>
                <input className="form-control" type="number" placeholder="Bike Price" defaultValue="" {...register("price")} required/>
                <input className="form-control" type="text" placeholder="Bike Image" defaultValue="" {...register("img")} required/>
                <input type="submit"  class="btn btn-dark mb-5" />
            </form>
        </div>
        </div>
    );
};

export default AddProducts;