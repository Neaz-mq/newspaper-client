import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Statistic = () => {
    const [counterOn, setCounterOn] = useState(false);
    return (
     
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

<h3 className="section-title lg:text-5xl text-4xl font-bold mt-20 mb-4 lg:mb-0 text-center"> All Statistics </h3>


<div className='mt-24'>
<div className="stats shadow bg-base-200 flex gap-10 p-20 flex-col lg:flex-row">

<div className="stat place-items-center">
    <div className="stat-title text-xl font-bold">All User</div>
    <div className="stat-value">
        <h1 className='text-3xl font-bold'>
            {counterOn && <CountUp start={0} end={200} duration={2} delay={0} />}
            +
        </h1>
    </div>
    <div className="stat-desc">From July 1st to December 1st</div>
</div>
<div className="stat place-items-center">
    <div className="stat-title text-xl font-bold">Normal User</div>
    <div className="stat-value">
        <h1 className='text-3xl font-bold'>
            {counterOn && <CountUp start={0} end={100} duration={2} delay={0} />}
            +
        </h1>
    </div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
</div>
<div className="stat place-items-center">
    <div className="stat-title text-xl font-bold">Premium User</div>
    <div className="stat-value text-secondary">
        <h1 className='text-3xl font-bold'>
            {counterOn && <CountUp start={0} end={50} duration={2} delay={0} />}
            +
        </h1>
    </div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
</div>



</div>
</div>



           
        </ScrollTrigger>

    );
};

export default Statistic;