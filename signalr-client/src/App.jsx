import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Landing } from "./pages/Landing";

function App() {
    const [authenticated, setauthenticated] = useState(false);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("authToken");
        if (loggedInUser) {
            setauthenticated(true);
        } else {
            setauthenticated(false);
        }
    }, []);
    return (
        <div>
            {authenticated ? (
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/home" element={<Home />} />
                    </Routes>
                </div>
            ) : (
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Landing />} />
                    </Routes>
                </div>
            )}
        </div>
    );
}

export default App;
