import React, { useEffect, useState } from 'react';

const HomeReview = () => {
    const [reviews, setReviews] = useState([])
    useEffect(()=>{
        fetch('https://radiant-escarpment-35007.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    return (
            <div className="container ">
                <h1 className="text-center bg-dark text-white my-5">Our Customer Review</h1>
            <div className="border border-3 border-dark">
            <h3 className="text-center fw-bold my-3">Total Review: {reviews.length}</h3>
            <table class="table">
             <thead>
               <tr>
                 <th scope="col">Customer Email</th>
                 <th scope="col">Review</th>
               </tr>
             </thead>
             </table>
            {
             reviews.map(review => <table class="table">
             <tbody>
               <tr>
                 <td className="text-success fw-bold fs-6">{review.email} </td>
                 <td>{review.review}</td>
               </tr>
             </tbody>
           </table>)
            }
            </div>
            </div>
    );
};

export default HomeReview;