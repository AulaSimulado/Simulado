import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Dados enviados:', { email, senha });
    };
    return (
    <>
            <div>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
                            autoComplete="username"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)} // Atualiza o estado
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    <button type="submit">Entrar</button>

                </form>
            </div>
    </>
  )
}

export default Login
