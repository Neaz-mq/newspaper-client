import { useEffect, useState } from "react";
import Premium from "../Premium/Premium";


const Premiums = () => {

    const [premiums, setPremiums] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/premiums')
            .then(res => res.json())
            .then(data => setPremiums(data));
    }, [])


    return (
        <div>
        <div className="text-center">
      <h2 className="text-5xl font-bold p-14 mb-5">Premium Articles</h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-10  lg:mx-8 mx-5 md:ml-16 my-12">
    {
                premiums.map(premium => <Premium
                    key={premium._id}
                    premium={premium}
                ></Premium>)
            }
    </div>
    </div>
    );
};

export default Premiums;