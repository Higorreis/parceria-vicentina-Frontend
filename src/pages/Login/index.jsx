import { useRef } from "react"
import "./login_style.css"
import api from "../../services/API.JS"
import { Link, useNavigate } from "react-router-dom"

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        try {
            const { data: token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value,
            })
            localStorage.setItem('token', token)
            navigate('/home')
        } catch (err) {
            alert('Senha ou Email incorretos.')
        }
    }

    return (
        <div className="body-login">
            <main className="container">
                <form onSubmit={handleSubmit}>
                    <h1>Login Parceria</h1>
                    <div className="input-box">
                        <input ref={emailRef} placeholder=" E-mail" type="email" />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input ref={passwordRef} placeholder="Senha" type="password" />
                        <i className="bx bxs-lock-alt"></i>
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Lembrar a senha
                        </label>
                        <a href="#">Esqueci a senha</a>
                    </div>

                    <button type='submit' className='login'>Login</button>

                    <div className="register-link">
                        <p>Não tem conta?<a href="#">Cadastre-se</a></p>
                    </div>
                </form>

            </main>
        </div>
    )
}


export default Login