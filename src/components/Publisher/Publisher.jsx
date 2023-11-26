

const Publisher = ({publisher}) => {
    const { _id, image, name, description} = publisher;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
       
       <figure><img src={image} alt="Shoes" /></figure>
       <div className="card-body">
           <h2 className="card-title text-3xl font-semibold ">{name}</h2>
           <p className="text-xl">{description}</p>   
           
          
       </div>
       
       
              
           
           </div>
    );
};

export default Publisher;