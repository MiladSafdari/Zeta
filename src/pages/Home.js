import "../style.css";
import Nav from "../components/nav"
import Navdown from "../components/navdown"
import Home_Garden_vip from "../vip-pages/Home_Garden_vip";
const Home =()=>{
    return(
        <section className="section1">
            <Nav/>
            <Home_Garden_vip/>
            <Navdown/>
        </section>
    )
}
export default Home;