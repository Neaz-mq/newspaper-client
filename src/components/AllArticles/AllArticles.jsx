import { useLoaderData } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";


const AllArticles = () => {
    const articles = useLoaderData();
    return (
        <>
           
           <div className="text-center">
      <h2 className="text-5xl font-bold p-14 mb-3">All Articles</h2>
    </div>
           <div className="text-center -mt-5 mb-5">
 <div className="join">
  <input className="input input-bordered join-item" placeholder="Search article...."/>
  <button className="btn join-item rounded-r-full bg-[#FF444A] text-white">Search</button>
</div>
 </div>
        
 <div className='grid md:grid-cols-2 ml-20 gap-10'>
         {
           articles.map(article => <ArticleCard
           
             key={article._id}
             article={article}
             
            
           ></ArticleCard>)
         }
          </div>
       
        </>
    );
};

export default AllArticles;