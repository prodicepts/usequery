import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../Appx-Menu/Home";
import Profile from "../Appx-Menu/Profile";
import Career from "../Appx-Menu/Career";
import { useState , createContext } from "react";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";

export const AppContext = createContext();
const Appx = () => {
    const client = new QueryClient();
    // console.log(client)
    const [username, setUsername] = useState("Shittu");
    return (
        <div className="appy">
                 <div className='routes'>
                    <QueryClientProvider client={client}>
                        <AppContext.Provider value={{ username, setUsername }}>
                            <Router>
                                <nav>
                                    <Link to={'/'} >Home</Link>
                                    <Link to={'/profile'} >Profile</Link>
                                    <Link to={'/career'} >Career</Link>
                                </nav>
                                <Routes>
                                        <Route path="/" element ={<Home />}/>
                                        <Route path="/profile" element = {<Profile />} />
                                        <Route path="/career" element ={<Career />}/>
                                </Routes>
                            </Router>
                        </AppContext.Provider>
                    </QueryClientProvider>
                 </div>
        </div>
    );
}
export default Appx;