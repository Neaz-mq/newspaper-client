import { useLoaderData } from "react-router-dom";
import ArticleCard from "../ArticleCard/ArticleCard";


const AllArticles = () => {
    const articles = useLoaderData();
    return (
        <>
           <div className='m-20'>
 
        
 <div className='grid md:grid-cols-2 ml-20 gap-10'>
         {
           articles.map(article => <ArticleCard
           
             key={article._id}
             article={article}
             
            
           ></ArticleCard>)
         }
          </div>
        </div> 
        </>
    );
};

export default AllArticles;