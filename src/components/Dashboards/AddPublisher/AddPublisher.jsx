

const AddPublisher = () => {
    return (
        <div className="p-16">
        <h2 className="text-3xl font-extrabold text-center">Add Publisher</h2>
        <div className='lg:ml-96 -mr-16 mt-8'>
        <form>
        <div className="md:flex">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text text-xl font-semibold"> Publisher Name</span>
                    </label>
                    <label className="input-group">

                        <input type="text" name="title" placeholder="Publisher name" className="input input-bordered w-full" />
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
       
           

            <div className="form-control md:w-1/2">
          
                <input type="submit" value="Add Publisher" className="btn btn-block mt-10 btn-accent text-xl font-semibold" />
               
            </div>
        </form>
        </div>
    </div>
    );
};

export default AddPublisher;