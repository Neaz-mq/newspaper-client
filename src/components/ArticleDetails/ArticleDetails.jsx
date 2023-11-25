import { useLoaderData } from "react-router-dom";


const ArticleDetails = () => {
    const article = useLoaderData();
     const {title, photo, name, details} = article;
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl ml-14 px-20 py-20">
        <figure className="w-full"><img src={photo}alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title text-4xl mb-10">{title}</h2>
          <p className=" text-2xl">{name}</p> 
          <p className="text-xl -mt-32">{details}</p>
        
          </div>
          </div>
    );
};

export default ArticleDetails;