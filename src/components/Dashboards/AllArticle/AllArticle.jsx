import { useEffect, useState } from "react";



const AllArticle = () => {
    const [article, setArticle] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/article')
            .then(res => res.json())
            .then(data => setArticle(data));
    }, [])
    return (
        <div>
            <h1 className="text-5xl text-center my-10 font-semibold">All Articles</h1>
            <div className="text-center -mt-5 mb-5">
 <div className="join">
  <input className="input input-bordered join-item" placeholder="Search article...."/>
  <button className="btn join-item rounded-r-full bg-[#FF444A] text-white">Search</button>
</div>
 </div>
            <div className="overflow-x-auto ml-5">
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
                        
                    {
                            article.map((article,index) => <tr key={article._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={article.photo} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </td>           
                                <td>
                                    {article.title}
                                   
                                </td>

                                <td>
                                    {article.name}
                                   
                                </td>

                                
                                <td>
                              <button  className="btn btn-active btn-success"> Approve</button>
                                   
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

                              

                                <td>
                              <button  className="btn btn-active btn-error"> Delete</button>
                                   
                                </td>

                                <td>
                              <button  className="btn btn-active btn-secondary"> Premium</button>
                                   
                                </td>
                              
                            </tr>)
                        }
                               
                               
                                   

                             
                              
                            
                        
                        

                    </tbody>
                </table>

                <div className="join mx-96 my-10">
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
  <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
</div>
            </div>
        </div>
    );
};

export default AllArticle;
