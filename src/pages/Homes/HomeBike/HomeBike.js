import { useEffect, useState } from 'react';
import HomeBikeCard from '../HomeBikeCard/HomeBikeCard';

const HomeBike = () => {
    const [Bikes, setBikes] = useState([]);
    useEffect(()=>{
        fetch('https://radiant-escarpment-35007.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setBikes(data))
    },[])
    return (
        <div className="container">
            <h1 className="text-center bg-dark text-white mb-4">Our Brand New Collection</h1>
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                        {
                            Bikes.slice(0,6).map(bike => <HomeBikeCard key={bike._id} bike={bike} ></HomeBikeCard>)
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HomeBike;