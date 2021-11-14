import React from 'react';
import { Link } from 'react-router-dom';

const BikeCard = (props) => {
    const {name,price,img} = props.Bike || {};
    return (
      <div className=" col-lg-4 col-md-6 col-sm-12 g-2">
            <div class="card" style={{"width": "20rem", "height": "33rem"}}>
                        <img src={img} className="card-img-top w-100 d-flex justify-content-center" alt="..."/>
                        <div class="card-body">
                      <h5 class="card-title text-center">{name}</h5>
                      <h6 class="card-title text-center">Price- <span className="fw-bold">{price} </span>Tk</h6>
                     <div className="text-center">
                         <br/>
                     <Link to={`/bikeregister/${name}`} class="btn button fw-bold bg-dark text-white" >Buy Now <i class="fas fa-biking"></i></Link>
                     </div>
                  </div>
                        
            </div>
        </div>


    );
};

export default BikeCard;