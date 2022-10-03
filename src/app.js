import Home_Garden from "./pages/Home_Garden";
import Electronics from "./pages/Electronics";
import Other from "./pages/Other";
import Create from "./pages/Create";
import Home from "./pages/Home";
import Chat from "./pages/chat";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NoPage from "./pages/NoPage";
const App=()=>{
    return (
        <Router>
        <Routes>
            <Route exact path='/'  element={<Home />} />
            <Route path='/electronics' element={<Electronics/>} />
            <Route path='/*' element={<NoPage/>} />
            <Route path='/home_garden' element={<Home_Garden/>} />
            <Route path='/other' element={<Other/>} />
            <Route path='/Create' element={<Create/>} />
            <Route path='/Chat' element={<Chat/>} />
        </Routes>
        </Router>
    )
}
export default App;