import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const {user} = useAuth();
    const [bikes, setBikes] = useState([])
    useEffect(()=>{
        const url = `https://radiant-escarpment-35007.herokuapp.com/bikesOrder?email=${user.email}`
        fetch(url)
        .then(res => res.json())
        .then(data => setBikes(data))
    })
    console.log(bikes)

    return (
        <div>
            <h1 className="text-center fw-bold my-3">Bike Ordered: {bikes.length}</h1>
            <table class="table">
             <thead>
               <tr>
                 <th scope="col">Customer Name</th>
                 <th scope="col">Bike Name</th>
               </tr>
             </thead>
             </table>
            {
             bikes.map(bike => <table class="table">
             <tbody>
               <tr>
                 <td>{bike.name}</td>
                 <td>{bike.bikename}</td>
               </tr>
             </tbody>
           </table>)
            }
        </div>
    );
};

export default MyOrder;