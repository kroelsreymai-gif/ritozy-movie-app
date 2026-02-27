import "./Login.css"

function Login({ setUser }) {

    const login = () => {

        const name = prompt("Enter Username")

        if (name) {

            localStorage.setItem("user", name)

            setUser(name)

        }

    }

    return (

        <div className="loginPage">

            <h1>RITOZY</h1>

            <button onClick={login}>
                Login
            </button>

        </div>

    )

}

export default Login