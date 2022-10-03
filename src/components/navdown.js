const NavDown=()=>{
    return(
        <div className="NavDown">
            <div className="SocialMedia-Links">
                <a href="https://t.me/zeta_web3" id="socialmedia-link"><img id="img-telegram" src="image/telegramlogo.png" alt="telegram"/></a>
                <a href="#" id="socialmedia-link"><img id="img-instagram" src="image/instagramLogo.jpeg" alt="instagram"/></a>
                <p id="victor"></p>
            </div>
            <ul className="sites">
                <h3>Sites</h3>
                <a href="../" id="nav-down-link">Home</a><br/>
                <a href="./home_garden" id="nav-down-link">Home & Garden</a><br/>
                <a href="./electronics" id="nav-down-link">Electronics</a><br/>
                <a href="./other" id="nav-down-link">Other</a>
            </ul>
            <ul className="Tools">
                    <h3 >Tools</h3>
                    <a href="./Create" id="nav-down-link-tools">Create</a><br/>
                    <a href="./home_garden" id="nav-down-link-tools">Status</a><br/>
                    <a href="./electronics" id="nav-down-link-tools">My product</a><br/>
                    <a href="./chat" id="nav-down-link-tools">Chat</a>
            </ul>
            <ul className="Help_Contact">
                    <h3 >Help & Contact</h3>
                    <a href="https://Zeta.help.contract@gmail.com" id="nav-down-link-contact">E-mail</a><br/>
                    <p id="nav-down-contact-text">Zeta.help.contract@gmail.com</p>
                    <a href="#" id="nav-down-link-contact">Call</a><br/>
                    <p id="nav-down-contact-text">+49 (176) 26588176</p>
                    <a href="./other" id="nav-down-link-contact">Address</a>
                    <p id="nav-down-contact-text">Germany , Wentorf Bei Hamburg 21465<br/>Fritz-Specht-Weg1,Haus Number 9</p>
            </ul> 
            <ul className="About_us">
                    <h3>About us</h3>
                    <p id="nav-down-about-text">This is a Zeta decentralized P2P platform.<br/>is built on the ethereum network<br/>allows users to buy and sell each other with confidence<br/> without third parties and management<br/>
Here you are the owner of your information.</p>
                    <p id="nav-down-about-text2">Now is the time to get out of control !</p>
            </ul> 
            <p id="copy-r-p">Created By Milad Safdari</p>
        </div>
    )
}
export default NavDown;