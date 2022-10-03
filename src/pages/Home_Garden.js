import Nav from "../components/nav"
import NavDown from "../components/navdown";
import Home_Garden_vip from "../vip-pages/Home_Garden_vip";
const Home_Garden =()=>{
    const fist=document.querySelector(".first");
    console.log(fist)
    return(
        <div className="Home_Garden">
            <Nav/>
            <div className="menu">
                <div className="first">
                    <Home_Garden_vip/>
                </div>
                {/* the rooms */}
                <div className="bar">
                <a id="menu-a" href="#">Kitchen</a>
                <div id="menu-product">
                    <div id="product">
                        <a href="#"><img  id="product-img" src="https://i.insider.com/5ee154ee3ad861247b4c1fc9?width=700format=jpegauto=webp" alt="product"/></a><br/>
                        <a href="#" id="product-price">2$</a>
                    </div>
                    <div id="product">
                        <a href="#"><img  id="product-img" src="https://i.insider.com/5ee260003ad8612bd84a71ad?width=700format=jpegauto=webp" alt="product"/></a><br/>
                        <a href="#" id="product-price">12$</a>
                    </div>
                    <div id="product">
                        <a href="#"><img  id="product-img" src="https://i.insider.com/5ee14dc7f0f4190793035882?width=700format=jpegauto=webp" alt="product"/></a><br/>
                        <a href="#" id="product-price">10$</a>
                    </div>
                    <div id="product">
                        <a href="#"><img  id="product-img" src="https://i.insider.com/5ee2859f4dca683f887bade5?width=700format=jpegauto=webp" alt="product"/></a><br/>
                        <a href="#" id="product-price">99$</a>
                    </div>
                    <div id="product">
                        <a href="#"><img  id="product-img" src="https://i.insider.com/5ee258442618b92cb54313d5?width=700format=jpegauto=webp" alt="product"/></a><br/>
                        <a href="#" id="product-price">23$</a>
                    </div>
                </div>
                </div>
            </div>
            <NavDown/>
        </div>
    )
}
export default Home_Garden;