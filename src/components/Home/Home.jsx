import Banner from "../Banner/Banner";
import Details from "../Details/Details";
import Partners from "../Partners/Partners";
import Plans from "../Plans/Plans";
import Publishers from "../Publishers/Publishers";
import Statistic from "../Statistic/Statistic";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Publishers></Publishers>
           <Statistic></Statistic>
           <Plans></Plans>
           <Details></Details>
           <Partners></Partners>
        </div>
    );
};

export default Home;