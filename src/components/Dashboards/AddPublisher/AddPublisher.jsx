import Swal from "sweetalert2";


const AddPublisher = () => {

    const handleAddPublisher = event => {
        event.preventDefault();


        const form = event.target;

        const image = form.image.value;
        const name = form.name.value; 
        const description = form.description.value;
       
      
      


        const newPublisher = {  image, name, description,  }

        console.log(newPublisher);

         // send data to the server

         fetch('https://newspaper-server-wheat.vercel.app/publishers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPublisher)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Publisher Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })


    }



    return (
        <div className="p-16">
        <h2 className="text-3xl font-extrabold text-center">Add Publisher</h2>
        <div className='lg:ml-96 -mr-16 mt-8'>
        <form onSubmit={handleAddPublisher}>
        <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Image</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="image" placeholder="Image url" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
        <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold"> Publisher Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="name" placeholder="Publisher name" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>

            <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">description</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="description" placeholder="Details" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
           
       
           

            <div className="form-control md:w-1/2">
          
                <input type="submit" value="Add Publisher" className="btn btn-block mt-10 btn-accent text-xl font-semibold" />
               
            </div>
        </form>
        </div>
    </div>
    );
};

export default AddPublisher;