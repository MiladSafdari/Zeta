const Nav=()=>{
    return(
        <div>
        <div className="Header">
                <img src="image/img1.png" alt="logo"/>
                <a id="link1" href="../">Zeta</a>
                <p id="text1">Now is the time to get out of control </p>
                <button id="btn1">Wallet</button>
        </div>
        <div className="nav">
        <a  id="nava" href="../">Home</a>
            <a  id="nava" href="./electronics">Electronics</a>
            <a  id="nava" href="./home_garden">Home & Garden</a>
            <a  id="nava" href="./other">Other</a>
        </div>
        </div>
    )
}
export default Nav;