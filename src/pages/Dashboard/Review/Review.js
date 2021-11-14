import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const Review = () => {
    const { register, handleSubmit,reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        fetch('https://radiant-escarpment-35007.herokuapp.com/review',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Review Added Succesfully. Please Check Home Page..');
                reset();
            }
        })
    };
    return (
        <div className="container">
        <h1 className="text-center fw-bold pt-5 mb-5">Please add a Review</h1>
        <div className="d-flex justify-content-center mt-5">
            <form className="row g-3 w-75" onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" 
                placeholder="Email"
                type="email" defaultValue={user.email} {...register("email", { required: true })} required />
                <textarea className="form-control" placeholder="Write Your Review" defaultValue="" {...register("review")} required/>
                <input type="submit"  class="btn btn-dark mb-5" />
            </form>
        </div>
        </div>
    );
};

export default Review;