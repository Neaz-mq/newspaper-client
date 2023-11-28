import { useLoaderData } from "react-router-dom";

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from "react";

const ArticleDetails = () => {
    const article = useLoaderData();
     const {title, photo, name, details} = article;
     const [counterOn, setCounterOn] = useState(false);
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
        <div className="card lg:card-side bg-base-100 shadow-xl ml-14 px-20 py-20">
        <figure className="w-full"><img src={photo}alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title text-4xl mb-10">{title}</h2>
          <p className=" text-2xl">{name}</p> 
          <p className="text-xl -mt-32">{details}</p>
          <div className="stat-value -mt-20">
          <h1 className='text-3xl font-bold text-start'>
            Views: {counterOn && <CountUp start={0} end={5} duration={4} delay={1} />}
           
        </h1>
         
          </div>
          </div>
          
          </div>

          </ScrollTrigger>
    );
};

export default ArticleDetails;