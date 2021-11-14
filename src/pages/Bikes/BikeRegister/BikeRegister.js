import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const BikeRegister = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const {bikename} = useParams()
    const onSubmit = data => {
        console.log(data);
        fetch('https://radiant-escarpment-35007.herokuapp.com/bikesOrder',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order Processed Succesfully');
                reset();
            }
        })
    };
    return (
        <div className="container">
        <h1 className="text-center fw-bold pt-5 mb-5">Please Register For Order</h1>
        <div className="d-flex justify-content-center mt-5">
            <form className="row g-3 w-75" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" defaultValue={bikename}  {...register("bikename")} required/>
                <input className="form-control" placeholder="Name" defaultValue={user.displayName} {...register("name")} required/>
                <input className="form-control" type="email" defaultValue={user.email} {...register("email", { required: true })} required />
                {errors.email && <span className="text-danger">This field is required</span>}
                <input className="form-control" placeholder="Address" defaultValue="" {...register("address")} required/>
                <input className="form-control" placeholder="City" defaultValue="" {...register("city")} required/>
                <input className="form-control" type="number" placeholder="phone number" defaultValue="" {...register("phone")} required/>

                <input type="submit"  class="btn btn-dark" />
            </form>
        </div>
        </div>
    );
};

export default BikeRegister;