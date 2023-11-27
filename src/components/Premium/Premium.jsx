import React from 'react';

const Premium = ({premium}) => {
    const { _id, image, title, publisher, description, button} = premium;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
       
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
            <h2 className="card-title text-3xl font-semibold ">{title}</h2>
            <h2 className="card-title text-2xl font-semibold ">Publisher: {publisher}</h2>
            <p className="text-xl">{description}</p>  
            <button className="btn btn-secondary">{button}</button> 
            
           
        </div>
        
        
               
            
            </div>
    );
};

export default Premium;





