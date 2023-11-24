import { useEffect, useState } from "react";
import Publisher from "../Publisher/Publisher";


const Publishers = () => {
    const [publishers, setPublishers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/publishers')
            .then(res => res.json())
            .then(data => setPublishers(data));
    }, [])
    return (
        <div>
            <div className="text-center">
          <h2 className="text-5xl font-bold p-14 mb-5">All Publishers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-10  lg:mx-8 mx-5 md:ml-16 my-12">
        {
                    publishers.map(publisher => <Publisher
                        key={publisher._id}
                        publisher={publisher}
                    ></Publisher>)
                }
        </div>
        </div>
    );
};

export default Publishers;