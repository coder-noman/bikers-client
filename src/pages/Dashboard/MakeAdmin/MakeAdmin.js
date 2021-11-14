import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const { register, handleSubmit,reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        fetch('https://radiant-escarpment-35007.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
        console.log(result);
            if(result.matchedCount === 1){
                alert('Admin Maked Successfully');
                reset();
            }
            else{
                alert('User not exist!');
            }
        })
    };
    return (
        <div className="container">
        <h1 className="text-center fw-bold pt-5 mb-5">Make Admin</h1>
        <div className="d-flex justify-content-center mt-5">
            <form className="row g-3 w-75" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" 
                placeholder="Email"
                type="email" defaultValue={user.email} {...register("email", { required: true })} required />
                <input type="submit" class="btn btn-dark mb-5" />
            </form>
        </div>
        </div>
    );
};

export default MakeAdmin;