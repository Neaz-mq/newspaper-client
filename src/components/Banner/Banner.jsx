import img1 from '../../assets/images/banner1.jpg'
import img2 from '../../assets/images/banner2.jpg'
import img3 from '../../assets/images/banner3.jpg'
import img4 from '../../assets/images/banner4.jpg'
import img5 from '../../assets/images/banner5.jpg'
import img6 from '../../assets/images/banner6.jpg'



const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute h-full flex items-center  left-0   top-0 bg-gradient-to-r from-[#151515] to -[rgba(21, 21, 21, 0.00)] ">
                  <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className="text-6xl font-bold">US Embassy Issues Warning for Americans Traveling in These 2 Countries</h2>
                    <p>The U.S. Department of State issued a recent travel warning for U.S. citizens traveling between the Dominican Republic and Haiti, after a border closure was announced last week.</p>
                    <div>
                   
                    <button className="btn btn-active btn-secondary">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-full" />
                <div className="absolute  h-full flex items-center  left-0   top-0 bg-gradient-to-r from-[#151515] to -[rgba(21, 21, 21, 0.00)] ">
                  <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className="text-6xl font-bold">Uttarakhand Tunnel Rescue Delayed After Late-Night Snag Halts Drilling</h2>
                    <p>Rescue efforts for the 41 workers trapped in Uttarakhand's Silkyara tunnel entered the final stretch today. However, drilling operations had to be halted late last night after the auger machine broke down, said tunneling expert Arnold Dix.</p>
                    <div>
                   
                    <button className="btn btn-active btn-secondary">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-full" />
                <div className="absolute h-full flex items-center  left-0   top-0 bg-gradient-to-r from-[#151515] to -[rgba(21, 21, 21, 0.00)] ">
                  <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className="text-6xl font-bold">Violent Clashes In Dublin After Children Stabbed Outside School</h2>
                    <p>Protesters on Thursday fought running battles with police, torched vehicles and looted shops in Dublin, after three young children were injured in a knife attack outside a school.</p>
                    <div>
                    <button className="btn btn-active btn-secondary">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-full" />
                <div className="absolute h-full flex items-center  left-0   top-0 bg-gradient-to-r from-[#151515] to -[rgba(21, 21, 21, 0.00)] ">
                  <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className="text-6xl font-bold">Dutch Leader, Who Once Defended BJPs Nupur Sharma</h2>
                    <p>Far-right leader Geert Wilders was the surprise victor in the Netherlands elections, after a late surge that catapulted his anti-EU party to a resounding victory over his mainstream rivals</p>
                    <div>
                    <button className="btn btn-active btn-secondary">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
            <img src={img5} className="w-full" />
                <div className="absolute  h-full flex items-center  left-0   top-0 bg-gradient-to-r from-[#151515] to -[rgba(21, 21, 21, 0.00)] ">
                  <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className="text-6xl font-bold">Hamas To Release 13 Hostages Today After Israel Pauses Gaza Attack</h2>
                    <p>A short truce in the Israel-Hamas war in Gaza will start in a few hours and exchange of hostages is expected to take place later today, mediator Qatar said. The four-day pause in fighting comes after nearly seven weeks of intense fighting</p>
                    <div>
                    <button className="btn btn-active btn-secondary">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide6" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide6" className="carousel-item relative w-full">
            <img src={img6} className="w-full" />
                <div className="absolute  h-full flex items-center  left-0   top-0 bg-gradient-to-r from-[#151515] to -[rgba(21, 21, 21, 0.00)] ">
                  <div className='text-white space-y-7 pl-12 w-1/2'>
                    <h2 className="text-6xl font-bold">This Quiet Blockbuster at the Supreme Court Could Affect All Americans</h2>
                    <p>Some Supreme Court terms are characterized by a single blockbuster case. This term largely revolves around a single blockbuster question: Will our government retain the capacity to address the most pressing issues of our time?</p>
                    <div>
                    <button className="btn btn-active btn-secondary">Read More</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide5" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide7" className="btn btn-circle">❯</a>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;