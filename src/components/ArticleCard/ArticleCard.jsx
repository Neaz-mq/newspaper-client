import { Link } from "react-router-dom";


const ArticleCard = ({ article }) => {

    const {_id,title, photo, name,  tag,  details} = article
    return (
     
        
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Title: {title}</h2>
          <p>Publisher: {name}</p>
          <p>{details}</p>
          <div>
          <Link to={`/article/${_id}`}>
          <button className="btn btn-info">Details</button>
          </Link>
          </div>
        </div>
       
      </div>
     
    );
};

export default ArticleCard;