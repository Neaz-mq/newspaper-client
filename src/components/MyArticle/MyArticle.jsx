import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const MyArticle = () => {
    const [article, setArticle] = useState([]);
    useEffect(() => {
        fetch('https://newspaper-server-wheat.vercel.app/article')
            .then(res => res.json())
            .then(data => setArticle(data));
    }, [])
    return (
        <div>
            <h1 className="text-4xl text-center my-10">My Articles</h1>
            <div className="overflow-x-auto ml-5">
                <table className="table  w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                SL.
                            </th>


                            <th>Title</th>
                            <th>Details</th>
                            <th>Status</th>
                            <th>isPremium</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Decline</th>



                        </tr>
                    </thead>
                    <tbody>

                        {
                            article.map((article, index) => <tr key={article._id}>
                                <th>{index + 1}</th>
                               
                                <td>
                                    {article.title}

                                </td>

                                <td>
                                    {article.details}

                                </td>
                                <td>
                                 <p>Approved</p>

                                </td>

                                <td>
                                 <p>No</p>

                                </td>



                               

                            
                                <td>
                               
                                <Link to={`/updateArticle/${article._id}`}>
                                    <button className="btn btn-active btn-secondary">Update</button>
                                    </Link>
             
                                </td>



                                <td>
                                <Link to={`/deleteArticle/${article._id}`}>
                                    <button className="btn btn-active btn-error"> Delete</button>
                                    </Link>
                                </td>
                                <td>
                              <button className="btn btn-active btn-neutral" onClick={()=>document.getElementById('my_modal_1').showModal()} > Decline</button>
                              <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
  <textarea className="textarea textarea-bordered textarea-lg w-full max-w-xs" placeholder="Complain"></textarea>
    <div className="modal-action">
      <form method="dialog ">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn btn-neutral ">Submit</button>
      </form>
    </div>
  </div>
</dialog>  
                                </td>
                              
                            </tr>)
                        }





                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyArticle;