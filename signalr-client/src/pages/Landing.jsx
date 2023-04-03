import "./../App.css";
import { SignIn } from "./SignIn";
import { SignUp } from "./SignUp";

export function Landing() {
    return (
        <div className="App">
            <SignIn />
            <p style={{ margin: "10px" }}>---------- OR ---------- </p>
            <SignUp />
        </div>
    );
}
