import Swal from "sweetalert2";


const AddArticle = () => {

    const handleAddArticle = event => {
        event.preventDefault();


        const form = event.target;

        const title = form.title.value;
        const photo = form.photo.value;
        const name = form.name.value;
        const tag = form.tag.value;
        const details = form.details.value;
      
      


        const newArticle = { title, photo, name,  tag,  details}

        console.log(newArticle);

         // send data to the server

         fetch('https://newspaper-server-wheat.vercel.app/article', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArticle)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Article Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }

    return (
        <div className="bg-rose-100 p-24">
        <h2 className="text-3xl font-extrabold text-center">Add a Article</h2>
        <div className='lg:ml-96 -mr-16 mt-8'>
        <form onSubmit={handleAddArticle}>
        <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold"> Article Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="title" placeholder="Article name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Image</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="photo" placeholder="Image url" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Publisher </span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder="Publisher name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Tags </span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="tag" placeholder="Tags" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
          
          
            
            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Details</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           

            <div className="form-control md:w-1/2">
          
                <input type="submit" value="Add Article" className="btn btn-block mt-10 btn-accent text-xl font-semibold" />
               
            </div>
        </form>
        </div>
    </div>
    );
};

export default AddArticle;