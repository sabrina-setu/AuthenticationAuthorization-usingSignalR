import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/auth.service";

export function SignIn() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData({ ...data, [name]: value });
    };

    function onSubmitSignInForm() {
        const signInData = {
            email: data.email,
            password: data.password,
        };
        authService.signin(signInData).then((res) => {
            console.debug(res.data);
            authService.signout();
            localStorage.setItem("authToken", res.data?.token);
            localStorage.setItem("email", res.data?.email);

            setData(null);
            navigate("/home");
            window.location.reload();
        });
    }
    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    onSubmitSignInForm();
                }}
            >
                <label style={{ margin: "10px" }}>Email</label>
                <input
                    id="email"
                    value={data?.email}
                    onChange={handleInputChange}
                    type="email"
                    name="email"
                    style={{ margin: "10px" }}
                />
                <label style={{ margin: "10px" }}>Password</label>
                <input
                    id="password"
                    value={data?.password}
                    onChange={handleInputChange}
                    type="password"
                    name="password"
                    style={{ margin: "10px" }}
                />
                <button type="submit" style={{ margin: "10px" }}>
                    Sign In
                </button>
            </form>
        </div>
    );
}
