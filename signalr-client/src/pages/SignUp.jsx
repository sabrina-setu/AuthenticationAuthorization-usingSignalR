export function SignUp() {
    return (
        <div>
            <label style={{ margin: "10px" }}>First Name</label>
            <input style={{ margin: "10px" }} type="text" />
            <label style={{ margin: "10px" }}>Last Name</label>
            <input style={{ margin: "10px" }} type="text" />
            <label style={{ margin: "10px" }}>Email</label>
            <input style={{ margin: "10px" }} type="email" />
            <label style={{ margin: "10px" }}>Password</label>
            <input style={{ margin: "10px" }} type="password" />
            <button style={{ margin: "10px" }}>Sign Up</button>
        </div>
    );
}
