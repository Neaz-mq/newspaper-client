import { Typewriter } from 'react-simple-typewriter'

const Subscription = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/s2V3b13/per.jpg)' }}>
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg" data-aos="fade-down">
            <h1 className="mb-5 lg:text-5xl lg:mr-0 lg:ml-0 text-2xl font-bold text-white my-8">Read <span style={{ color: 'red', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['Newspaper!']}
              loop={15}
              cursor
              cursorStyle=''
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
              
            />
          </span></h1>
            <p className="mb-5  lg:mr-0 lg:ml-0 lg:text-2xl text-base font-medium ">A newspaper is a device for making the ignorant more ignorant and the crazy crazier</p>
            
            <details className="dropdown">
  <summary className="m-1 btn btn-error text-white">Subscription</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-slate-900 rounded-box w-52">
    <li><a>1 Month</a></li>
    <li><a>1 Year</a></li>
  </ul>
</details>
          </div>
        </div>
      </div>
    );
};

export default Subscription;