

const Article = ({article}) => {
    const {_id,title, photo, name,  tag,  details} = article
    return (
        <div>
             <table className="table  w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                SL.
                            </th>

                            <th>Image</th>
                            <th>Title</th>
                            <th>Publisher</th>
                            <th>Approve</th>
                            <th>Decline</th>
                            <th>Delete</th>
                            <th>Premium</th>
                            

                        </tr>
                    </thead>
                    <tbody>
                        
                 <p>{article.title}</p>    
                               
                                   

                             
                              
                            
                        
                        

                    </tbody>
                </table>
        </div>
    );
};

export default Article;