import React, { useEffect, useState } from 'react';
import BikeCard from '../BikeCard/BikeCard';

const Bikes = () => {
    const [Bikes, setBikes] = useState([]);
    useEffect(()=>{
        fetch('https://radiant-escarpment-35007.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    return (
        <div className="container">
            <h1 className="text-center bg-dark text-white  fw-bold  my-5">Our Collection</h1>
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                        {
                            Bikes.map(Bike => <BikeCard key={Bike._id} Bike={Bike} ></BikeCard>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Bikes;