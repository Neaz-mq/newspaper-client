import { Typewriter } from 'react-simple-typewriter'

const Details = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-10" data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
  <div className="hero-content flex-col lg:flex-row-reverse ">
  <iframe src="https://lottie.host/embed/8a3d677a-92a8-4728-b0db-89638aaba5ad/lDgKHpuQmG.json" className='w-1/2 h-96'></iframe>
    <div>
      <h1 className="lg:text-5xl text-3xl font-bold">The Window <span style={{ color: 'red', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={['To The World Can Be Cover Newspaper!']}
            loop={15}
            cursor
            cursorStyle=''
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
        </span></h1>
      <p className="py-6 text-lg font-medium">Every day or two, I strolled to the village to hear some of the gossip which is incessantly going on there, or from newspaper to newspaper</p>
      <button className="btn btn-primary">Read More</button>
    </div>
  </div>
</div>
    );
};

export default Details;